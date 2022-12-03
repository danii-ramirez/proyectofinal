function showMenu() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
        x.className = "d-none"
    } else {
        x.className = "nav-menu"
    }

    var URLactual = window.location.href;
    console.log(URLactual);
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

// document.addEventListener('DOMContentLoaded', () => {
//     if (window.location.pathname === '/pages/juego.html') {
//         const urlParams = new URLSearchParams(window.location.search);
//         let h1 = document.getElementById('game-title');
//         let trailer = document.getElementById('game-trailer');
//         let text = document.getElementById('game-text');

//         switch (urlParams.get('name')) {
//             case 'boholder3':
//                 h1.innerText = 'Boholder 3';
//                 trailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/jUFm6qgmMS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//                 text.innerText = 'La rutina es simple: llegar al quiosco de periódicos, recoger aceite de calefacción y descalcificador, luego ocuparse de la lavadora y la caldera. Además, no olvides sacar la basura. Después de estas tareas cotidianas, es hora de ver si un determinado inquilino está en casa.';
//                 break;

//             default:
//                 break;
//         }
//     }
// })