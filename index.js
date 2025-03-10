function toggleMenu() {
    var menu = document.getElementById('sidebar');
    var content = document.getElementById('content');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        content.style.marginLeft = '0';
    } else {
        menu.style.display = 'flex';
        menu.style.width = '250px';
        content.style.marginLeft = '250px';
    }
}