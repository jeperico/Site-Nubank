const SubMenuTN = document.getElementById('Container_TheNubank');
const TheNubank = document.querySelector('#TheNubank');

TheNubank.addEventListener("mouseenter", () => {
    SubMenuTN.style.display = 'grid';
});

SubMenuTN.addEventListener("mouseenter", () => {
    SubMenuTN.style.display = 'grid';
});

SubMenuTN.addEventListener("mouseleave", () => {
    SubMenuTN.style.display = 'none';
});

TheNubank.addEventListener("mouseleave", () => {
    SubMenuTN.style.display = 'none';
});