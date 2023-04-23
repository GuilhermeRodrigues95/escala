// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll("nav ul li a");

// Adiciona um manipulador de eventos de clique a cada link do menu
menuLinks.forEach(link => {
  link.addEventListener("click", event => {
    // Remove a classe "active" de todos os itens do menu
    menuLinks.forEach(link => {
      link.parentElement.classList.remove("active");
    });
    // Adiciona a classe "active" ao item do menu clicado
    event.target.parentElement.classList.add("active");
  });
});
    