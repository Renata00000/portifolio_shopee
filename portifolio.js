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
}