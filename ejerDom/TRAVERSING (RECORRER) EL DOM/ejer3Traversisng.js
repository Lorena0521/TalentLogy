function addDeleteBtn() {
    const ul = document.getElementById("myList");
    const items = document.querySelectorAll("li");

    items.forEach((item) => {
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "delete";
      deleteBtn.className = "btn-delete";

      deleteBtn.addEventListener('click', (e) => {
        const listItem = e.target.parentElement;
        ul.removeChild(listItem); 
      });

      item.appendChild(deleteBtn);
    });
  }

  addDeleteBtn();