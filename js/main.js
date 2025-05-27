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
  
  // Inicializa a navegação mobile
  setupMobileNavigation();
  
  // Inicializa as tabs
  setupTabs();
  
  // Inicializa os accordions
  setupAccordions();
  
  // Inicializa filtros de categorias (para casos de uso)
  setupCategoryFilters();
  
  // Inicializa filtros do glossário
  setupGlossaryFilter();
  
  // Inicializa validação do formulário de newsletter
  setupNewsletterFormValidation();
  
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

// Setup para a navegação mobile
function setupMobileNavigation() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      
      // Adiciona classe ao body para prevenir scroll quando menu está aberto
      document.body.classList.toggle('menu-open');
    });
    
    // Fecha o menu ao clicar em um link (para navegação mobile)
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      });
    });
  }
}

// Setup para sistemas de tabs
function setupTabs() {
  const tabHeaders = document.querySelectorAll('.tab-header');
  
  if (tabHeaders.length > 0) {
    tabHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // Remove a classe active de todos os headers e contents
        const tabContainer = header.closest('.tabs');
        if (!tabContainer) return;
        
        tabContainer.querySelectorAll('.tab-header').forEach(h => {
          h.classList.remove('active');
        });
        tabContainer.querySelectorAll('.tab-content').forEach(c => {
          c.classList.remove('active');
        });
        
        // Adiciona a classe active ao header clicado
        header.classList.add('active');
        
        // Exibe o conteúdo correspondente
        const tabId = header.getAttribute('data-tab');
        const tabContent = tabContainer.querySelector(`#${tabId}`);
        if (tabContent) {
          tabContent.classList.add('active');
          
          // Reativa as animações dentro da tab ativa para melhor experiência do usuário
          const animatedElements = tabContent.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom');
          animatedElements.forEach((element, index) => {
            // Reset primeiro
            element.classList.remove('animate');
            
            // Reaplica com pequeno delay
            setTimeout(() => {
              element.classList.add('animate');
            }, 50 + (index * 100));
          });
        }
      });
    });
  }
}

// Setup para acordeões
function setupAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordion = header.closest('.accordion');
        if (!accordion) return;
        
        // Toggle da classe active
        const wasActive = accordion.classList.contains('active');
        accordion.classList.toggle('active');
        
        // Manipula a altura do conteúdo
        const content = accordion.querySelector('.accordion-content');
        if (content) {
          if (wasActive) {
            content.style.maxHeight = '0';
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        }
        
        // Atualiza o ícone
        const icon = header.querySelector('.accordion-icon');
        if (icon) {
          icon.textContent = wasActive ? '+' : '-';
        }
      });
    });
  }
}

// Setup para filtros de categorias (usado na página de casos de uso)
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove a classe active de todos os botões do mesmo grupo
        const filterGroup = this.closest('.filter-group');
        if (!filterGroup) return;
        
        filterGroup.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
        });
        
        // Adiciona a classe active ao botão clicado
        this.classList.add('active');
        
        // Obtém todos os filtros ativos
        const activeFilters = {};
        document.querySelectorAll('.filter-group').forEach(group => {
          const activeBtn = group.querySelector('.filter-btn.active');
          if (activeBtn) {
            const filter = activeBtn.getAttribute('data-filter');
            if (filter && filter !== 'all') {
              const category = group.querySelector('h3')?.textContent.toLowerCase() || 'category';
              activeFilters[category] = filter;
            }
          }
        });
        
        // Filtra os cards com base nos filtros ativos
        const allItems = document.querySelectorAll('[data-categories]');
        allItems.forEach(item => {
          const categories = item.getAttribute('data-categories')?.split(' ') || [];
          let shouldShow = true;
          
          // Verifica se o item corresponde a todos os filtros ativos
          Object.values(activeFilters).forEach(filter => {
            if (!categories.includes(filter)) {
              shouldShow = false;
            }
          });
          
          // Mostra ou esconde o item
          item.style.display = shouldShow ? '' : 'none';
          
          // Se estiver visível, reaplica animações
          if (shouldShow) {
            // Reset e reaplica animações
            const animationDelay = Math.random() * 300;
            setTimeout(() => {
              item.classList.remove('animate');
              setTimeout(() => {
                item.classList.add('animate');
              }, 50);
            }, animationDelay);
          }
        });
      });
    });
  }
}

