/**
 * Intersection Observer para detectar elementos entrando na viewport
 * e acionar animações baseadas em scroll
 */

// Configuração do Intersection Observer
const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // 10% do elemento visível
};

// Callback executado quando elementos entram/saem da viewport
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    // Se o elemento está visível na viewport
    if (entry.isIntersecting) {
      // Adiciona a classe 'animate' para iniciar a animação
      entry.target.classList.add('animate');
      
      // Para animações que devem ocorrer apenas uma vez
      // Desativa a observação após a animação ser acionada
      if (!entry.target.classList.contains('keep-observing')) {
        observer.unobserve(entry.target);
      }
    } else {
      // Opcional: remover a classe 'animate' quando o elemento sair da viewport
      // Útil para animações que devem repetir sempre que o elemento entrar na viewport
      if (entry.target.classList.contains('keep-observing')) {
        entry.target.classList.remove('animate');
      }
    }
  });
};

// Cria o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Função para observar elementos com classes específicas
function observeElements() {
  // Seleciona todos os elementos com classes de animação
  const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom, .typewriter'
  );
  
  // Adiciona cada elemento ao observer
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Exporta as funções para uso em outros arquivos
window.IntersectionHandler = {
  observeElements: observeElements
};
