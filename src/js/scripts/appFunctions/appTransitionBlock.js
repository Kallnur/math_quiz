export const appTransitionBlock = (closeElem, showElem, move = true) => {

    const hideClasses = {
        scale: 'show-hide',
        display: 'd-none'
    };

    if(move){
        setTimeout(() => {
            closeElem.classList.add(hideClasses.display);
            showElem.classList.remove(hideClasses.scale, hideClasses.display)
        }, 500)
    } else{
        closeElem.classList.add(hideClasses.display);
        showElem.classList.remove(hideClasses.scale)
    }

    return true
}