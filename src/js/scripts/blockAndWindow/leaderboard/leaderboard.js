import { funcTransitionBlock } from "../../utils/utils"

export const leaderboardFunc = (prevBlock) => {

    const mainMenu = document.querySelector('.main-menu');
    const leaderboardBlock = document.querySelector('.leaderboard');
    const btnPrevMenu = document.querySelector('.leaderboard__btn-prev');

    funcTransitionBlock(prevBlock, leaderboardBlock)

    btnPrevMenu.addEventListener('click', () => {
        funcTransitionBlock(leaderboardBlock, mainMenu);
    })

}