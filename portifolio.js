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

  // Reativa animações de entrada (para .content-row)
  if (projectId !== 'welcome') {
    setTimeout(() => {
      observeRows();
    }, 100);
  }
}

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

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', () => {
  observeRows();
});