// O JavaScript é necessário apenas se você desejar adicionar algum comportamento personalizado

// Por exemplo, se você quiser fechar a lista suspensa quando o mouse sair da área
var navbar = document.querySelector('.navbar');
navbar.addEventListener('mouseleave', function() {
  var sublinks = document.querySelectorAll('.sublinks');
  sublinks.forEach(function(sublink) {
    sublink.style.display = 'none';
  });
});