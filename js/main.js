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

projectsNames.forEach(item => item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
        return false;
    } else {
        projectsNames.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
}))