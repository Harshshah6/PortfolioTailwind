class SkillsItem {
    data = `<div class="border border-slate-400 rounded-md p-4 flex gap-4 items-center md:min-w-[30%]"><img src="$img" class="w-12 h-12" alt=""><div><h1 class="font-bold text-xl text-center">$title</h1></div></div>`;
    
    constructor(imagePath, title) {
        this.imagePath = imagePath;
        this.title = title;
    }

    build() {
        this.data = this.data.replace('$img', this.imagePath);
        this.data = this.data.replace('$title', this.title);
        return this.data;
    }

}

const skillsContainer = document.getElementById('skillsContainer');
const skillsLanguages = [
    new SkillsItem('./images/javalogo.png','JAVA'),
    new SkillsItem('./images/kotlinlogo.png','KOTLIN'),
    new SkillsItem('./images/htmllogo.png','HTML'),
    new SkillsItem('./images/csslogo.png','CSS'),
    new SkillsItem('./images/javascript.png','JAVASCRIPT'),
    new SkillsItem('./images/phplogo.png','PHP'),
    new SkillsItem('./images/cplusplus.png','C++'),
]
const skillsFrameworks = [
    new SkillsItem('./images/tailwind.png', 'TAILWIND'),
    new SkillsItem('./images/bootstrap.png', 'BOOTSTRAP'),
]
const skills = skillsLanguages.concat(skillsFrameworks);

skills.forEach(element => skillsContainer.innerHTML += element.build());

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

let sec_home = document.getElementById('home');
let nav_bar = document.getElementById('navbar');
sec_home.style.height = `${sec_home.clientHeight - nav_bar.clientHeight}px`;

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
