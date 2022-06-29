export const appTransitionWindow = (prevWindow, nextWindow) => {

    const classWindowClose = 'd-none';
    const stubWindowClasses = {
        default: 'is-transition',
        active: 'is-transition--active'
    };

    const stubWindow = document.querySelector(`.${stubWindowClasses.default}`);
    stubWindow?.classList.add(stubWindowClasses.active);

    if(prevWindow) prevWindow.classList.add(classWindowClose);
    if(nextWindow) nextWindow.classList.remove(classWindowClose);

    setTimeout(() => stubWindow?.classList.remove(stubWindowClasses.active), 600);
}