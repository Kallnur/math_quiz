import { disableNumInput } from "../../utils/utils.js";
import { mainMenu } from "../adminPanel/mainMenu.js";

export const authQuest = (user, classes) => {
    const userName = document.querySelector(`.${classes} #sign-name`);
    const getBtn   = document.querySelector(`.${classes} .login-block__btn`);
    
    userName?.addEventListener('keypress', disableNumInput);

    getBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if(userName.value.length > 0){
            user = {
                userBool: true,
                name: userName.value,
                userType: 'quset'
            }
            return mainMenu(user)
        }
    })
    
}