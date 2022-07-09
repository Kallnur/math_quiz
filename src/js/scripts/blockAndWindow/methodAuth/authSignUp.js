import { setDataLocalStorage } from "../../utils/localStorage.js";
import { disableNumInput, funcTransitionBlock } from "../../utils/utils.js";
import { mainMenu } from "../adminPanel/mainMenu.js";

export const authSignUp = (classes, prevBlock, blockHistory) => {
    const userName = document.querySelector(`.${classes} .sign-name`);
    const userCodeword = document.querySelector(`.${classes} .sign-codeword`);
    const getBtn   = document.querySelector(`.${classes} .login-block__btn`);
    const mainMenuBlock = document.querySelector('.main-menu');
    
    userName?.addEventListener('keypress', disableNumInput);

    getBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if(userName.value.length > 0 && userCodeword.value.length > 0 && userName.value.length < 25){
            const user = {
                userBool: true,
                name: userName.value,
                codeword: userCodeword.value,
                userType: 'user',
                balance: 50,
                id: userName.value + Date.now(),
                ava: './assets/images/ava/pepe_ava.jpg',
                scores: {
                    practice: 0,
                    timeAttack: 0
                }
            }

            const setLocalResult = setDataLocalStorage('mathQuizUsers', user);

            if(setLocalResult){
                funcTransitionBlock(prevBlock, mainMenuBlock, blockHistory);
                setDataLocalStorage('mathQuizCurrentUser', user);
                return mainMenu(user.id)

            } else console.log('this name is taken!!!');
        } else console.log('Form no valid!!!')
    })
    
}