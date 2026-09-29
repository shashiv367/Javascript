/* ===== Starfield Engine Implementation with 5-Second Delay Bi-Directional Asteroid ===== */
(function() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let stars = [];
  const numStars = 120; 

  let asteroid = {
    x: 0, y: 0, dx: 0, dy: 0,
    length: 120, active: false, timer: null
  };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
    if (!asteroid.active && !asteroid.timer) {
      scheduleAsteroid(2000); // Initial start timer buffer
    }
  }

  function generateStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        alpha: Math.random(),
        speed: 0.005 + Math.random() * 0.012
      });
    }
  }

  function launchAsteroid() {
    const directionIndex = Math.random() > 0.5; 
    const speedMultiplier = 6 + Math.random() * 4;

    if (directionIndex) {
      asteroid.dx = -speedMultiplier;
      asteroid.dy = speedMultiplier;
      if (Math.random() > 0.5) {
        asteroid.x = Math.random() * (canvas.width * 0.8);
        asteroid.y = -50;
      } else {
        asteroid.x = canvas.width + 50;
        asteroid.y = Math.random() * (canvas.height * 0.6);
      }
    } else {
      asteroid.dx = speedMultiplier;
      asteroid.dy = -speedMultiplier;
      if (Math.random() > 0.5) {
        asteroid.x = Math.random() * (canvas.width * 0.8) + (canvas.width * 0.2);
        asteroid.y = canvas.height + 50;
      } else {
        asteroid.x = -50;
        asteroid.y = Math.random() * (canvas.height * 0.6) + (canvas.height * 0.4);
      }
    }
    asteroid.active = true;
  }

  function scheduleAsteroid(delayMs = 5000) {
    asteroid.timer = setTimeout(() => {
      asteroid.timer = null;
      launchAsteroid();
    }, delayMs);
  }

  function drawAsteroid() {
    if (!asteroid.active) return;

    asteroid.x += asteroid.dx;
    asteroid.y += asteroid.dy;

    ctx.save();
    ctx.globalAlpha = 1.0;
    
    const trailX = asteroid.x - (asteroid.dx * (asteroid.length / 10));
    const trailY = asteroid.y - (asteroid.dy * (asteroid.length / 10));
    
    let gradient = ctx.createLinearGradient(trailX, trailY, asteroid.x, asteroid.y);
    gradient.addColorStop(0, 'transparent');
    gradient.addColorStop(0.4, '#ff7e5f');
    gradient.addColorStop(1, '#feb47b');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(trailX, trailY);
    ctx.lineTo(asteroid.x, asteroid.y);
    ctx.stroke();

    ctx.shadowBlur = 12;
    ctx.shadowColor = '#feb47b';
    ctx.fillStyle = '#feb47b';
    ctx.beginPath();
    ctx.arc(asteroid.x, asteroid.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const outLeft = asteroid.x < -200 && asteroid.dx < 0;
    const outRight = asteroid.x > canvas.width + 200 && asteroid.dx > 0;
    const outTop = asteroid.y < -200 && asteroid.dy < 0;
    const outBottom = asteroid.y > canvas.height + 200 && asteroid.dy > 0;

    if (outLeft || outRight || outTop || outBottom) {
      asteroid.active = false;
      scheduleAsteroid(5000);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    drawAsteroid();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
})();
