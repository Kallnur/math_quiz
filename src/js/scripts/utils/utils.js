export const elementHasClass = (elem, className) => {
    if(elem){
        if(elem.classList.contains(className)) return true 
        else return false
    }
}

export const disableNumInput = (e) => {
    if ("1234567890".indexOf(event.key) != -1) e.preventDefault();
}