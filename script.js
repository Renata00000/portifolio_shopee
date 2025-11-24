// ========== NAVEGAÇÃO ENTRE PROJETOS ==========
function showProject(projectId, menuItem) {
  // Remove 'active' de todas as seções
  document.querySelectorAll('.project-section').forEach(section => {
    section.classList.remove('active');
  });

  // Remove 'active' de todos os itens do menu
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });

  // Ativa a seção e o menu clicado
  document.getElementById(projectId).classList.add('active');
  menuItem.classList.add('active');

  // Rola suavemente para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Reativa animações de entrada para .content-row
  if (projectId !== 'welcome') {
    setTimeout(() => {
      observeRows();
    }, 100);
  }
}

// ========== OBSERVADOR DE ANIMAÇÕES ==========
function observeRows() {
  const rows = document.querySelectorAll('.content-row');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  rows.forEach(row => {
    row.classList.remove('visible');
    observer.observe(row);
  });
}

// ========== MODAL DE IMAGEM ==========
function openImageModal(imageFrame) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('modalCaption');
  const img = imageFrame.querySelector('img');
  
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  
  // Adiciona classe para animação
  setTimeout(() => {
    modalImg.style.opacity = '1';
  }, 10);
  
  // Previne propagação do clique
  event.stopPropagation();
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  modalImg.style.opacity = '0';
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Fecha o modal ao clicar fora da imagem
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeImageModal();
      }
    });
    
    // Previne fechamento ao clicar na imagem
    modalImg.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  // Fecha modal com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
});

// ========== PARTÍCULAS ANIMADAS DE FUNDO ==========
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const colors = [
    'rgba(102, 126, 234, 0.4)',
    'rgba(118, 75, 162, 0.4)',
    'rgba(6, 182, 212, 0.4)',
    'rgba(59, 130, 246, 0.4)',
    'rgba(16, 185, 129, 0.4)',
    'rgba(245, 158, 11, 0.4)',
    'rgba(139, 92, 246, 0.4)',
    'rgba(99, 102, 241, 0.4)'
  ];
  
  // Cria 50 partículas flutuantes coloridas
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 12 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '30%';
    particle.style.background = color;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `floatParticle ${Math.random() * 15 + 10}s ease-in-out infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    particle.style.filter = 'blur(1px)';
    
    particlesContainer.appendChild(particle);
  }
  
  // Adiciona círculos maiores que se movem lentamente
  for (let i = 0; i < 10; i++) {
    const bigCircle = document.createElement('div');
    const size = Math.random() * 150 + 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    bigCircle.style.position = 'absolute';
    bigCircle.style.width = `${size}px`;
    bigCircle.style.height = `${size}px`;
    bigCircle.style.borderRadius = '50%';
    bigCircle.style.background = `radial-gradient(circle, ${color}, transparent)`;
    bigCircle.style.left = `${Math.random() * 100}%`;
    bigCircle.style.top = `${Math.random() * 100}%`;
    bigCircle.style.animation = `floatBig ${Math.random() * 30 + 20}s ease-in-out infinite`;
    bigCircle.style.animationDelay = `${Math.random() * 10}s`;
    bigCircle.style.opacity = '0.3';
    bigCircle.style.filter = 'blur(40px)';
    
    particlesContainer.appendChild(bigCircle);
  }
}

// Animações personalizadas para partículas
const style = document.createElement('style');
style.textContent = `
  @keyframes floatParticle {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      transform: translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px) rotate(180deg) scale(1.5);
      opacity: 0.8;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg) scale(0.8);
      opacity: 0;
    }
  }
  
  @keyframes floatBig {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1.2);
    }
    66% {
      transform: translate(${Math.random() * -200 + 100}px, ${Math.random() * 200 - 100}px) scale(0.9);
    }
  }
