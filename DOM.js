<h1 id="title">Hello</h1>

<script>
const heading = document.getElementById("title");

heading.textContent = "Hello JavaScript";
</script>

<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>

<script>
const p = document.querySelector(".text");

p.textContent = "Changed!";
</script>

<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>

<script>
const paragraphs = document.querySelectorAll(".text");

paragraphs.forEach(p => {
    p.style.color = "blue";
});
</script>

<h2 id="heading">Old Text</h2>

<script>
const heading = document.getElementById("heading");

heading.textContent = "New Text";
</script>

<h2 id="heading">Old Text</h2>

<script>
const heading = document.getElementById("heading");

heading.textContent = "New Text";
</script>

<div id="box"></div>

<script>
const box = document.getElementById("box");

box.innerHTML = "<h2>Hello</h2><p>Welcome!</p>";
</script>


<h1 id="title">Hello</h1>

<script>
const title = document.getElementById("title");

title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "40px";
</script>

<h1 id="title">Hello</h1>

<style>
.active {
    color: green;
    font-size: 40px;
}
</style>

<script>
const title = document.getElementById("title");

title.classList.add("active");
</script>