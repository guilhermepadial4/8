# 🎨 Guia Completo de Animações - Vanilla JS

## 📚 Índice

1. [Animações CSS](#animações-css)
2. [JavaScript Vanilla](#javascript-vanilla)
3. [Exemplos Práticos](#exemplos-práticos)
4. [Como Modificar](#como-modificar)

---

## 🎬 Animações CSS

### 1. Float (Flutuação)

```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-30px);
        opacity: 0.5;
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
```

**O que faz:**
- Elemento sobe 30px no meio da animação
- Volta à posição original
- Dura 3 segundos
- Se repete infinitamente
- Muda opacidade também

**Onde usa:**
- Corações flutuantes
- Confete caindo

**Modificar:**
```css
/* Mais rápido */
animation: float 2s ease-in-out infinite;

/* Mais alto */
transform: translateY(-50px);

/* Mais lento */
animation: float 5s ease-in-out infinite;
```

---

### 2. Pulse Glow (Pulsação)

```css
@keyframes pulse-glow {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.1);
    }
}

.animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}
```

**O que faz:**
- Elemento pisca (opacity)
- Cresce 10% (scale)
- Volta ao normal
- Dura 2 segundos

**Onde usa:**
- Coração nos cartões de mensagem
- Cria efeito de "brilho pulsante"

**Modificar:**
```css
/* Mais brilhante */
opacity: 0.6; /* ao invés de 0.8 */

/* Cresce mais */
transform: scale(1.2); /* ao invés de 1.1 */

/* Mais rápido */
animation: pulse-glow 1s ease-in-out infinite;
```

---

### 3. Heartbeat (Batida de Coração)

```css
@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.3);
    }
    50% {
        transform: scale(1);
    }
}

.animate-heartbeat {
    animation: heartbeat 1.2s ease-in-out infinite;
}
```

**O que faz:**
- 0%: Tamanho normal
- 25%: Cresce para 130% (primeira batida)
- 50%: Volta ao normal (pausa)
- 75%: Cresce novamente (segunda batida)
- 100%: Volta ao normal

**Onde usa:**
- Corações no footer
- Simula batida de coração real

**Modificar:**
```css
/* Batidas mais fortes */
transform: scale(1.5); /* ao invés de 1.3 */

/* Batidas mais rápidas */
animation: heartbeat 0.8s ease-in-out infinite;

/* Batidas mais lentas */
animation: heartbeat 2s ease-in-out infinite;
```

---

### 4. Fade In Up (Entrada)

```css
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
}
```

**O que faz:**
- Começa invisível (opacity: 0)
- Começa 30px abaixo
- Sobe enquanto aparece
- Termina visível na posição final
- Dura 0.8 segundos

**Onde usa:**
- Título "8 Meses"
- Cartões de mensagem
- Galeria de fotos
- Contador de tempo

**Modificar:**
```css
/* Entra de cima */
transform: translateY(-30px); /* ao invés de +30px */

/* Entra de lado */
transform: translateX(30px); /* ao invés de translateY */

/* Mais lento */
animation: fade-in-up 1.5s ease-out forwards;

/* Mais rápido */
animation: fade-in-up 0.4s ease-out forwards;
```

---

### 5. Bounce Gentle (Pulo Suave)

```css
@keyframes bounce-gentle {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.animate-bounce-gentle {
    animation: bounce-gentle 2s ease-in-out infinite;
}
```

**O que faz:**
- Elemento salta 10px
- Volta à posição original
- Dura 2 segundos
- Se repete infinitamente

**Onde usa:**
- Emojis na galeria ao passar mouse
- Cria efeito de "pulo suave"

**Modificar:**
```css
/* Pulos mais altos */
transform: translateY(-20px); /* ao invés de -10px */

/* Pulos mais rápidos */
animation: bounce-gentle 1s ease-in-out infinite;

/* Pulos mais lentos */
animation: bounce-gentle 3s ease-in-out infinite;
```

---

### 6. Shimmer (Brilho Deslizante)

```css
@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

.animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
}
```

**O que faz:**
- Cria um gradiente que se move
- De esquerda para direita
- Cria efeito de "luz passando"
- Dura 2 segundos

**Onde usa:**
- Efeito de brilho ao passar mouse na galeria
- Cria efeito visual atraente

**Modificar:**
```css
/* Brilho mais forte */
rgba(255, 255, 255, 0.5); /* ao invés de 0.3 */

/* Brilho mais rápido */
animation: shimmer 1s infinite;

/* Brilho mais lento */
animation: shimmer 3s infinite;
```

---

## 🔧 JavaScript Vanilla

### Contador de Tempo

```javascript
function updateTimer() {
    const now = new Date();
    const startDate = getStartDate(); // 8 meses atrás
    const diff = now.getTime() - startDate.getTime();

    // Calcular unidades
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualizar elementos
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Atualizar a cada segundo
setInterval(updateTimer, 1000);
```

**Como funciona:**
1. Pega a data/hora atual
2. Calcula diferença com 8 meses atrás
3. Extrai dias, horas, minutos, segundos
4. Atualiza elementos HTML
5. Repete a cada 1 segundo

---

### Corações Flutuantes

```javascript
function createFloatingHeart() {
    const container = document.getElementById('floating-hearts-container');
    const heart = document.createElement('div');
    heart.className = 'floating-heart animate-float';
    heart.textContent = '💕';
    
    // Posição aleatória (0-100%)
    const randomLeft = Math.random() * 100;
    heart.style.left = randomLeft + '%';
    
    // Duração aleatória (8-12 segundos)
    const randomDuration = 8 + Math.random() * 4;
    heart.style.animationDuration = randomDuration + 's';
    
    // Atraso aleatório (0-2 segundos)
    const randomDelay = Math.random() * 2;
    heart.style.animationDelay = randomDelay + 's';
    
    container.appendChild(heart);
    
    // Remover após animação terminar
    setTimeout(() => {
        heart.remove();
    }, (randomDuration + randomDelay) * 1000);
}

// Criar 8 corações iniciais
for (let i = 0; i < 8; i++) {
    setTimeout(() => {
        createFloatingHeart();
    }, i * 300);
}

// Adicionar novo coração a cada 3 segundos
setInterval(() => {
    createFloatingHeart();
}, 3000);
```

**Como funciona:**
1. Cria elemento `<div>` com coração
2. Define posição aleatória
3. Define duração aleatória (8-12s)
4. Define atraso aleatório (0-2s)
5. Adiciona à página
6. Remove após animação terminar
7. Cria novo a cada 3 segundos

**Modificar:**
```javascript
// Mais corações
for (let i = 0; i < 15; i++) { // ao invés de 8

// Mais rápido
setInterval(() => {
    createFloatingHeart();
}, 2000); // ao invés de 3000

// Duração diferente
const randomDuration = 5 + Math.random() * 3; // ao invés de 8 + Math.random() * 4
```

---

### Confete

```javascript
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const emojis = ['💕', '🌹', '✨', '💑', '💖', '🎀', '💗', '⭐'];
    
    // Criar 30 peças
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti animate-float';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Posição aleatória
        const randomLeft = Math.random() * 100;
        confetti.style.left = randomLeft + '%';
        
        // Duração aleatória (3-5 segundos)
        const randomDuration = 3 + Math.random() * 2;
        confetti.style.animationDuration = randomDuration + 's';
        
        // Atraso aleatório (0-0.5 segundos)
        const randomDelay = Math.random() * 0.5;
        confetti.style.animationDelay = randomDelay + 's';
        
        container.appendChild(confetti);
        
        // Remover após animação
        setTimeout(() => {
            confetti.remove();
        }, (randomDuration + randomDelay) * 1000);
    }
}

// Mostrar ao carregar
window.addEventListener('load', () => {
    setTimeout(() => {
        createConfetti();
    }, 500);
});
```

**Como funciona:**
1. Cria 30 peças de confete
2. Cada uma com emoji aleatório
3. Posição, duração e atraso aleatórios
4. Animação float faz cair
5. Remove após terminar
6. Mostrado ao carregar página

---

### Interatividade da Galeria

```javascript
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const emoji = this.querySelector('.gallery-emoji');
        emoji.style.animation = 'none';
        setTimeout(() => {
            emoji.style.animation = 'bounce-gentle 2s ease-in-out infinite';
        }, 10);
    });
    
    card.addEventListener('mouseleave', function() {
        const emoji = this.querySelector('.gallery-emoji');
        emoji.style.animation = 'none';
    });
});
```

**Como funciona:**
1. Seleciona todos os cards da galeria
2. Ao passar mouse (mouseenter):
   - Para animação atual
   - Inicia bounce-gentle
3. Ao sair do mouse (mouseleave):
   - Para animação

---

## 💡 Exemplos Práticos

### Exemplo 1: Mudar Velocidade de Animação

**CSS:**
```css
.animate-float {
    animation: float 3s ease-in-out infinite;
}
```

**Para mais rápido (2 segundos):**
```css
.animate-float {
    animation: float 2s ease-in-out infinite;
}
```

**Para mais lento (5 segundos):**
```css
.animate-float {
    animation: float 5s ease-in-out infinite;
}
```

---

### Exemplo 2: Adicionar Delay

**HTML:**
```html
<div class="message-card animate-fade-in-up" style="animation-delay: 0.4s">
    Conteúdo
</div>
```

**JavaScript:**
```javascript
const cards = document.querySelectorAll('.message-card');
cards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.2) + 's';
});
```

---

### Exemplo 3: Criar Nova Animação

**CSS:**
```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 2s linear infinite;
}
```

**HTML:**
```html
<div class="animate-spin">🎉</div>
```

---

## 🔧 Como Modificar

### 1. Mudar Cores

**styles.css:**
```css
:root {
    --primary-pink: #ec4899;  /* Mude esta cor */
    --light-pink: #fce7f3;
    --dark-pink: #be185d;
}
```

### 2. Mudar Velocidades

**styles.css:**
```css
.animate-float {
    animation: float 3s ease-in-out infinite;  /* Mude 3s */
}
```

### 3. Mudar Quantidade de Corações

**script.js:**
```javascript
for (let i = 0; i < 8; i++) {  // Mude 8
    setTimeout(() => {
        createFloatingHeart();
    }, i * 300);
}
```

### 4. Mudar Frequência de Novos Corações

**script.js:**
```javascript
setInterval(() => {
    createFloatingHeart();
}, 3000);  // Mude 3000 (em milissegundos)
```

### 5. Mudar Quantidade de Confete

**script.js:**
```javascript
for (let i = 0; i < 30; i++) {  // Mude 30
    const confetti = document.createElement('div');
    // ...
}
```

---

## 📊 Tabela de Timing Functions

| Função | Comportamento | Melhor para |
|--------|---------------|------------|
| **linear** | Velocidade constante | Rotações |
| **ease** | Começa/termina lento | Geral |
| **ease-in** | Começa lento | Saídas |
| **ease-out** | Termina lento | Entradas |
| **ease-in-out** | Ambos | Loops |

---

## 🎯 Dicas Finais

1. **Performance**: Use `transform` e `opacity` para animações (mais rápido)
2. **Responsividade**: Teste animações em mobile
3. **Acessibilidade**: Respeite `prefers-reduced-motion`
4. **Performance**: Limite número de elementos animados
5. **Debugging**: Use DevTools para inspecionar animações

---

Pronto! Agora você entende todas as animações! 💕