/**
 * Configuração do filtro alfabético do glossário
 * Permite filtrar termos do glossário por letra inicial
 */
function setupGlossaryFilter() {
  const filterButtons = document.querySelectorAll('.glossary-filter .filter-btn');
  const glossaryLetters = document.querySelectorAll('.glossary-letter');
  
  if (!filterButtons.length || !glossaryLetters.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe ativa de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Adiciona classe ativa ao botão clicado
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      // Mostra/oculta seções baseado no filtro
      glossaryLetters.forEach(section => {
        if (filter === 'all') {
          section.style.display = 'block';
        } else {
          const sectionId = section.getAttribute('id');
          if (sectionId === filter) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        }
      });
      
      // Anima os itens que se tornaram visíveis
      setTimeout(() => {
        const visibleDefinitions = document.querySelectorAll('.glossary-letter[style="display: block"] dt, .glossary-letter[style="display: block"] dd');
        visibleDefinitions.forEach((def, index) => {
          def.style.opacity = '0';
          setTimeout(() => {
            def.style.transition = 'opacity 0.5s ease';
            def.style.opacity = '1';
          }, 50 * index);
        });
      }, 100);
    });
  });
  
  // Ativa o filtro "todos" por padrão
  const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
  if (allFilter) {
    allFilter.classList.add('active');
  }
}

/**
 * Configuração e validação do formulário de newsletter
 */
function setupNewsletterFormValidation() {
  const newsletterForm = document.getElementById('newsletter-signup');
  
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica do formulário
    const emailInput = this.querySelector('#email');
    const nameInput = this.querySelector('#name');
    const termsCheckbox = this.querySelector('input[name="terms"]');
    
    let isValid = true;
    
    // Validar email
    if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
      highlightInvalidField(emailInput, 'Por favor, insira um email válido');
      isValid = false;
    } else {
      clearInvalidHighlight(emailInput);
    }
    
    // Validar nome
    if (!nameInput.value || nameInput.value.trim().length < 3) {
      highlightInvalidField(nameInput, 'Por favor, insira seu nome completo');
      isValid = false;
    } else {
      clearInvalidHighlight(nameInput);
    }
    
    // Validar termos
    if (!termsCheckbox.checked) {
      const checkboxContainer = termsCheckbox.closest('.checkbox-container');
      checkboxContainer.classList.add('invalid');
      isValid = false;
    } else {
      const checkboxContainer = termsCheckbox.closest('.checkbox-container');
      checkboxContainer.classList.remove('invalid');
    }
    
    // Se o formulário for válido, simula envio (em um projeto real, enviaria para um backend)
    if (isValid) {
      // Simular envio bem-sucedido
      const formContainer = newsletterForm.closest('.newsletter-form');
      formContainer.innerHTML = `
        <div class="success-message">
          <h3>Inscrição realizada com sucesso!</h3>
          <p>Obrigado por se inscrever em nossa newsletter.</p>
          <p>Você receberá nosso próximo conteúdo exclusivo diretamente em seu email.</p>
        </div>
      `;
    }
  });
  
  // Funções auxiliares para validação
  function highlightInvalidField(field, message) {
    field.classList.add('invalid');
    
    // Adiciona mensagem de erro se ainda não existir
    let errorMessage = field.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }
    
    errorMessage.textContent = message;
  }
  
  function clearInvalidHighlight(field) {
    field.classList.remove('invalid');
    
    // Remove mensagem de erro se existir
    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.remove();
    }
  }
}
