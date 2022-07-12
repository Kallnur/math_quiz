import { appTransitionPrev } from "../appFunctions/appTransitionPrev";
import { changeArrInLocal, changeObjInLocal, getDataLocalStorage } from '../utils/localStorage.js'
import { leaderboardFunc } from "../blockAndWindow/leaderboard/leaderboard";
import { funcTransitionBlock } from "../utils/utils";
import { mainMenu } from "../blockAndWindow/adminPanel/mainMenu";

export const gameOver = (user, score, userTransitionHistory, mode) => {

    const tagInCorrectScore = document.querySelector('.game-over__incorrect-score > span');
    const tagCorrectScore = document.querySelector('.game-over__correct-score > span');
    const btnLeaderboard = document.querySelector('.game-over__btn--leaderboard');
    const gameOverBlock = document.querySelector('.game-block__game-over');
    const tagUserScore = document.querySelector('.game-over__score');
    const btnMainMenu = document.querySelector('.play-again');
    const gameFiled = document.querySelector('.game-block');
    const tagScore = document.querySelector('.game-block__score');
    const tagMainMenu = document.querySelector('.main-menu');

    const localAllUsers = getDataLocalStorage('mathQuizUsers');
    const localUser = localAllUsers.find(ojb => ojb.id == user.id);

    tagUserScore.textContent = score.total;
    tagCorrectScore.textContent = score.correct;
    tagInCorrectScore.textContent = score.incorrect;
    tagScore.textContent = 0;

    gameOverBlock.classList.add('game-over--show')

    if(mode == 'Practice') {
        if(user.scores.practice < score.total) {
            user.scores.practice = score.total;
            Object.assign(localUser.scores, user.scores);

            changeArrInLocal('mathQuizUsers', user);
            changeObjInLocal('mathQuizCurrentUser', localUser)
        };
    };

    if(mode == 'Time Attack'){
        if(user.scores.timeAttack < score.total) {
            user.scores.timeAttack = score.total;
            Object.assign(localUser.scores, user.scores);

            changeArrInLocal('mathQuizUsers', user);
            changeObjInLocal('mathQuizCurrentUser', localUser)
        };
    }

    btnMainMenu.addEventListener('click', () => {

        funcTransitionBlock(gameFiled, tagMainMenu);

        gameOverBlock.classList.remove('game-over--show');

        mainMenu(user.id);

    })

    btnLeaderboard.addEventListener('click', () => {

        leaderboardFunc(gameFiled);

        gameOverBlock.classList.remove('game-over--show')
    })

}