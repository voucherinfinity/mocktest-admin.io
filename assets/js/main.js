////// desktop sidebar
document.getElementById('menuToggle').addEventListener('click', function() {
    let sidebar = document.querySelector('.pc-sidebar');

    if (window.innerWidth > 1024) {  // Only for desktop screens
        sidebar.classList.toggle('pc-sidebar-hide');
    }
});





////// mobile sidebar & tab
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("mobile-collapse");
    let sidebar = document.querySelector(".pc-sidebar");

    menuToggle.addEventListener("click", function (event) {
        if (window.innerWidth <= 1024) {  // Only for mobile & tablet
            sidebar.classList.toggle("pc-sidebar-hide");
            sidebar.classList.toggle("mob-sidebar-active");
            event.stopPropagation(); // Prevents click from bubbling up
        }
    });

    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 1024) {  // Only for mobile & tablet
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.add("pc-sidebar-hide");
                sidebar.classList.remove("mob-sidebar-active");
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let dropdownToggle = document.querySelector(".pc-head-link.head-link-primary.dropdown-toggle");
    let dropdownMenu = document.querySelector(".dropdown-menu.dropdown-user-profile");

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
        
        if (dropdownMenu.classList.contains("show")) {
            dropdownMenu.style.position = "absolute";
            dropdownMenu.style.inset = "0px 0px auto auto";
            dropdownMenu.style.margin = "0px";
            dropdownMenu.style.transform = "translate3d(0px, 66px, 0px)";
            dropdownMenu.setAttribute("data-popper-placement", "bottom-end");
        } else {
            dropdownMenu.style = ""; // Reset styles when hidden
        }

        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
            dropdownMenu.classList.remove("show");
            dropdownMenu.style = ""; // Reset styles
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".pc-head-link.head-link-secondary.dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu.pc-h-dropdown.drp-search");

    if (toggleButton && dropdownMenu) {
        toggleButton.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownMenu.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});



// account setting //
document.addEventListener("DOMContentLoaded", function () {
    const profileInfo = document.getElementById("profile-section");
    const changePassword = document.getElementById("change-password");
    const profileTab = document.getElementById("profile-tab");
    const passwordTab = document.getElementById("password-tab");

    // Show profile section by default and hide change password section
    profileInfo.style.display = "block";
    changePassword.style.display = "none";

    profileTab.addEventListener("click", function () {
        profileInfo.style.display = "block";
        changePassword.style.display = "none";
    });

    passwordTab.addEventListener("click", function () {
        profileInfo.style.display = "none";
        changePassword.style.display = "block";
    });
});