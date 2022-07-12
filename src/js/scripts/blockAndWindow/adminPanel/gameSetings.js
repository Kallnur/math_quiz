import { avatarsObj, constructorAvaBlock } from "../../utils/domElem";
import { deleteDataLocalStorage } from "../../utils/localStorage";

export const gameSetings = () => {
    
    const setingsBlock = document.querySelector('.setings-block');
    const closeBtn = document.querySelector('.setings-block__close-btn');
    const tagAvatarsBlock = document.querySelector('.setings-block__avatars');
    const signOutBtn = document.querySelector('.setings-block__sign-out');

    const avatars = avatarsObj();

    avatars.sort((a, b) => a.price > b.price ? 1 : -1);

    if(!tagAvatarsBlock.children.length){
        avatars.forEach(obj => {
            const newTagAva = constructorAvaBlock(obj);
    
            tagAvatarsBlock.append(newTagAva);
        })
    }


    setingsBlock.classList.add('setings-block--active');

    closeBtn.addEventListener('click', () => {
        setingsBlock.classList.remove('setings-block--active');
    })

    signOutBtn.addEventListener('click', () => {
        deleteDataLocalStorage('mathQuizCurrentUser');
        window.location.reload()
    })
}