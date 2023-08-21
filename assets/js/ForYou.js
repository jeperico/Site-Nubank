const SubMenu = document.getElementById('Container_ForYou');;
const ForYou = document.querySelector('#ForYou');

ForYou.addEventListener("mouseenter", () => {
    SubMenu.style.display = 'grid';
});

SubMenu.addEventListener("mouseenter", () => {
    SubMenu.style.display = 'grid';
});

SubMenu.addEventListener("mouseleave", () => {
    SubMenu.style.display = 'none';
});

ForYou.addEventListener("mouseleave", () => {
    SubMenu.style.display = 'none';
});