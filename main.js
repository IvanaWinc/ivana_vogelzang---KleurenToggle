let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < array.length; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < array.length; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}



Gray.onclick = function () { body.style.background = "rgb(109, 109, 109)" }
Red.onclick = function () { body.style.background = "rgb(145, 0, 0)" }
Orange.onclick = function () { body.style.background = "rgb(209, 96, 3)" }
Purple.onclick = function () { body.style.background = "rgb(58, 0, 105)" }
Green.onclick = function () { body.style.background = "rgb(0, 97, 21)" }


/*let toggleNav = document.querySelector('.toggleNav');
let btnToggle = document.querySelector('.btnToggle');

btnToggle.addEventListener('click', (e) => {
e.preventDefault();

if (window.getComputedStyle(toggleNav).display === 'block') {
toggleNav.style.display = 'none';
} else {
toggleNav.style.display = 'block';
}
});*/