`;
document.head.appendChild(style);

// ========== EFEITO CURSOR TRAIL COLORIDO ==========
function addCursorTrail() {
  const colors = ['#667eea', '#764ba2', '#06b6d4', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#6366f1'];
  let colorIndex = 0;
  
  document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${colors[colorIndex % colors.length]};
      pointer-events: none;
      z-index: 9999;
      left: ${e.clientX - 10}px;
      top: ${e.clientY - 10}px;
      opacity: 0.6;
      animation: trailFade 1s ease-out forwards;
      box-shadow: 0 0 20px ${colors[colorIndex % colors.length]};
    `;
    
    document.body.appendChild(trail);
    colorIndex++;
    
    setTimeout(() => trail.remove(), 1000);
  });
  
  // Adiciona animação do trail
  if (!document.getElementById('trailStyle')) {
    const trailStyle = document.createElement('style');
    trailStyle.id = 'trailStyle';
    trailStyle.textContent = `
      @keyframes trailFade {
        0% {
          transform: scale(1) rotate(0deg);
          opacity: 0.6;
        }
        100% {
          transform: scale(0) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(trailStyle);
  }
}

// ========== EFEITOS DE HOVER NOS CARDS ==========
function addCardEffects() {
  const cards = document.querySelectorAll('.welcome-card, .tech-item');
  
  cards.forEach((card, index) => {
    // Animação de entrada com delay
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.9)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, index * 100);
    
    card.addEventListener('mouseenter', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      this.style.setProperty('--mouse-x', `${x}px`);
      this.style.setProperty('--mouse-y', `${y}px`);
      
      // Adiciona shake effect
      this.style.animation = 'cardShake 0.5s ease';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
  });
  
  // Adiciona animação de shake
  if (!document.getElementById('shakeStyle')) {
    const shakeStyle = document.createElement('style');
    shakeStyle.id = 'shakeStyle';
    shakeStyle.textContent = `
      @keyframes cardShake {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-5px) rotate(2deg); }
        75% { transform: translateY(-5px) rotate(-2deg); }
      }
    `;
    document.head.appendChild(shakeStyle);
  }
}

// ========== EFEITO DE SCROLL SUAVE ==========
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========== LOADING ANIMATION ==========
function showLoadingAnimation() {
  // Adiciona animação de loading nas imagens
  const images = document.querySelectorAll('.image-frame img');
  
  images.forEach(img => {
    if (!img.complete) {
      const parent = img.parentElement;
      parent.style.position = 'relative';
      
      const loader = document.createElement('div');
      loader.className = 'image-loader';
      loader.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      loader.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        color: var(--primary);
      `;
      
      parent.appendChild(loader);
      
      img.addEventListener('load', () => {
        loader.remove();
        img.style.opacity = '1';
      });
      
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';
    }
  });
}

// ========== CONTADOR ANIMADO ==========
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const isNumber = !isNaN(parseInt(finalValue));
        
        if (isNumber) {
          const duration = 2000;
          const steps = 60;
          const stepValue = parseInt(finalValue) / steps;
          let currentStep = 0;
          
          const timer = setInterval(() => {
            currentStep++;
            target.textContent = Math.floor(stepValue * currentStep);
            
            if (currentStep >= steps) {
              target.textContent = finalValue;
              clearInterval(timer);
            }
          }, duration / steps);
        }
        
        observer.unobserve(target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

// ========== EFEITO PARALLAX SUAVE ==========
function addParallaxEffect() {
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.project-hero, .executive-summary');
        
        parallaxElements.forEach(element => {
          const speed = 0.5;
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  });
}

// ========== DESTAQUE NO MENU ATIVO ==========
function highlightActiveSection() {
  const sections = document.querySelectorAll('.project-section');
  const menuItems = document.querySelectorAll('.menu-item');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    menuItems.forEach(item => {
      item.classList.remove('active');
      const onclick = item.getAttribute('onclick');
      if (onclick && onclick.includes(current)) {
        item.classList.add('active');
      }
    });
  });
}

// ========== EASTER EGG - KONAMI CODE ==========
function addKonamiCode() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateEasterEgg() {
  // Adiciona confete na tela
  const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      top: -10px;
      left: ${Math.random() * 100}vw;
      opacity: 1;
      transform: rotate(${Math.random() * 360}deg);
      z-index: 10000;
      pointer-events: none;
      animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
  }
  
  // Adiciona animação de confete
  if (!document.getElementById('confettiStyle')) {
    const confettiStyle = document.createElement('style');
    confettiStyle.id = 'confettiStyle';
    confettiStyle.textContent = `
      @keyframes confettiFall {
        to {
          top: 100vh;
          transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(confettiStyle);
  }
  
  console.log('🎉 Easter Egg Ativado! Você encontrou o código secreto!');
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa todas as funcionalidades
  observeRows();
  createParticles();
  addCursorTrail();
  addCardEffects();
  smoothScroll();
  showLoadingAnimation();
  animateCounters();
  addParallaxEffect();
  highlightActiveSection();
  addKonamiCode();
  
  // Adiciona efeito de fade-in na página
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  console.log('🚀 Portfólio carregado com sucesso!');
  console.log('🎨 Experiência visual aprimorada ativada!');
  console.log('💡 Dica: Tente pressionar: ↑↑↓↓←→←→BA');
});

// ========== PREVENÇÃO DE ERRO DE IMAGENS ==========
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Cria placeholder se a imagem não carregar
      const placeholder = document.createElement('div');
      placeholder.style.cssText = `
        width: 100%;
        height: 400px;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        font-size: 18px;
        color: #64748b;
        font-weight: 600;
      `;
      placeholder.innerHTML = '<i class="fas fa-image" style="font-size: 48px; opacity: 0.3;"></i>';
      
      this.parentElement.replaceChild(placeholder, this);
    });
  });
});