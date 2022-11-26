function showMenu() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
        x.className = "d-none"
    } else {
        x.className = "nav-menu"
    }
}

function resizeWindow() {
    var x = document.getElementById("nav-menu");
    if (window.screen.width >= 1024) {
        x.className = "nav-menu";
    }
    else {
        x.className = "d-none";
    }
}
