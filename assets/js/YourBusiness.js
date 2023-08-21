const SubMen = document.getElementById('Container_YourBusiness');
const YourBusiness = document.querySelector('#YourBusiness');

YourBusiness.addEventListener("mouseenter", () => {
    SubMen.style.display = 'grid';
});

SubMen.addEventListener("mouseenter", () => {
    SubMen.style.display = 'grid';
});

SubMen.addEventListener("mouseleave", () => {
    SubMen.style.display = 'none';
});

YourBusiness.addEventListener("mouseleave", () => {
    SubMen.style.display = 'none';
});