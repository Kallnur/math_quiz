import { appTransitionPrev } from "../appFunctions/appTransitionPrev";
import { funcTransitionBlock } from "../utils/utils";

export const gameOver = (user, score, userTransitionHistory, mode) => {

    const gameOverBlock = document.querySelector('.game-block__game-over');
    const tagUserScore  = document.querySelector('.game-over__score');
    const tagCorrectScore = document.querySelector('.game-over__correct-score > span');
    const tagInCorrectScore = document.querySelector('.game-over__incorrect-score > span');
    const tagScore = document.querySelector('.game-block__score');
    const btnMainMenu = document.querySelector('.play-again');

    tagUserScore.textContent = score.total;
    tagCorrectScore.textContent = score.correct;
    tagInCorrectScore.textContent = score.incorrect;
    tagScore.textContent = 0;

    gameOverBlock.classList.add('game-over--show')

    if(mode == 'Practice') {
        if(user.scores.practice < score.total) user.scores.practice = score.total;
    };

    if(mode == 'Time Attack'){
        if(user.scores.timeAttack < score.total) user.scores.timeAttack = score.total;
    }
    



    btnMainMenu.addEventListener('click', () => {

        const lastTransition = userTransitionHistory.pop();

        funcTransitionBlock(lastTransition.next, lastTransition.prev, userTransitionHistory);

        gameOverBlock.classList.remove('game-over--show')
    })

    console.log(user);

}