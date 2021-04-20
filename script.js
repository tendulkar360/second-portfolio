const toggle = document.getElementById('toggle');
const navResponsive = document.getElementById('mainul');

document.onclick = function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    navResponsive.classList.toggle('active');
}