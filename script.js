document.title = "Happy Teacher's Day";



// Animated particle effect
const canvas = document.getElementById("loaderCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: Math.random() * 4 + 1,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    angle: Math.random() * 2 * Math.PI,
    speed: Math.random() * 4 + 1,
    alpha: 1,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.01;

    ctx.beginPath();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  particles = particles.filter(p => p.alpha > 0);

  if (particles.length > 0) {
    requestAnimationFrame(animateParticles);
  } else {
    document.getElementById("animated-loader").style.transition = "opacity 1s ease";
    document.getElementById("animated-loader").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("animated-loader").style.display = "none";
    }, 1000);
  }
}

window.addEventListener("load", () => {
  animateParticles();
});



// 1. Typing effect using Typed.js
const typed = new Typed('#typed-text', {
  strings: ["Happy Teacher's Day! 👩‍🏫👨‍🏫", "Thank You for Everything ❤️"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// 2. Show message and confetti
const popup = document.getElementById("popupOverlay");
const openBtn = document.getElementById("wishBtn");
const closeBtn = document.getElementById("closePopup");

// Show popup
openBtn.addEventListener("click", () => {
  popup.classList.add("show");
  confetti({
    particleCount: 1000,
    spread: 200,
    origin: { y: 0.6 },
  });
});

// Hide popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});


function showMessage() {
    document.getElementById("specialMessage").style.display = "block";
  }



// // 4. Toggle Music
// const music = document.getElementById("bg-music");
// const toggleBtn = document.getElementById("toggleMusic");
// let isPlaying = false;

// toggleBtn.addEventListener("click", () => {
//   if (!isPlaying) {
//     music.play();
//     toggleBtn.textContent = "Pause Music ⏸️";
//   } else {
//     music.pause();
//     toggleBtn.textContent = "Play Music 🎵";
//   }
//   isPlaying = !isPlaying;
// });
