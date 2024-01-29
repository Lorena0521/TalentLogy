const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const Texto = input.value;

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = Texto;

  const completarBtn = document.createElement("button");
completarBtn.textContent = "Completar";
completarBtn.className = "btn-completar";
completarBtn.addEventListener('click', () => {
  li.classList.toggle("completada");
});


  li.appendChild(p);
  li.appendChild(addDeletebtn())
  li.appendChild(completarBtn);
  ul.appendChild(li);

})

function addDeletebtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const itemS = document.querySelectorAll("li");

    if (items.length === 0){
      completar.style.display = "block";

    }
  })
  return deleteBtn;
}
