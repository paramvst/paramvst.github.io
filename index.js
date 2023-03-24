
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    } else {
      // Load the content dynamically
      dropdownContent.innerHTML = "<p>This is the content of my dropdown.</p>";
      dropdownContent.classList.add("show");
    }
  }