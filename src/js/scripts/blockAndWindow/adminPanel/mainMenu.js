import { practcieGame } from "../../games/practiceGame";
import { timeAttackGame } from "../../games/timeAttackGame";
import { quizRulesAnimate } from "../../interactiveElements/quizRulesAnimate";
import { getDataLocalStorage } from "../../utils/localStorage";
import { timeRenderForLabel } from "../../utils/utils";
import { leaderboardFunc } from "../leaderboard/leaderboard";
import { gameSetings } from "./gameSetings";

export const mainMenu = (userId) => {

    const mainMenu = document.querySelector('.main-menu');
    const gameFiled = document.querySelector('.game-block');
    const userTransitionHistory = [];

    const prevBlockBtn = document.querySelector('.btn-prev-block');
    const tagUserName = document.querySelector('.main-menu__name');
    const tagUserBalance = document.querySelector('.main-menu__balance-val');
    const tagUserAvatar = document.querySelector('.main-menu__ava-img');
    const tagBtnStart = document.querySelector('.main-menu__btn-start');
    const tagLeaderboard = document.querySelector('.main-menu__leaderboard');

    const gameModesId = {
        practice: 'game-mode-practcie',
        timeAttack: 'game-mode-time-atack',
        competition: 'game-mode-competition'
    };

    // const trueTimesTimeAttack = trueTimesGame('sel-time', timeRenderForLabel);

    // const trueTimesTaskAttack = trueTimesGame('task-time', (value) => {
    //     if(value.includes('3')) return 1000 * 3
    //     else if(value.includes('5')) return 1000 * 5
    //     else if(value.includes('10')) return 1000 * 10;
    // }) 

    // const trueTimesTaskAttack = () => {
    //     const tagTimeAttackTime = document.querySelector('.setings-block__sel-time input:checked + label');
    //     const timeAttackTime = timeRenderForLabel(tagTimeAttackTime.textContent);

    //     return timeAttackTime;
    // }


    tagUserName.addEventListener('click', gameSetings);
    tagUserAvatar.addEventListener('click', gameSetings);

    prevBlockBtn.classList.add('d-none')

    const localUsers = getDataLocalStorage('mathQuizUsers');

    const user = localUsers.find(obj => obj.id == userId);

    tagUserName.textContent = user.name;
    tagUserBalance.textContent = user.balance;
    tagUserAvatar.src = user.ava;

    tagBtnStart.addEventListener('click', () => {
        const gameMode = document.querySelector('.main-menu__modes input:checked');
        if(gameMode.id == gameModesId.practice) practcieGame(user ,mainMenu, gameFiled, userTransitionHistory);
        if(gameMode.id == gameModesId.timeAttack) {

            const timeAttackTime = trueTimesGame('sel-time', timeRenderForLabel);
            const taskTime = trueTimesGame('task-time', (value) => {

                if(value.includes('3')) return 1000 * 3
                else if(value.includes('5')) return 1000 * 5
                else if(value.includes('10')) return 1000 * 10;

            }) 
            
            timeAttackGame(user ,mainMenu, gameFiled, userTransitionHistory, timeAttackTime, taskTime)

        };
        if(gameMode.id == gameModesId.competition) console.log(gameMode.id);
    })

    tagLeaderboard.addEventListener('click', () => {
        leaderboardFunc(mainMenu);
    })

    function trueTimesGame (className, func){
        const tagTimeAttackTime = document.querySelector(`.setings-block__${className} input:checked + label`);
        const timeAttackTime = func(tagTimeAttackTime.textContent);

        return timeAttackTime;
    }

    quizRulesAnimate()
}