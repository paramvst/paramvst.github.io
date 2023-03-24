const toggleDropdown = (path, button, container) => {
    let isDropdownVisible = false;
  
    button &&
    button.addEventListener("click", () => {
      if (isDropdownVisible) {
        container.innerHTML = "";
        container.style.display = "none";
        isDropdownVisible = false;
      } else {
        fetch(path)
          .then((response) => response.text())
          .then((data) => {
            container.innerHTML = data;
            container.style.display = "block";
            isDropdownVisible = true;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

const contentContainer = document.getElementById('dropdown-content-container');
const toggleBtnShell = document.getElementById('toggle-btn-shell');
const toggleBtnNode = document.getElementById('toggle-btn-node');
const toggleBtnCompass = document.getElementById('toggle-btn-compass');

toggleDropdown('../download/shell.html', toggleBtnShell, contentContainer);
toggleDropdown('../download/node.html', toggleBtnNode, contentContainer);
toggleDropdown('../download/compass.html', toggleBtnCompass, contentContainer);
