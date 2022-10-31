menu = document.getElementById("menu");
menu.classList.add("hide");

// Prevents menu from closing when clicked inside
menu.addEventListener('click', function(event) {
  event.stopPropagation();
});

// Toggles menu if menu-button was clicked, closes menu if anywhere else was clicked
window.onclick = function(event) {
  if (event.target.matches('#menu-button, #menu-button svg,rect')) {
    menu.classList.toggle("show");
  } else {
    let dropdowns = document.getElementsByClassName("hide");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}