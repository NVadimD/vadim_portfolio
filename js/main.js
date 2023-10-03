// ------------------------------------------Change language-----------------------------------------------


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

    switchBtnArrow.classList.remove('active');
    languageList.classList.remove('active');
})




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