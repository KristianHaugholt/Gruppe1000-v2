/*
function openMenu(){
    document.getElementById("overlayMenu").style.height = "100%";
}
function closeMenu(){
    document.getElementById("overlayMenu").style.height = "0%";
}
 */

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
});