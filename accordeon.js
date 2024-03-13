const buttons = document.querySelectorAll('#showButton');

buttons.forEach(button => {
  const content = button.nextElementSibling;
  button.addEventListener('click', () => {
    button.innerText = content.style.display === 'none' ? '-' : '+';
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
