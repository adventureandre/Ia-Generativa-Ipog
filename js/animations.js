/**
 * Funções para animações e efeitos visuais específicos
 */

// Configuração de efeitos de hover para cards
function setupCardHoverEffects() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Efeito de elevação suave ao passar o mouse
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = 'var(--shadow-card-hover)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'var(--shadow-card)';
    });
  });
}

// Efeito de parallax sutil para o hero
function setupParallaxEffect() {
  const heroBackground = document.querySelector('.hero-background');
  const heroContent = document.querySelector('.hero-content');
  
  if (heroBackground && heroContent) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      // Move o fundo em uma velocidade diferente do conteúdo para criar efeito de profundidade
      heroBackground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
  }
}

// Efeito de digitação para o texto da conclusão
function setupTypewriterEffect() {
  const typewriterElement = document.querySelector('.typewriter');
  
  if (typewriterElement) {
    // O efeito de digitação é controlado via CSS com a classe 'animate'
    // que será adicionada pelo Intersection Observer
    
    // Armazena o texto original para garantir que ele seja exibido corretamente
    const originalText = typewriterElement.textContent;
    typewriterElement.setAttribute('data-text', originalText);
  }
}

// Efeito de clique para o botão CTA
function setupButtonClickEffect() {
  const ctaButton = document.querySelector('.cta-button');
  
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      // Previne comportamento padrão do botão
      e.preventDefault();
      
      // Adiciona classe para efeito visual de clique
      ctaButton.classList.add('clicked');
      
      // Remove a classe após a animação
      setTimeout(() => {
        ctaButton.classList.remove('clicked');
      }, 300);
      
      // Aqui você pode adicionar qualquer ação que o botão deve realizar
      console.log('Botão CTA clicado!');
    });
  }
}

// Navegação suave para links internos
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Exporta as funções para uso em outros arquivos
window.AnimationEffects = {
  setupCardHoverEffects,
  setupParallaxEffect,
  setupTypewriterEffect,
  setupButtonClickEffect,
  setupSmoothScrolling
};
