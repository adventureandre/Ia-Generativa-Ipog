/**
 * Arquivo principal de JavaScript
 * Inicializa todos os efeitos e funcionalidades
 */

// Função principal executada quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada! Inicializando efeitos...');
  
  // Inicializa o Intersection Observer para animações baseadas em scroll
  if (window.IntersectionHandler && typeof window.IntersectionHandler.observeElements === 'function') {
    window.IntersectionHandler.observeElements();
    console.log('Intersection Observer inicializado');
  } else {
    console.error('Intersection Handler não encontrado');
  }
  
  // Inicializa os efeitos de animação
  if (window.AnimationEffects) {
    // Efeito de hover para cards
    window.AnimationEffects.setupCardHoverEffects();
    
    // Efeito de parallax para o hero
    window.AnimationEffects.setupParallaxEffect();
    
    // Efeito de digitação para o texto da conclusão
    window.AnimationEffects.setupTypewriterEffect();
    
    // Efeito de clique para o botão CTA
    window.AnimationEffects.setupButtonClickEffect();
    
    // Navegação suave para links internos
    window.AnimationEffects.setupSmoothScrolling();
    
    console.log('Efeitos de animação inicializados');
  } else {
    console.error('Animation Effects não encontrado');
  }
  
  // Adiciona classe para iniciar animações que devem começar imediatamente
  // (sem depender do scroll)
  startInitialAnimations();
});

// Inicia animações que devem começar assim que a página carrega
function startInitialAnimations() {
  // Animações do hero que devem começar imediatamente
  const heroElements = document.querySelectorAll('.hero .fade-in, .hero .slide-in-left, .hero .slide-in-right');
  
  heroElements.forEach((element, index) => {
    // Adiciona um pequeno delay para cada elemento
    setTimeout(() => {
      element.classList.add('animate');
    }, index * 200); // 200ms de delay entre cada elemento
  });
  
  // Inicia a animação de gradiente do fundo do hero
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    heroBackground.classList.add('animate');
  }
}

// Função para detectar dispositivos móveis e ajustar comportamentos específicos
function isMobileDevice() {
  return (window.innerWidth <= 768);
}

// Ajusta comportamentos específicos para dispositivos móveis
function setupMobileSpecificBehaviors() {
  if (isMobileDevice()) {
    // Exemplo: Desativar efeitos pesados em dispositivos móveis
    document.body.classList.add('mobile-device');
    
    // Reduzir intensidade de alguns efeitos
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
      element.style.transform = 'none'; // Desativa parallax em mobile
    });
  }
}

// Detecta redimensionamento da janela para ajustar comportamentos responsivos
window.addEventListener('resize', () => {
  setupMobileSpecificBehaviors();
});

// Configura comportamentos específicos para mobile na carga inicial
setupMobileSpecificBehaviors();
