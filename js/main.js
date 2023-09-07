// Переменнве для смены языка
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