# 💕 Site de 8 Meses de Amor - Versão Vanilla

Um site romântico e animado para celebrar 8 meses de namoro, criado com **HTML, CSS e JavaScript puro** (sem frameworks ou dependências externas).

## 🎯 Características

✨ **Animações Suaves**
- Corações flutuantes continuamente
- Efeito de confete ao carregar
- Transições e pulsações românticas
- Animações ao interagir com elementos

🎨 **Design Rosa Elegante**
- Paleta de cores rosa e rose
- Gradientes suaves
- Layout responsivo
- Tipografia elegante

💬 **Conteúdo Personalizado**
- 3 mensagens de amor
- Galeria com 6 momentos especiais
- Contador dinâmico de tempo
- Footer com corações animados

📱 **Responsivo**
- Funciona em mobile, tablet e desktop
- Otimizado para todos os tamanhos de tela
- Sem dependências externas

## 📁 Estrutura de Arquivos

```
site-namorada-vanilla/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e animações CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
Simplesmente abra o arquivo `index.html` no navegador:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opção 2: Usar um Servidor Local
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📝 Personalização

### Mudar as Mensagens

Edite `index.html` e procure pela seção "Mensagens":

```html
<div class="message-card">
    <span class="message-icon animate-pulse-glow">💕</span>
    <div class="message-content">
        <h3 class="message-title">Seu Título</h3>
        <p class="message-text">Sua mensagem aqui</p>
    </div>
</div>
```

### Mudar as Cores

Edite `styles.css` e procure por `:root`:

```css
:root {
    --primary-pink: #ec4899;      /* Cor principal */
    --light-pink: #fce7f3;         /* Rosa claro */
    --dark-pink: #be185d;          /* Rosa escuro */
    /* ... outras cores ... */
}
```

### Ajustar Velocidade das Animações

Edite `styles.css`:

```css
.animate-float {
    animation: float 3s ease-in-out infinite;  /* Mude 3s */
}

.animate-heartbeat {
    animation: heartbeat 1.2s ease-in-out infinite;  /* Mude 1.2s */
}
```

### Adicionar Mais Momentos na Galeria

Edite `index.html` e adicione um novo card na seção "Nossos Momentos":

```html
<div class="gallery-card animate-fade-in-up" style="animation-delay: 0.6s">
    <div class="gallery-emoji">🎉</div>
    <h3 class="gallery-card-title">Novo Momento</h3>
    <p class="gallery-card-description">Descrição do momento</p>
</div>
```

## 🎨 Animações Disponíveis

| Animação | Duração | Efeito |
|----------|---------|--------|
| **float** | 3s | Sobe e desce |
| **pulse-glow** | 2s | Pisca e cresce |
| **heartbeat** | 1.2s | Batida de coração |
| **fade-in-up** | 0.8s | Aparece subindo |
| **bounce-gentle** | 2s | Pulo suave |
| **shimmer** | 2s | Brilho deslizante |

## 🔧 Funcionalidades JavaScript

### Contador de Tempo
Atualiza a cada segundo mostrando:
- Dias desde o início
- Horas restantes
- Minutos restantes
- Segundos restantes

### Corações Flutuantes
- 8 corações iniciais
- Novo coração a cada 3 segundos
- Posição e timing aleatórios
- Removidos após animação terminar

### Confete
- Mostrado ao carregar a página
- 30 peças com emojis aleatórios
- Efeito ao clicar em cartões
- Desaparece após animação

### Interatividade
- Efeitos ao passar mouse na galeria
- Confete ao clicar em cartões
- Scroll suave
- Observador de elementos

## 📊 Compatibilidade

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Opera 76+
✅ Mobile browsers (iOS Safari, Chrome Android)

## 🎓 Código Explicado

### HTML
- Estrutura semântica
- Elementos com IDs para JavaScript
- Classes para CSS

### CSS
- Variáveis CSS para cores
- Animações com `@keyframes`
- Media queries para responsividade
- Gradientes lineares

### JavaScript
- DOM manipulation
- Event listeners
- Intervals e timeouts
- Intersection Observer API

## 💡 Dicas

1. **Performance**: Limite corações flutuantes para máximo 20
2. **Customização**: Mude as cores no `:root` do CSS
3. **Responsividade**: Teste em diferentes tamanhos de tela
4. **Acessibilidade**: Adicione `alt` text se usar imagens
5. **SEO**: Mantenha o `<title>` e `<meta>` tags

## 🚀 Ideias para Expandir

- [ ] Adicionar música de fundo
- [ ] Seção de fotos reais com upload
- [ ] Timeline interativa
- [ ] Contador regressivo para próxima data
- [ ] Modo escuro
- [ ] Compartilhamento em redes sociais
- [ ] Efeito de chuva de corações ao clicar
- [ ] Carrossel de fotos

## 📄 Licença

Livre para usar e modificar! Feito com ❤️

## 👨‍💻 Autor

Criado com amor para celebrar relacionamentos especiais.

---

**Dúvidas ou sugestões?** Customize conforme necessário!

Aproveite e demonstre todo seu amor! 💕

# 8
