let burger = document.getElementById("burger");
let closeMenu = document.getElementById('closeMenu');



function showResponsiveMenu() {
  var menu = document.getElementById('menuResponsive');
  var icon = document.getElementById('hamburgerIcon');
  var main = document.getElementById('main');
 


  

  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
    main.style.overflowY = "hidden";
  } else {
    menu.className = "";
    icon.className ="";
    main.style.overflowY ="";
  }
}

function closeResponsiveMenu() {
  var menu = document.getElementById('menuResponsive');
  var icon = document.getElementById('hamburgerIcon');
  var main = document.getElementById('main');
 


  

  if (menu.className === "open") {
    menu.className = "";
    icon.className = "";
    main.style.overflowY = "";
  } else {
    menu.className = "open";
    icon.className ="open";
    main.style.overflowY ="hidden";
  }
}

burger.addEventListener('click', function(){
  showResponsiveMenu();
});

closeMenu.addEventListener('click', function(){
  closeResponsiveMenu();
});

