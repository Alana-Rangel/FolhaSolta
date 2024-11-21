// Função para mostrar o conteúdo de uma matéria específica
function mostrarConteudo(materia) {
  // Esconde todos os conteúdos
  const materias = document.querySelectorAll(".materia");
  materias.forEach((materia) => (materia.style.display = "none"));

  // Mostra o conteúdo da matéria selecionada
  const conteudo = document.getElementById(materia);
  if (conteudo) {
    conteudo.style.display = "block";
  }
}
