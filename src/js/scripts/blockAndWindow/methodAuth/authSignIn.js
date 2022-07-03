import { disableNumInput } from "../../utils/utils.js";
import { mainMenu } from "../adminPanel/mainMenu.js";

export const authSignIn = (user, classes) => {
    const userName = document.querySelector(`.${classes} #sign-name`);
    const userCodeword = document.querySelector(`.${classes} #sign-codeword`);
    const getBtn   = document.querySelector(`.${classes} .login-block__btn`);
    
    userName?.addEventListener('keypress', disableNumInput);

    getBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if(userName.value.length > 0 && userCodeword.value.length > 0){
            user = {
                userBool: true,
                name: userName.value,
                codeword: userCodeword.value,
                userType: 'user'
            }
            return mainMenu(user)
        }
    })
    
}