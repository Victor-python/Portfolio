
//collapse menu
const collapse = document.querySelector(".collapse");
const navLinks = document.querySelectorAll('.nav-link');
const menuBtn = document.querySelector('.navbar-toggler');

collapse.style.backgroundColor="white";
collapse.style.padding="10px";

const removeShow = () => {
    collapse.classList.remove('show');
}

navLinks.forEach(link => {
    link.addEventListener('click', removeShow );
})


//logo flying animation
const g = document.querySelector("#g")
const v = document.querySelector("#v")
const flying1 = document.querySelector("#welcome-to");
const flying2 = document.querySelector("#intro");
let angle = 0;
let lastTime = null;

const Fly = (time) => {
    if (lastTime != null) angle += (time - lastTime) * 0.002;
    lastTime = time;
    flying1.style.top = (Math.sin(angle) * 40 + 40) + "px";
    flying1.style.left = (Math.cos(angle) * 200 + 230) + "px";
    flying2.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
    flying2.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
    requestAnimationFrame(Fly, "animate");
};

Fly(lastTime);

//banner css explodes
const developer = document.querySelector(".developer");
const portfolio = document.querySelector(".portfolioWord")
const grinan = document.querySelector("#grinan");
const victor = document.querySelector("#victor");

let isV = false;
let isG = false;

const deattach = () => {  
    grinan.classList.add("deattach");
   
    if (grinan.classList[0] === "deattach"){
        g.style.color = "#ce5d5d"; 
        isG = true;
    }
}

const turnlight = () => {
    victor.classList.add("lightsOn");
    
    if (victor.classList[0] === "lightsOn"){
        v.style.color = "#ce5d5d";
        isV = true;     
    }
}

g.addEventListener("click", deattach);
v.addEventListener("click", turnlight);

const animatePorfolio = () => {
    victor.classList.forEach(classL => {
        if(classL === "lightsOn"){
            portfolio.style.position = "absolute";
            portfolio.classList.add("spin");
        }
    })
}

const spinDeveloper = () => {
    grinan.classList[0] === "deattach" && (
        developer.style.position = "absolute",
        developer.classList.add("spin")
        )
};

victor.addEventListener("click", animatePorfolio);
grinan.addEventListener("click", spinDeveloper);

//scrolls functions
const scroll_about = [677, 1482];
const scroll_portfolio = [1481, 2640];
const scroll_skills = [2618, 4324];
const scroll_certificates = [4323, 5270];
const scroll_conctactMe = [4130, 6610];

const aboutTab = document.querySelector('#aboutTab');
const portfolioTab = document.querySelector('#portfolioTab');
const skillsTab = document.querySelector('#skillsTab');
const certTab = document.querySelector('#certTab');
const contactTab = document.querySelector('#contactTab');

const menuBar = document.querySelector("#menuBar"); //bg change color not working.
const tabs = document.querySelectorAll("tab");
const scrollUp = document.querySelector(".scrollUp");

let scrollValue = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
    
    resetActiveTab();
    if((scrollValue >= scroll_about[0]) && (scrollValue <= scroll_about[1])){
        aboutTab.classList.add('activeTab');
    }
    else if((scrollValue >= scroll_portfolio[0]) && (scrollValue <= scroll_portfolio[1])){
        portfolioTab.classList.add('activeTab');
    }
    else if((scrollValue >= scroll_skills[0]) && (scrollValue <= scroll_skills[1])){
        skillsTab.classList.add('activeTab');
    }
    else if((scrollValue >= scroll_certificates[0]) && (scrollValue <= scroll_certificates[1])){
        certTab.classList.add('activeTab');
    }
    else if(scrollValue >= scroll_conctactMe[0]){
        contactTab.classList.add('activeTab');
    }

    if (scrollValue> 20) {
        scrollUp.classList.remove("invisible");
        menuBar.style.backgroundColor = "rgb(6, 30, 51)";
    } else {
        scrollUp.classList.add("invisible");
        menuBar.style.backgroundColor = "";
    }
}

