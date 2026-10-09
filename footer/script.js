/* ===== Starfield Engine Implementation with 5 Asteroids Spaced at 3-Second Intervals ===== */
(function() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  const numStars = 180;

  // Pool of 5 Asteroid Objects
  const TOTAL_ASTEROIDS = 5;
  let asteroids = [];

  function initAsteroids() {
    asteroids = [];
    for (let i = 0; i < TOTAL_ASTEROIDS; i++) {
      asteroids.push({
        id: i,
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        length: 120 + Math.random() * 40,
        speed: 5 + Math.random() * 4,
        active: false,
        timer: null
      });
    }
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
  }

  function generateStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random(),
        speed: 0.005 + Math.random() * 0.012
      });
    }
  }

  function launchAsteroid(ast) {
    const angle = Math.random() * Math.PI * 2; // Full random 360-degree direction
    const speed = ast.speed;

    ast.dx = Math.cos(angle) * speed;
    ast.dy = Math.sin(angle) * speed;

    // Pick a starting position just outside screen edges
    const side = Math.floor(Math.random() * 4);
    if (side === 0) {
      // Top
      ast.x = Math.random() * canvas.width;
      ast.y = -60;
    } else if (side === 1) {
      // Right
      ast.x = canvas.width + 60;
      ast.y = Math.random() * canvas.height;
    } else if (side === 2) {
      // Bottom
      ast.x = Math.random() * canvas.width;
      ast.y = canvas.height + 60;
    } else {
      // Left
      ast.x = -60;
      ast.y = Math.random() * canvas.height;
    }

    ast.active = true;
  }

  function scheduleAsteroid(ast, delayMs) {
    if (ast.timer) clearTimeout(ast.timer);
    ast.timer = setTimeout(() => {
      ast.timer = null;
      launchAsteroid(ast);
    }, delayMs);
  }

  function startAsteroidSequence() {
    // Schedule all 5 asteroids sequentially with 3-second (3000ms) delay increments
    asteroids.forEach((ast, index) => {
      const initialDelay = index * 3000;
      scheduleAsteroid(ast, initialDelay);
    });
  }

  function drawAsteroid(ast) {
    if (!ast.active) return;

    ast.x += ast.dx;
    ast.y += ast.dy;

    ctx.save();
    ctx.globalAlpha = 1.0;

    const trailX = ast.x - (ast.dx * (ast.length / 10));
    const trailY = ast.y - (ast.dy * (ast.length / 10));

    let gradient = ctx.createLinearGradient(trailX, trailY, ast.x, ast.y);
    gradient.addColorStop(0, 'rgba(255, 126, 95, 0)');
    gradient.addColorStop(0.5, '#ff7e5f');
    gradient.addColorStop(1, '#feb47b');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(trailX, trailY);
    ctx.lineTo(ast.x, ast.y);
    ctx.stroke();

    ctx.shadowBlur = 14;
    ctx.shadowColor = '#feb47b';
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ast.x, ast.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Reset when far out of screen bounds
    const isOutOfBounds = (
      ast.x < -250 ||
      ast.x > canvas.width + 250 ||
      ast.y < -250 ||
      ast.y > canvas.height + 250
    );

    if (isOutOfBounds) {
      ast.active = false;
      // Respawn this specific asteroid after 3 seconds delay
      scheduleAsteroid(ast, 3000);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background twinkling starfield
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < stars.length; i++) {
      let s = stars[i];
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0) {
        s.speed = -s.speed;
      }
      ctx.globalAlpha = Math.max(0.1, Math.min(s.alpha, 0.85));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw active asteroids in pool
    asteroids.forEach(drawAsteroid);

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  initAsteroids();
  resize();
  startAsteroidSequence();
  animate();
})();
