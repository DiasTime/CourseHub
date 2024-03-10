let buttons = document.querySelectorAll('#showButton');
let contents = document.querySelectorAll('#toggleContent');

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    let content = contents[index];
    button.innerText = content.classList.contains("hidden") ? "-" : "+";
    content.classList.toggle("hidden");
  });
});