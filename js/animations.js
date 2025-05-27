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

// Efeito de transição para estatísticas (contador de números)
function setupStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length > 0) {
    // Função para animar a contagem de um número
    function animateCounter(element) {
      const finalValue = parseFloat(element.textContent.replace(/[^\d.-]/g, ''));
      const prefix = element.textContent.replace(/[\d.-]/g, '').split(finalValue)[0] || '';
      const suffix = element.textContent.replace(/[\d.-]/g, '').split(finalValue)[1] || '';
      const duration = 2000; // duração da animação em ms
      const frameRate = 60;
      const totalFrames = duration * frameRate / 1000;
      let frame = 0;
      
      // Reseta para zero
      element.textContent = prefix + '0' + suffix;
      
      // Anima a contagem
      const counter = setInterval(() => {
        frame++;
        
        // Função easeOutQuart para uma desaceleração suave
        const progress = 1 - Math.pow(1 - (frame / totalFrames), 4);
        const currentValue = (finalValue * progress).toFixed(finalValue % 1 === 0 ? 0 : 1);
        
        // Atualiza o texto
        element.textContent = prefix + currentValue + suffix;
        
        // Para a animação quando estiver completa
        if (frame === totalFrames) {
          clearInterval(counter);
          element.textContent = prefix + finalValue + suffix;
        }
      }, 1000 / frameRate);
    }
    
    // Observer para detectar quando as estatísticas entram na viewport
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    // Observa cada número de estatística
    statNumbers.forEach(stat => {
      statsObserver.observe(stat);
    });
  }
}

// Efeito de feedback visual para formulários
function setupFormFeedback() {
  const forms = document.querySelectorAll('form');
  
  if (forms.length > 0) {
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        // Previne envio real para demonstração
        e.preventDefault();
        
        // Valida o formulário (implementação básica)
        let isValid = true;
        
        form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
          } else {
            field.classList.remove('error');
          }
        });
        
        if (isValid) {
          // Efeito visual de sucesso
          form.classList.add('success');
          
          // Simulação de envio
          const submitButton = form.querySelector('button[type="submit"]');
          if (submitButton) {
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Simula resposta do servidor
            setTimeout(() => {
              // Resetar formulário
              form.reset();
              
              // Exibe mensagem de sucesso
              const successMessage = document.createElement('div');
              successMessage.className = 'form-success-message';
              successMessage.textContent = 'Mensagem enviada com sucesso!';
              form.appendChild(successMessage);
              
              // Remove a mensagem após alguns segundos
              setTimeout(() => {
                successMessage.classList.add('fade-out');
                setTimeout(() => {
                  successMessage.remove();
                }, 500);
              }, 3000);
              
              // Restaura o botão
              submitButton.disabled = false;
              submitButton.textContent = originalText;
              form.classList.remove('success');
            }, 1500);
          }
        } else {
          // Efeito visual de erro
          form.classList.add('error');
          setTimeout(() => {
            form.classList.remove('error');
          }, 500);
        }
      });
      
      // Remove mensagem de erro ao corrigir campo
      form.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('input', function() {
          this.classList.remove('error');
        });
      });
    });
  }
}

// Efeito de pulsação para CTAs
function setupPulseEffect() {
  const pulseElements = document.querySelectorAll('.pulse');
  
  if (pulseElements.length > 0) {
    pulseElements.forEach(element => {
      // Adiciona a classe 'pulsing' para iniciar a animação
      // após um pequeno delay para chamar atenção
      setTimeout(() => {
        element.classList.add('pulsing');
      }, 1500);
    });
  }
}

// Efeito de barras de progresso para métricas
function setupProgressBars() {
  const progressBars = document.querySelectorAll('.bar');
  
  if (progressBars.length > 0) {
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-progress');
          progressObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
    
    progressBars.forEach(bar => {
      // Reseta a largura para animação
      const targetWidth = bar.style.width;
      bar.style.width = '0';
      
      // Observa quando entrar na viewport
      progressObserver.observe(bar);
      
      // Adiciona evento para quando a animação começar
      bar.addEventListener('animationstart', function() {
        this.style.width = targetWidth;
      });
    });
  }
}

// Exporta funções adicionais
window.AnimationEffects = {
  // Funções existentes
  setupCardHoverEffects,
  setupParallaxEffect,
  setupTypewriterEffect,
  setupButtonClickEffect,
  setupSmoothScrolling,
  
  // Novas funções
  setupStatCounters,
  setupFormFeedback,
  setupPulseEffect,
  setupProgressBars
};

// Inicializa novas animações
document.addEventListener('DOMContentLoaded', () => {
  window.AnimationEffects.setupStatCounters();
  window.AnimationEffects.setupFormFeedback();
  window.AnimationEffects.setupPulseEffect();
  window.AnimationEffects.setupProgressBars();
});
