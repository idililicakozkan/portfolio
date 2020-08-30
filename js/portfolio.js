window.onscroll = function ()
{fixedBar()};

function fixedBar() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky){
        navbar.classList.add("sticky")
    }
    else {
        
        navbar.classList.remove("sticky")
    }
}

function hamburgerClick() {
    var navbar = document.getElementById("navbar");
    if (navbar.className.includes("sidenav")){
        navbar.classList.remove("sidenav")
    }
    else {
        navbar.classList.add("sidenav")
    }
  }