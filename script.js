/* =========================================================
   ASSIGNX RESEARCH
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navigation.classList.contains("open")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navigation a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (!navigation || !menuToggle) {
        return;
    }

    const clickedInsideNavigation =
        navigation.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        navigation.classList.contains("open") &&
        !clickedInsideNavigation &&
        !clickedMenuButton
    ) {

        navigation.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});