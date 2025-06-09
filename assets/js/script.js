const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
    sidebarcontent = body.querySelector(".sidebar-content");
    const mainContent = document.getElementById('mainContent');

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });

    toggle.addEventListener("click", () => {
        sidebarcontent.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
    });