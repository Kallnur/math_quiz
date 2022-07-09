import { practcieGame } from "../../games/practiceGame";
import { timeAttackGame } from "../../games/timeAttackGame";
import { quizRulesAnimate } from "../../interactiveElements/quizRulesAnimate";
import { getDataLocalStorage } from "../../utils/localStorage";
import { leaderboardFunc } from "../leaderboard/leaderboard";

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

    let score = 1;

    const scoreNew = setTimeout(() => {
        const newScore = score +1;
        return newScore
    }, 1000)

    console.log(scoreNew);

    prevBlockBtn.classList.add('d-none')

    const localUsers = getDataLocalStorage('mathQuizUsers');

    const user = localUsers.find(obj => obj.id == userId);

    tagUserName.textContent = user.name;
    tagUserBalance.textContent = user.balance;
    tagUserAvatar.src = user.ava;

    tagBtnStart.addEventListener('click', () => {
        const gameMode = document.querySelector('.main-menu__modes input:checked');
        if(gameMode.id == gameModesId.practice) practcieGame(user ,mainMenu, gameFiled, userTransitionHistory);
        if(gameMode.id == gameModesId.timeAttack) timeAttackGame(user ,mainMenu, gameFiled, userTransitionHistory);
        if(gameMode.id == gameModesId.competition) console.log(gameMode.id);
    })

    tagLeaderboard.addEventListener('click', () => {
        leaderboardFunc(mainMenu);
    })

    quizRulesAnimate()
}