const resetActiveTab = () => {
    aboutTab.classList.remove('activeTab');
    portfolioTab.classList.remove('activeTab');
    skillsTab.classList.remove('activeTab');
    certTab.classList.remove('activeTab');
    contactTab.classList.remove('activeTab');
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// menuBtn.addEventListener('blur', removeShow);

scrollUp.addEventListener("click", topFunction);
/* Portfolio Projects */

const schoolProjects = document.querySelector('.schoolProjects');
const personalProjects = document.querySelector('.personalProjects');
const internet = document.querySelector('#internet');

const section = {
    schoolProjects:schoolProjects,
    personalProjects:personalProjects,
    internet:internet,
}

const projectsData=[
    {
        "id":"gradients",
        "title":"Gradients",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/color_gradients/",
        "imgUrl":"./images/02gradients.JPG",
        "description":"Getting familiar with HTML & CSS",
        "sectionId":"schoolProjects",
        "repoLink":"color_gradients",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    {
        "id":"speedGame",
        "title":"Speed Game",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/speed_game/",
        "imgUrl":"./images/speedgame.JPG",
        "description":"Using JS to handle the DOM",
        "sectionId":"schoolProjects",
        "repoLink":"speed_game",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    {
        "id":"keeperApp",
        "title":"Keeper App",
        "type":"secundary",
        "link":"https://jocular-tapioca-476ffa.netlify.app/",
        "imgUrl":"./images/keeperApp.jpg",
        "description":"Using local storage & MUI styling",
        "sectionId":"schoolProjects",
        "repoLink":"keeper_app",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    {
        "id":"pokemons",
        "title":"Pokedex",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/react_pokemons/",
        "imgUrl":"./images/pokemons.jpg",
        "description":"My first react ever, fetch data",
        "sectionId":"schoolProjects",
        "repoLink":"react_pokemons ",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    {
        "id":"foodApp",
        "title":"Food App",
        "type":"primary",
        "link":"https://food-app4.netlify.app/",
        //https://victor-grinan-dev.github.io/food-app3/
        "imgUrl":"./images/feelit_cookit.png",
        "description":"Pagination & Firebase CRUD",
        "sectionId":"schoolProjects",
        "repoLink":"food-app4",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    {
        "id":"countriesApp",
        "title":"Countries App",
        "type":"primary",
        "link":"https://victor-grinan-dev.github.io/countries_app1/",
        "imgUrl":"./images/countries.jpg",
        "description":"Introduction to redux",
        "sectionId":"schoolProjects",
        "repoLink":"countries_app1",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    {
        "id":"diceRoller",
        "title":"Dice Roller",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/diceRoller",
        "imgUrl":"./images/diceRoller.JPG",
        "description":"My first HTML, CSS & JS",
        "sectionId":"personalProjects",
        "repoLink":"diceRoller",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },

    { 
        "id":"turnTimer",
        "title":"Turn Timer",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/blood_bowl_turn_timer/",
        "imgUrl":"./images/turn_timer.JPG",
        "description":"first site for my Hobby group",
        "sectionId":"personalProjects",
        "repoLink":"blood_bowl_turn_timer",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"hexMap",
        "title":"Hex Map",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/map-creator/",
        "imgUrl":"./images/hexMap.JPG",
        "description":"Getting use to mapping in Js",
        "sectionId":"personalProjects",
        "repoLink":"map-creator",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"campaingTracker",
        "title":"Campaign Tracker",
        "type":"primary",
        "link":"https://enchanting-taiyaki-964ff9.netlify.app/",
        "imgUrl":"./images/campaign-tracker.png",
        "description":"Demo day project from school",
        "sectionId":"personalProjects",
        "repoLink":"campaign-tracker-demo",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"theGame",
        "title":"The Game",
        "type":"primary",
        "link":"https://classy-vacherin-e654f9.netlify.app/",
        "video":"https://www.youtube.com/watch?v=YPBy4kEFNVQ",
        "imgUrl":"./images/the_game.png",
        "description":'Video of The game "Campaing Tracker"',
        "sectionId":"personalProjects",
        "repoLink":"the_game",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"theCubanShow",
        "title":"The Cuban Show",
        "type":"secundary",
        "link":"https://thecubanshow.com/",
        "imgUrl":"./images/thecubanshow.png",
        "description":"First serious job for a friend (in progress)",
        "sectionId":"personalProjects",
        "repoLink":"the_cuban_show_ui",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindLoopstudios",
        "title":"Tailwind Loopstudios",
        "type":"secundary",
        "link":"https://loopstodios-react.vercel.app/",
        "imgUrl":"./images/loopstudios.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"loopstudio-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindShortly",
        "title":"Tailwind Shortly",
        "type":"secundary",
        "link":"https://shortly-react-nine.vercel.app/",
        "imgUrl":"./images/shortly.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"shortly-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindGallery",
        "title":"Tailwind Gallery",
        "type":"secundary",
        "link":"https://image-gallery-react-nu.vercel.app/",
        "imgUrl":"./images/gallery.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"image-gallery-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindPrices",
        "title":"Tailwind Price cards",
        "type":"secundary",
        "link":"https://card-price.vercel.app/",
        "imgUrl":"./images/priceCards.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"price-cards-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindLogin",
        "title":"Tailwind Login Modal",
        "type":"secundary",
        "link":"https://login-modal-rho.vercel.app/",
        "imgUrl":"./images/login.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"login-modal-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindProduct",
        "title":"Tailwind Product Modal",
        "type":"secundary",
        "link":"https://product-modal-react.vercel.app/",
        "imgUrl":"./images/product.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"product-modal-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"tailwindLandingPage",
        "title":"Tailwind Landing Page",
        "type":"secundary",
        "link":"https://landing-page-react-jet.vercel.app/",
        "imgUrl":"./images/landing.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"landing-page-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"testimonialGrid",
        "title":"Tailwind Testimonial Grid",
        "type":"secundary",
        "link":"https://testimonial-grid-alpha.vercel.app/",
        "imgUrl":"./images/testimonialGrid.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"testimonial-grid",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"fylo",
        "title":"Tailwind Fylo",
        "type":"primary",
        "link":"https://vercel.com/victor-grinan-dev/fylo-react",
        "imgUrl":"./images/fylo.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"fylo-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"bookmarkManager",
        "title":"Tailwind Bookmark Manager",
        "type":"primary",
        "link":"https://bookmark-manager-react.vercel.app/",
        "imgUrl":"./images/bookmark.png",
        "description":"Tailwind learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"bookmark-manager-react",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"natour",
        "title":"Saas Natour",
        "type":"secundary",
        "link":"https://natour-eta.vercel.app/",
        "imgUrl":"./images/natour.png",
        "description":"Saas learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"natour",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"nexter",
        "title":"Saas Nexter",
        "type":"secundary",
        "link":"https://nexter-ui.vercel.app/",
        "imgUrl":"./images/nexter.png",
        "description":"Saas learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"nexter-ui",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },
    { 
        "id":"trillo",
        "title":"Saas Trillo",
        "type":"secundary",
        "link":"https://trillo-nu.vercel.app/",
        "imgUrl":"./images/trillo.png",
        "description":"Saas learning exercise, no func.",
        "sectionId":"internet",
        "repoLink":"trillo",
        "repoSite":"https://github.com/Victor-Grinan-Dev/"
    },

    // { 
    //     "id":"",
    //     "title":"",
    //     "type":"",
    //     "link":"",
    //     "imgUrl":"",
    //     "description":"",
    //     "sectionId":""
    // }
]

class ProjectCard extends HTMLElement {
    /**
     * 
     * @param {* string} id 
     * @param {* string} title 
     * @param {* primary || secundary} type 
     * @param {* project URL string} link 
     * @param {* image url} imgUrl 
     * @param {* string } description 
     */
	constructor (id, title, type, link, imgUrl, description, repoLink, repoSite) {
		super();

        this.content =
		`<div class="project ${type} flip-in ${type==='secundary' ? 'invisible' : "" }">
    
            <a href=${link} target='blank'>
                <div id=${id} class="projectImg">
                    <img src=${imgUrl} alt=${id} >
                </div>
            </a> 

            <div class="description">
                <h6 class="projectTitle"> "${title}" </h6>
                <p class="descriptionText">${description}</p>
            </div>

            <a href="${repoSite}${repoLink}" target="blank">
                <img src="${repoSite.includes('github') ? './icons/github.png' : './icons/gitlab.png'}" alt="githubRepo" class="repoLink">
            </a>
            
        </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('project-card', ProjectCard);
};

projectsData.forEach(project => {
    const {id, title, type, link, imgUrl, description, sectionId, repoLink, repoSite} = project;
    const newProject = new ProjectCard(id, title, type, link, imgUrl, description, repoLink, repoSite);
    section[sectionId].innerHTML += newProject.content;
});

//hide/show projects
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");

let is_showing = false;

const showAllProjects = () => {
    is_showing = !is_showing;
    for (let proj of secundaries){
        proj.classList.toggle("invisible");
        
    };
    is_showing ? showAllBtn.textContent = "Show less" : showAllBtn.textContent = "Show all";
   
}

showAllBtn.addEventListener("click", showAllProjects);

/* Skill functions */
const basicFrontend = document.querySelector('#basicFrontend div'); 
const frameworks = document.querySelector('#frameworks div');
const advanceFrontend = document.querySelector('#advanceFrontend div');
const advanceFrontend2 = document.querySelector('#advanceFrontend2 div');
const backendNode = document.querySelector('#backendNode div');
const backendPython = document.querySelector('#backendPython div');
const backendPHP = document.querySelector('#backendPHP div');
const cloudService = document.querySelector('#cloudService div');
const backendJava = document.querySelector('#backendJava div');
const embedSystems = document.querySelector('#embedSystems div');
const cms = document.querySelector('#cms div');
const cicd = document.querySelector('#cicd div');
const otherSkills = document.querySelector('#otherSkills div');

const skillGroups = {
    basicFrontend:basicFrontend,
    frameworks:frameworks,
    advanceFrontend:advanceFrontend,
    advanceFrontend2:advanceFrontend2,
    backendNode:backendNode,
    backendPython:backendPython,
    backendPHP:backendPHP,
    cloudService:cloudService,
    backendJava:backendJava,
    embedSystems:embedSystems,
    cms:cms,
    cicd:cicd,
    otherSkills:otherSkills,
} 

const skillsData = [
    {
        id:"html",
        skillName:"HTML",
        stars:3,
        imgUrl:"./icons/html.png",
        skillgroup:"basicFrontend",
        isInvisible:false
    },
    {
        id:"css",
        skillName:"CSS",
        stars:3,
        imgUrl:"./icons/css.png",
        skillgroup:"basicFrontend",
        isInvisible:false
    },
    {
        id:"javascript",
        skillName:"Javascript",
        stars:3,
        imgUrl:"./icons/javascript.png",
        skillgroup:"basicFrontend",
        isInvisible:false
    },

    {
        id:"react",
        skillName:"React",
        stars:3,
        imgUrl:"./icons/react.png",
        skillgroup:"frameworks",
        isInvisible:false
    },
    {
        id:"vue",
        skillName:"Vue",
        stars:2,
        imgUrl:"./icons/vue.png",
        skillgroup:"frameworks",
        isInvisible:false
    },

    // {
    //     id:"nextjs",
    //     skillName:"NextJs",
    //     stars:1,
    //     imgUrl:"./icons/next_js.png",
    //     skillgroup:"frameworks",
    //     isInvisible:false
    // },

    // {
    //     id:"angular",
    //     skillName:"Angular",
    //     stars:1,
    //     imgUrl:"./icons/angular.png",
    //     skillgroup:"frameworks",
    //     isInvisible: true
    // },
    {
        id:"typescript",
        skillName:"Typescript",
        stars:2,
        imgUrl:"./icons/typescript.png",
        skillgroup:"advanceFrontend",
        isInvisible:false
    },

    {
        id:"jquery",
        skillName:"jquery",
        stars:1,
        imgUrl:"./icons/jquery.png",
        skillgroup:"advanceFrontend",
        isInvisible:false
    },

    {
        id:"sass",
        skillName:"Sass",
        stars:3,
        imgUrl:"./icons/sass.png",
        skillgroup:"advanceFrontend2",
        isInvisible:false
    },
    {
        id:"tailwind",
        skillName:"Tailwind",
        stars:2,
        imgUrl:"./icons/tailwind.png",
        skillgroup:"advanceFrontend2",
        isInvisible:false
    },
    {
        id:"bootstrap",
        skillName:"Bootstrap",
        stars:2,
        imgUrl:"./icons/bootstrap.png",
        skillgroup:"advanceFrontend2",
        isInvisible:false
    },
    {
        id:"material_ui",
        skillName:"MUI",
        stars:2,
        imgUrl:"./icons/material_ui.png",
        skillgroup:"advanceFrontend2",
        isInvisible:false
    },



    {
        id:"node",
        skillName:"Node",
        stars:2,
        imgUrl:"./icons/node.png",
        skillgroup:"backendNode",
        isInvisible:false
    },
    {
        id:"express",
        skillName:"Express",
        stars:1,
        imgUrl:"./icons/express.png",
        skillgroup:"backendNode",
        isInvisible:false
    },

    {
        id:"python",
        skillName:"Python",
        stars:3,
        imgUrl:"./icons/python.png",
        skillgroup:"backendPython",
        isInvisible:false
    },
    {
        id:"django",
        skillName:"Django",
        stars:2,
        imgUrl:"./icons/django.png",
        skillgroup:"backendPython",
        isInvisible:false
    },
    {
        id:"flask",
        skillName:"Flask",
        stars:2,
        imgUrl:"./icons/flask.png",
        skillgroup:"backendPython",
        isInvisible:false
    },
    {
        id:"php",
        skillName:"PHP",
        stars:2,
        imgUrl:"./icons/php.png",
        skillgroup:"backendPHP",
        isInvisible:false
    },
    {
        id:"synfony",
        skillName:"Synfony",
        stars:2,
        imgUrl:"./icons/symfony.png",
        skillgroup:"backendPHP",
        isInvisible:false
    },
    {
        id:"laravel",
        skillName:"Laravel",
        stars:0,
        imgUrl:"./icons/laravel.png",
        skillgroup:"backendPHP",
        isInvisible:true
    },

    {
        id:"aws",
        skillName:"AWS",
        stars:2,
        imgUrl:"./icons/aws.png",
        skillgroup:"cloudService",
        isInvisible:false
    },
    {
        id:"firebase",
        skillName:"Firebase",
        stars:2,
        imgUrl:"./icons/firebase.png",
        skillgroup:"cloudService",
        isInvisible:false
    },
    {
        id:"azure",
        skillName:"Azure",
        stars:0,
        imgUrl:"./icons/azure.png",
        skillgroup:"cloudService",
        isInvisible:true
    },

    {
        id:"drupal",
        skillName:"Drupal",
        stars:1,
        imgUrl:"./icons/drupal.png",
        skillgroup:"cms",
        isInvisible:false
    },
    {
        id:"wordpress",
        skillName:"Wordpress",
        stars:0,
        imgUrl:"./icons/word_press.png",
        skillgroup:"cms",
        isInvisible:false
    },
    {
        id:"figma",
        skillName:"Figma",
        stars:3,
        imgUrl:"./icons/figma.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },
    {
        id:"mysql",
        skillName:"MySQL",
        stars:2,
        imgUrl:"./icons/mysql.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },
    {
        id:"git",
        skillName:"Git",
        stars:3,
        imgUrl:"./icons/git.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },

    {
        id:"c",
        skillName:"C",
        stars:1,
        imgUrl:"./icons/c.png",
        skillgroup:"embedSystems",
        isInvisible:false
    },
    {
        id:"cpp",
        skillName:"C++",
        stars:1,
        imgUrl:"./icons/c++.png",
        skillgroup:"embedSystems",
        isInvisible:false
    },
    {
        id:"cs",
        skillName:"C#",
        stars:1,
        imgUrl:"./icons/csharp.png",
        skillgroup:"embedSystems",
        isInvisible:false
    },
    {
        id:"java",
        skillName:"Java",
        stars:1,
        imgUrl:"./icons/java.png",
        skillgroup:"backendJava",
        isInvisible:false
    },
    {
        id:"spring",
        skillName:"Spring",
        stars:1,
        imgUrl:"./icons/spring.png",
        skillgroup:"backendJava",
        isInvisible:false
    },
    {
        id:"kubernetes",
        skillName:"Kubernetes",
        stars:1,
        imgUrl:"./icons/kubernetes.png",
        skillgroup:"cicd",
        isInvisible:false
    },
    {
        id:"jenkins",
        skillName:"Jenkins",
        stars:1,
        imgUrl:"./icons/jenkins.png",
        skillgroup:"cicd",
        isInvisible:false
    },
    {
        id:"sonarcube",
        skillName:"SonarQube",
        stars:1,
        imgUrl:"./icons/sonarqube.png",
        skillgroup:"cicd",
        isInvisible:false
    },
    // {
    //     id:"",
    //     skillName:"",
    //     stars:,
    //     imgUrl:"",
    //     skillgroup:"",
    //     isInvisible:false
    // },
]
class SkillCard extends HTMLElement {
    /**
     * 
     * @param {string} id 
     * @param {string} skillName 
     * @param {int} stars 
     * @param {string} imgUrl 
     */
	constructor (id, skillName, stars, imgUrl, isInvisible) {
		super();
        this.content =
            `<div id=${id} class="skill" ${isInvisible ? 'invisible' : null} >
                <img class='techLogo' src="${imgUrl}" alt="icon">
                <div class='skillValues'>
                    <p class='skillTitle'>${skillName}</p>
                    <p class='skillRating'>${stars > 0 ?"⭐".repeat(stars) : ' - '}</p> 
                    <div class="fill-bar"><div class="level" id="HTML-level"></div></div>
                </div> 
            </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('skill-card', SkillCard);
};

const renderData = () => {
    renderSkills();
    calculatePercent();
}

const renderSkills = () => {
    skillsData.forEach(skill=>{
        const {id, skillName, stars, imgUrl, skillgroup, isInvisible} = skill;
        const newSkill = new SkillCard(id, skillName, stars, imgUrl, isInvisible);
        skillGroups[skillgroup].innerHTML += newSkill?.content;
    });
};

/* Calculate XP% per skill group */
const allGroups = document.querySelectorAll('.skillGroup');
const calculatePercent = () => {
    let starText;
    allGroups.forEach(group=>{
        let stars = 0;
        const overall = group.querySelector('.overall');
        const skillRatings = group.querySelectorAll('.skillRating');
        const skills = group.querySelector('.subSkills')
        skillRatings.forEach(rating=>{
            starText = rating.innerText;

            for(const char of starText){
               if(char === '⭐'){
                stars++
               }
            }
        });
        const total = skills.childElementCount * 5;
        if(overall){
            // overall.innerText = `${Math.round((stars/total * 100) * 100) / 100}%`
            overall.innerText = `${stars}/${total}`
        };
    });
}

renderData();

const showMoreSkills = document.querySelector('.showMoreSkills');
const secundarySkillGroup = document.querySelectorAll('.secundarySkillGroup');
const notStudiedSkill = document.querySelectorAll('.notStudiedSkill');
let visibleSkill = false;

const toogleMoreSkills = () => {
    visibleSkill = !visibleSkill;
    secundarySkillGroup.forEach(item=>{
        item.classList.toggle('invisible');
    });

    notStudiedSkill.forEach(item=>{
        item.classList.toggle('invisible');
    });
    
    if (visibleSkill){
        showMoreSkills.innerText = 'Show less'
    }else{
        showMoreSkills.innerText = 'Show more'
    }
}

showMoreSkills.addEventListener('click', toogleMoreSkills);

//skill legend

const showSkillsLegend = document.querySelector('.showSkillsLegend');
const skillLegend = document.querySelector('.skillsLegend');
let isShowLegend = false;
const showSkillsLegendHandler = () => {
    skillLegend.classList.toggle('invisible');
    isShowLegend = !isShowLegend;
    isShowLegend ? showSkillsLegend.innerText = 'Hide Legend' : showSkillsLegend.innerText = 'Show Legend';
};

showSkillsLegend.addEventListener('click', showSkillsLegendHandler);

/* show certificates */

class CertificateCard extends HTMLElement {
    /**
     * 
     * @param {string} id 
     * @param {string} title 
     * @param {string} docLink 
     */
	constructor (id, title, docLink, isInvisible) {
		super();
        this.content =
		`<div id=${id} class="certificate ${isInvisible ? 'irrelevant invisible' : ''}">
            <div>    
                <a class="certView" href=${docLink} target="_blank" class='docLink'>
                    <span class="material-symbols-outlined">visibility</span>
                    <span> ${title} </span>
                </a>
            </div>
            <a class="certView" href=${docLink} target="_blank" class='docLink'>
                <img src=${docLink} frameborder="0" class='document'
                />  
            </a>
        </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('certificate-cards', CertificateCard);
};

const mainCertificates = document.querySelector('.main-certificates');
const onlineCertificates1 = document.querySelector('.online-certificates1');
const onlineCertificates2 = document.querySelector('.online-certificates2');
const othersCertificates = document.querySelector(".othersCertificates");

const CertificateSections = {
    mainCertificates:mainCertificates,
    onlineCertificates1:onlineCertificates1,
    onlineCertificates2:onlineCertificates2,
    othersCertificates:othersCertificates,
}

const allCertificate = [
    {
        id:"pythonBasics",
        title:'SDA - "Python From Scratch"',
        docLink:"./documents/sda_certificate.png",
        section:"mainCertificates",
    },
    {
        id:"hbc",
        title:'Qualification in Information Tech',
        docLink:"./documents/HBC_graduation_certificate_small.png",
        section:"mainCertificates",
    },
    {
        id:"codeCommit",
        title:'AWS - "CodeCommit"',
        docLink:"./documents/AWS_CodeCommit_Course_Completion_Certificate.png",
        section:"onlineCertificates1",
    },
    {
        id:"DevOps",
        title:'AWS - "DevOps"',
        docLink:"./documents/AWS_DevOps_Course_Completion_Certificate.png",
        section:"onlineCertificates1",
    },
    {
        id:"EC2",
        title:'AWS - "Elastic Compute Cloud"',
        docLink:"./documents/AWS_EC2_Completion_Certificate.png",
        section:"onlineCertificates1",
    },
    {
        id:"Namespaces",
        title:'SfCasts - "PHP Namespaces"',
        docLink:"./documents/sfcasts-VictorGrinan-certificate-php-namespaces.png",
        section:"onlineCertificates2",
    },
    {
        id:"Symfony6",
        title:'SfCasts - "Symfony 6"',
        docLink:"./documents/sfcasts-VictorGrinan-certificate-harmonious-development-with-symfony-6.png",
        section:"onlineCertificates2",
    },
    {
        id:"Composer",
        title:'SfCasts - "Composer"',
        docLink:"./documents/sfcasts-VictorGrinan-certificate-composer.png",
        section:"onlineCertificates2",
    },
    {
        id:"css",
        title:'Discount Courses - "CSS"',
        docLink:"./documents/disc_courses_css.png",
        section:"onlineCertificates2",
    },
    {
        id:"sass",
        title:'Udemy - "Advanced CSS" - "SASS"',
        docLink:"./documents/udemy_advanced_sass.jpg",
        section:"onlineCertificates2",
    },
    {
        id:"tailwind",
        title:'Udemy - "Tailwind',
        docLink:"./documents/udemy_tailwind.jpg",
        section:"onlineCertificates2",
    },
    {
        id:"Entrepreneurship",
        title:'YH - "Entrepreneurship"',
        docLink:"./documents/2015_yrittaja_todistus.png",
        section:"othersCertificates",

    },
    {
        id:"Investing",
        title:'Udemy - "Investing in stocks"',
        docLink:"./documents/UC-a13b9ecc-951b-4ff9-8856-ee83cca0f6cd.png",
        section:"othersCertificates",
    },
]

const renderCerts = () => {
    allCertificate.forEach(cert => {
        const {id, title, docLink, section} = cert;
        const newCertCard = new CertificateCard(id, title, docLink);
        CertificateSections[section].innerHTML += newCertCard.content;
    })
};
renderCerts();


const moreCertificatesBtn = document.querySelector(".moreCertificates");//btn

let is_certificateShowing = false;

const showAllCertificates = () => {
    is_certificateShowing = !is_certificateShowing;
    othersCertificates.classList.toggle('invisible');
    is_certificateShowing ? moreCertificatesBtn.textContent = "Hide Irrelevant certificates" : moreCertificatesBtn.textContent = "Show Irrelevant certificates";
}
moreCertificatesBtn.addEventListener("click", showAllCertificates);

/* copyrights */
const year = new Date();
const yearSpan = document.querySelector(".year");
yearSpan.innerText = `${year.getFullYear()}`;

/* reset animations */
const resetAll = () => {
    hexMap.innerHTML = "";
    grinan.classList.remove("deattach")
    g.style.color = "#white";
    victor.classList.remove("lightsOn")
    v.style.color = "#white";
    developer.classList.remove("spin")
    portfolio.classList.remove("spin")
}

/* hex Map */
const hexMap = document.querySelector(".hexMap");
const hexSize = 50;

let width = document.body.clientWidth;
let height = document.body.clientHeight;
let rows = (height/ 4) / hexSize;
let columns = (width / hexSize) - 1;

window.addEventListener("resize", () => {
    resetAll();
});

const createHexMatrix = () => {

    for(let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const blank = document.createElement('img');
            blank.id=`${i}${j}`;
            blank.src = i % 2 === 0 ?'./hexes/selected.png': './hexes/hostile.png';
            blank.classList = 'hex';
            blank.style.left = i % 2 === 0 ? `${j * hexSize}px`: `${j * hexSize + hexSize/2}px`;
            blank.style.top = `${i * (hexSize * 0.75)}px`;
            hexMap.appendChild(blank);
        }
    }
}
