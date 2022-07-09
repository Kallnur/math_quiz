import { getDataLocalStorage, setDataLocalStorage } from "../../utils/localStorage.js";
import { disableNumInput, funcTransitionBlock } from "../../utils/utils.js";
import { mainMenu } from "../adminPanel/mainMenu.js";

export const authSignIn = (classes, prevBlock, blockHistory) => {
    const userName = document.querySelector(`.${classes} .sign-name`);
    const userCodeword = document.querySelector(`.${classes} .sign-codeword`);
    const getBtn   = document.querySelector(`.${classes} .login-block__btn`);
    const mainMenuBlock = document.querySelector('.main-menu');
    
    userName?.addEventListener('keypress', disableNumInput);

    getBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if(userName.value.length > 0 && userCodeword.value.length > 0){

            const localUsers = getDataLocalStorage('mathQuizUsers');

            const user = localUsers?.find(obj => obj.name === userName.value && obj.codeword === userCodeword.value)

            if(user) {
                funcTransitionBlock(prevBlock, mainMenuBlock, blockHistory);
                setDataLocalStorage('mathQuizCurrentUser', user);
                return mainMenu(user.id)
            }
            
            else console.log('User Undefined');
        }
    })
    
}