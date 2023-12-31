let btn_nav = document.getElementById('btn_nav');
let nav_drawer = document.getElementById('nav_drawer');
let click = 0;

btn_nav.addEventListener('click', () => { 
    if (click == 0) {
        nav_drawer.style.right = "0";
        click = 1;
    } else {
        nav_drawer.style.right = "-100vw";
        click = 0;
    }
});


const updatePSize = () => {
    let p_skill1 = document.getElementById('p_skill1')
    let p_skill2 = document.getElementById('p_skill2')
    p_skill2.style.height = `${p_skill1.clientHeight}px`;
}
updatePSize();

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible')
        } else {
            entry.target.classList.remove('scroll-visible')
        }
    })
},);

const hiddenElements = document.querySelectorAll(".scroll-hidden")

hiddenElements.forEach((ele)=>intersectionObserver.observe(ele));
