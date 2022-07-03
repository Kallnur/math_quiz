import { selectMethodAuth } from "./blockAndWindow/startWindow/selectMethodAuth.js";
import { startWindow } from "./blockAndWindow/startWindow/startWindow.js"

export const app = (user) => {

    // Importent Classes
    const appClasses = {
        displayNone: 'd-none'
    }

    // App Elements
    const loginBlocks        = document.querySelectorAll('.login-block');
    const blockQuestionLogin = document.querySelector('.start-window__question-login');
    const blockStartWindow   = document.querySelector('.start-window');

    // App Functions

    startWindow(blockQuestionLogin)

    selectMethodAuth(loginBlocks, blockStartWindow, user)
    
}