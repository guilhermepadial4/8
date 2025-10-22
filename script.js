// ==========================================
// CONFIGURAÇÃO INICIAL
// ==========================================

// Data de início: 8 meses atrás
function getStartDate() {
  const now = new Date();
  // Ajustado para 1h da manhã (hora: 1, min: 0, seg: 0)
  const startDate = new Date(
    now.getFullYear(),
    now.getMonth() - 8,
    now.getDate(),
    1,
    0,
    0
  ); // <-- MUDANÇA AQUI
  return startDate;
}

// ==========================================
// CONTADOR DE TEMPO
// ==========================================

function updateTimer() {
  const now = new Date();
  const startDate = getStartDate();
  const diff = now.getTime() - startDate.getTime();

  // Calcular unidades de tempo
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Atualizar elementos
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

// Atualizar timer a cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Atualizar imediatamente

// ==========================================
// CORAÇÕES FLUTUANTES
// ==========================================

function createFloatingHeart() {
  const container = document.getElementById("floating-hearts-container");
  const heart = document.createElement("div");
  heart.className = "floating-heart animate-float";
  heart.textContent = "💕";

  // Posição aleatória
  const randomLeft = Math.random() * 100;
  heart.style.left = randomLeft + "%";

  // Duração aleatória
  const randomDuration = 8 + Math.random() * 4;
  heart.style.animationDuration = randomDuration + "s";

  // Atraso aleatório
  const randomDelay = Math.random() * 2;
  heart.style.animationDelay = randomDelay + "s";

  container.appendChild(heart);

  // Remover após animação terminar
  setTimeout(() => {
    heart.remove();
  }, (randomDuration + randomDelay) * 1000);
}

// Criar corações iniciais
for (let i = 0; i < 8; i++) {
  setTimeout(() => {
    createFloatingHeart();
  }, i * 300);
}

// Adicionar novos corações a cada 3 segundos
setInterval(() => {
  createFloatingHeart();
}, 3000);

// ==========================================
// CONFETE
// ==========================================

function createConfetti() {
  const container = document.getElementById("confetti-container");
  const emojis = ["💕", "🌹", "✨", "💑", "💖", "🎀", "💗", "⭐"];

  // Criar 30 peças de confete
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti animate-float";
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Posição aleatória
    const randomLeft = Math.random() * 100;
    confetti.style.left = randomLeft + "%";

    // Duração aleatória
    const randomDuration = 3 + Math.random() * 2;
    confetti.style.animationDuration = randomDuration + "s";

    // Atraso aleatório
    const randomDelay = Math.random() * 0.5;
    confetti.style.animationDelay = randomDelay + "s";

    container.appendChild(confetti);

    // Remover após animação
    setTimeout(() => {
      confetti.remove();
    }, (randomDuration + randomDelay) * 1000);
  }
}

// Mostrar confete ao carregar a página
window.addEventListener("load", () => {
  setTimeout(() => {
    createConfetti();
  }, 500);
});

// ==========================================
// INTERATIVIDADE DA GALERIA
// ==========================================

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const emoji = this.querySelector(".gallery-emoji");
    emoji.style.animation = "none";
    setTimeout(() => {
      emoji.style.animation = "bounce-gentle 2s ease-in-out infinite";
    }, 10);
  });

  card.addEventListener("mouseleave", function () {
    const emoji = this.querySelector(".gallery-emoji");
    emoji.style.animation = "none";
  });
});

// ==========================================
// EFEITO DE CLIQUE
// ==========================================

document.addEventListener("click", function (e) {
  // Criar pequeno confete ao clicar em cartões
  if (e.target.closest(".message-card") || e.target.closest(".gallery-card")) {
    const container = document.getElementById("confetti-container");
    const emojis = ["💕", "✨", "💖"];

    for (let i = 0; i < 5; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      confetti.style.left = e.clientX + "px";
      confetti.style.top = e.clientY + "px";

      const randomDuration = 1.5 + Math.random() * 1;
      confetti.style.animationDuration = randomDuration + "s";
      confetti.style.animation = `float ${randomDuration}s ease-in forwards`;

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, randomDuration * 1000);
    }
  }
});

// ==========================================
// SCROLL SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==========================================
// OBSERVADOR DE ELEMENTOS
// ==========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos com animação
document.querySelectorAll(".animate-fade-in-up").forEach((el) => {
  observer.observe(el);
});

// ==========================================
// MODO RESPONSIVO
// ==========================================

function handleResize() {
  const width = window.innerWidth;

  if (width < 480) {
    // Ajustes para mobile muito pequeno
    document.querySelectorAll(".floating-heart").forEach((heart) => {
      heart.style.fontSize = "1.5rem";
    });
  } else if (width < 768) {
    // Ajustes para tablet
    document.querySelectorAll(".floating-heart").forEach((heart) => {
      heart.style.fontSize = "2rem";
    });
  }
}

window.addEventListener("resize", handleResize);
handleResize();

// ==========================================
// ANIMAÇÃO DE CARREGAMENTO
// ==========================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";

  // Animar elementos com delay
  const fadeElements = document.querySelectorAll(".animate-fade-in-up");
  fadeElements.forEach((el, index) => {
    const delay = el.style.animationDelay || "0s";
    el.style.animationDelay = delay;
  });
});

// ==========================================
// PERFORMANCE
// ==========================================

// Limitar número de corações flutuantes
let floatingHeartCount = 0;
const maxFloatingHearts = 20;

const originalCreateFloatingHeart = createFloatingHeart;
createFloatingHeart = function () {
  if (floatingHeartCount < maxFloatingHearts) {
    floatingHeartCount++;
    originalCreateFloatingHeart();

    setTimeout(() => {
      floatingHeartCount--;
    }, 12000); // 12 segundos é o máximo de duração
  }
};

// ==========================================
// CONSOLE LOG
// ==========================================

console.log(
  "%c💕 Site de 8 Meses de Amor 💕",
  "font-size: 20px; color: #ec4899; font-weight: bold;"
);
console.log(
  "%cFeito com amor e JavaScript puro!",
  "font-size: 14px; color: #f9a8d4;"
);
