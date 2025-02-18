AOS.init({
    easing: 'ease-out',
    duration: 1000,
    offset: 100
});
document.getElementById('ano').textContent = new Date().getFullYear();
document.getElementById('telefone').addEventListener('input', function(e) {
  let input = e.target.value;
  input = input.replace(/\D/g, '');
  input = input.replace(/(\d{2})(\d)/, '($1) $2');
  input = input.replace(/(\d{5})(\d)/, '$1-$2');
  if (input.length > 15) {
    input = input.slice(0, 15);
  }
  e.target.value = input;
});