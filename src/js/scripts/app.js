import { appTransitionPrev } from "./appFunctions/appTransitionPrev.js";
import { selectMethodAuth } from "./blockAndWindow/startWindow/selectMethodAuth.js";
import { startWindow } from "./blockAndWindow/startWindow/startWindow.js"

export const app = () => {

    const blockHistory = [];

    // App Elements
    const loginBlocks        = document.querySelectorAll('.login-block');
    const blockQuestionLogin = document.querySelector('.start-window__question-login');
    const blockStartWindow   = document.querySelector('.start-window');
    const prevBlockBtn       = document.querySelector('.btn-prev-block');

    // App Functions

    startWindow(blockQuestionLogin, blockHistory, prevBlockBtn)

    selectMethodAuth(loginBlocks, blockStartWindow, blockHistory)

    appTransitionPrev(prevBlockBtn, blockHistory)
    
}