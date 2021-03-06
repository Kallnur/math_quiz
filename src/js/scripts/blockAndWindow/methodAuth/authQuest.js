import { disableNumInput, funcTransitionBlock } from "../../utils/utils.js";
import { setDataLocalStorage } from '../../utils/localStorage.js'
import { mainMenu } from "../adminPanel/mainMenu.js";

export const authQuest = (classes, prevBlock, blockHistory) => {
    const userName = document.querySelector(`.${classes} .sign-name`);
    const getBtn   = document.querySelector(`.${classes} .login-block__btn`);
    const mainMenuBlock = document.querySelector('.main-menu');

    userName?.addEventListener('keypress', disableNumInput);

    getBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if(userName.value.length > 1 && userName.value.length < 25){

            const user = {
                userBool: true,
                name: userName.value,
                userType: 'quset',
                balance: 0,
                ava: './assets/images/ava/pepe_ava.jpg',
                id: userName.value + Date.now(),
                scores: {
                    practice: 0,
                    timeAttack: 0
                }
            }

            const setLocalResult = setDataLocalStorage('mathQuizUsers', user)

            if(setLocalResult){
                funcTransitionBlock(prevBlock, mainMenuBlock, blockHistory);
                setDataLocalStorage('mathQuizCurrentUser', user);
                return mainMenu(user.id)
            } else console.log('this name is taken!!!');

        } else  console.log('Name no valid')
    })
    
}