export const quizRulesAnimate = () => {

    const rulesBlock = document.querySelector('.main-menu__rules'); 
    const rulesBtn   = document.querySelector('.main-menu__rules-btn');

    const removeActiveClass = () => {
        rulesBlock.classList.remove('main-menu__rules--active');
        window.removeEventListener('click', removeActiveClass)
        console.log('remove active class');
    };

    rulesBlock.addEventListener('click', e => {
        e.stopPropagation();
    })

    rulesBtn.addEventListener('click', () => {
        rulesBlock.classList.add('main-menu__rules--active');
        window.addEventListener('click', removeActiveClass);

    })
}