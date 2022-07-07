window.onload=function () {
  document.getElementById('main').addEventListener('click', closeNav);  
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("burgerPanel").style.width = "350px";
  document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("burgerPanel").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}


