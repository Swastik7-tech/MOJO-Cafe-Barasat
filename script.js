
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Mobile navigation toggle
    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);
        menuToggle.innerHTML = isExpanded ? "✕" : "☰";

    });

    // Close navigation after clicking a link
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = "☰";

        });

    });

});
