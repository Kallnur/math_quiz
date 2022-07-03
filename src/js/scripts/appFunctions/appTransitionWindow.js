const stubWindowClasses = {
    default: 'is-transition',
    active: 'is-transition--active'
};

const stubWindow = document.querySelector(`.${stubWindowClasses.default}`);

export const appTransitionOpen = (prevWindow, nextWindow) => {

    const classWindowClose = 'd-none';
    stubWindow.classList.add(stubWindowClasses.active);

    if(prevWindow) prevWindow.classList.add(classWindowClose);
    if(nextWindow) nextWindow.classList.remove(classWindowClose);
}

export const appTransitionClose = () => {
    setTimeout(() => stubWindow.classList.remove(stubWindowClasses.active), 600);
}