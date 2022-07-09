import { funcTransitionBlock } from "../../utils/utils.js"
import { getDataLocalStorage } from "../../utils/localStorage.js"
import { mainMenu } from "../adminPanel/mainMenu.js"

export const startWindow = (blockQuestionLogin, blockHistory, prevBlockBtn) => {
    const btnStart = document.querySelector('.btn-start');
    const hideBlock = document.querySelector('.start-window__btn-block');
    const mainMenuBlock = document.querySelector('.main-menu');
    const startWindowBlock = document.querySelector('.start-window');

    btnStart?.addEventListener('click', (e) => {

        const localUser = getDataLocalStorage('mathQuizCurrentUser');

        if(localUser) {
            mainMenu(localUser[0].id);
            funcTransitionBlock(startWindowBlock, mainMenuBlock, blockHistory);

        } else {
            funcTransitionBlock(hideBlock, blockQuestionLogin, blockHistory)
            setTimeout(() => prevBlockBtn.classList.remove('d-none'), 500)
        }
    })
}