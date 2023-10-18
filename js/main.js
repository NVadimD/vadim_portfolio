import translations from "./translator.js";


// ------------------------------------Change-language switcher-------------------------------------------


const switchBtn = document.querySelector('.languege-switch-btn');
const switchBtnArrow = document.querySelector('.btn__selection-arrow');
const languageList = document.querySelector('.languages_list');
const secondLanguageBtn = document.querySelector('.languages_list__btn');
const currentLng = document.querySelector('.btn__current_lang-name');
const currentLngIcon = document.querySelector('.btn__current_lang-ico');
const optionLng = document.querySelector('.btn__option_lang-name');
const optionLngIcon = document.querySelector('.btn__option_lang-ico');



switchBtn.addEventListener('click', () => {
    switchBtnArrow.classList.toggle('active');
    languageList.classList.toggle('active');
})

secondLanguageBtn.addEventListener('click', () => {
    const temroraryLngMemo = currentLng.innerHTML;
    const temroraryIconMemo = currentLngIcon.src;

    currentLng.innerHTML = optionLng.innerHTML;
    currentLngIcon.src = optionLngIcon.src;
    optionLng.innerHTML = temroraryLngMemo;
    optionLngIcon.src = temroraryIconMemo;
    toggleLanguage();

    switchBtnArrow.classList.remove('active');
    languageList.classList.remove('active');
})



// ------------------------------------Change-language realization-------------------------------------------


let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';
    updateContent();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLanguage][key];
    });
}



// --------------------------------------Navigation---------------------------------------

const anchors = Array.from(document.querySelectorAll('.nav__item'));

anchors.forEach(item => item.addEventListener('click', () => {
    const id = item.getAttribute('data-anchors');
    const position = document.getElementById(id);

    window.scroll({
        top: position.offsetTop,
        behavior: 'smooth'
    })
}))


const headerArrow = document.querySelector('.header__start-arrow');
headerArrow.addEventListener('click', () => {
    window.scroll({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    })
})



// ----------------------------------------Projects------------------------------------------

const projectsNames = Array.from(document.querySelectorAll('.project-list__name'));
const projectsCards = Array.from(document.querySelectorAll('.main-part'));
const projectsMarks = Array.from(document.querySelectorAll('.navigation__element'));

function changeActiveProject(ind) {
    projectsNames.forEach(item => item.classList.remove('active'));
    projectsCards.forEach(item => item.classList.remove('active'));
    projectsMarks.forEach(item => item.classList.remove('active'));

    projectsNames[ind].classList.add('active');
    projectsCards[ind].classList.add('active');
    projectsMarks[ind].classList.add('active');
}

projectsNames.forEach(item => item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
        return false;
    } else {
        const ind = projectsNames.indexOf(item);
        changeActiveProject(ind);
    }
}))

projectsMarks.forEach(item => item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
        return false;
    } else {
        const ind = projectsMarks.indexOf(item);
        changeActiveProject(ind);
    }
}))


const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    let ind = projectsNames.findIndex(item => item.classList.contains('active'));
    if (ind === 0) {
        ind = projectsNames.length - 1;
        changeActiveProject(ind);
    } else {
        ind -= 1;
        changeActiveProject(ind);
    }
})

rightArrow.addEventListener('click', () => {
    let ind = projectsNames.findIndex(item => item.classList.contains('active'));
    if (ind === projectsNames.length - 1) {
        ind = 0;
        changeActiveProject(ind);
    } else {
        ind += 1;
        changeActiveProject(ind);
    }
})

const openProjectBtn = document.querySelector('.openPrj-btn');
const projectsArr = ['https://nvadimd.github.io/Calorie-Calculator/',
                    'https://nvadimd.github.io/TaskFlow/',
                    'https://nvadimd.github.io/Guess-and-Gallows/',
                    'https://nvadimd.github.io/post_forum'
                    ]

openProjectBtn.addEventListener('click', function() {    
    projectsNames.forEach((item) => {
        if (item.classList.contains('active')) {
            const ind = projectsNames.indexOf(item);
            window.open(projectsArr[ind], '_blank');
        } 
    })
});



// ----------------------------------------Contacts------------------------------------------
const githubIcon = document.getElementById('github');
const telegramIcon = document.getElementById('telegram');
const whatsappIcon = document.getElementById('whatsapp');
const emailIcon = document.getElementById('email');

const githubDisplay = document.querySelector('.github-display');
const telegramDisplay = document.querySelector('.telegram-display');
const whatsappDisplay = document.querySelector('.whatsapp-display');
const emailDisplay = document.querySelector('.email-display');


const showDisplay = (displayName) => {
    displayName.classList.add('active');
}

const hideDisplay = (displayName) => {
    displayName.classList.remove('active');
}

githubIcon.addEventListener('mouseenter', () => showDisplay(githubDisplay));
githubIcon.addEventListener('mouseleave', () => hideDisplay(githubDisplay));

telegramIcon.addEventListener('mouseenter', () => showDisplay(telegramDisplay));
telegramIcon.addEventListener('mouseleave', () => hideDisplay(telegramDisplay));

whatsappIcon.addEventListener('mouseenter', () => showDisplay(whatsappDisplay));
whatsappIcon.addEventListener('mouseleave', () => hideDisplay(whatsappDisplay));

emailIcon.addEventListener('mouseenter', () => showDisplay(emailDisplay));
emailIcon.addEventListener('mouseleave', () => hideDisplay(emailDisplay));