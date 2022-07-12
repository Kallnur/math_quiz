import { appMathCalc, numsEquality } from "../appFunctions/appMathCalc";
import { appGameTimer } from "../appFunctions/appTimer";
import { scoreDecSpan, scoreIncSpan } from "../utils/domElem";
import { funcTransitionBlock, newNums, toggleClassTimeout } from "../utils/utils";
import { gameOver } from "./gameOver";

export const timeAttackGame = (user, mainMenu, gameFiled, userTransitionHistory, timerTime) => {

    const gameFilerd = document.querySelector('.game-block__field');
    const tagUserName = document.querySelector('.game-block__user-name');
    const tagModeGame = document.querySelector('.game-block__mode');
    const tagUserAnswer = document.querySelector('.game-block__answer');
    const tagNum_1 = document.querySelector('.game-block__num-1');
    const tagNum_2 = document.querySelector('.game-block__num-2');
    const tagOperator = document.querySelector('.game-block__operator');
    const tagScoreBlock = document.querySelector('.game-block__score-sum');
    const tagScore = document.querySelector('.game-block__score');
    const tagTimerBlock = document.querySelector('.game-block__timer');
    const tagProgressTime = document.querySelector('.game-block__time-progress');
    const tagStopGame   = document.querySelector('.game-block__stop-btn');
    const tagSpanMin = document.querySelector('.game-block__time-min');
    const tagSpanSec = document.querySelector('.game-block__time-sec');

    const mathOperators = ['/','*', '+', '-'];
    const minNum = 1;
    const maxNum = 20;
    let gameEndTimer;

    const endTime = timerTime.min * 60 + timerTime.sec;

    tagSpanMin.textContent = String(timerTime.min).padStart(2, '0');
    tagSpanSec.textContent = String(timerTime.sec).padStart(2, '0');

    const renderItemTimer = (tagMin, tagSec, timeObj) => {

        const timer = setInterval(() => {

            let allTime = timeObj.min * 60 + timeObj.sec;

            allTime -= 1;

            if(allTime > 59) {
                timeObj.min = Math.floor(allTime / 60);
                timeObj.sec = Math.floor(allTime - timeObj.min * 60);
            } else {
                timeObj.min = 0;
                timeObj.sec = allTime;
            }

            tagMin.textContent = String(timeObj.min).padStart(2, '0');
            tagSec.textContent = String(timeObj.sec).padStart(2, '0');
        }, 1000)

        return timer;
    }

    const mode  = 'Time Attack';

    tagTimerBlock.classList.remove('d-none');

    const score = {
        total: 0,
        correct: 0,
        incorrect: 0 
    };
    let gameTimer;

    let numbs = {
        num_1: 0,
        num_2: 0,
        operator: ''
    }

    tagUserName.textContent = user.name;
    tagModeGame.textContent = mode;

    toggleClassTimeout(gameFiled, 'game-block--stub', 3000);
    funcTransitionBlock(mainMenu, gameFiled, userTransitionHistory);

    const changeNums = (numbs) => {
        tagNum_1.textContent = numbs.num_1;
        tagNum_2.textContent = numbs.num_2;
        tagOperator.textContent = numbs.operator;
    };

    const renderNewNums = () => {
        const newNumbsObj = newNums(minNum, maxNum, mathOperators);

        numbs = newNumbsObj

        changeNums(numbs);
    };
    renderNewNums();

    const writtingAnswer = (e) => {
        tagUserAnswer.focus();
        if(tagUserAnswer.value.length > 5) e.preventDefault();
    };

    const userAnswerEquality = () => {
        const calcAnswer = appMathCalc(numbs.num_1, numbs.num_2, numbs.operator);
        const userAnswer = +tagUserAnswer.value;

        tagUserAnswer.value = '';
        renderNewNums();

        if(numsEquality(calcAnswer, userAnswer)) {
            scoreIncSpan(tagScoreBlock)
            score.total += 1;
            score.correct += 1;

        } else {
            score.incorrect += 1;
            if(score.total > 0){
                scoreDecSpan(tagScoreBlock);
                toggleClassTimeout(tagScoreBlock, 'game-block__score-sum--twitch', 600)
                score.total -= 1;
            }
        }

        tagScore.textContent = score.total;
    };

    setTimeout(() => {
        tagProgressTime.classList.add('game-block__time-progress--active');

        gameTimer = appGameTimer(userAnswerEquality, 1000 * 3)

        window.addEventListener('keypress', timeAttackGameFunc);

        tagStopGame.addEventListener('click', stopGame);

        setTimeout(stopGame, 1000 * endTime);

        gameEndTimer = renderItemTimer(tagSpanMin, tagSpanSec, timerTime)

    }, 3000)


    function timeAttackGameFunc(e) {
        writtingAnswer(e);

        if(e.key === 'Enter' && tagUserAnswer.value.length) {
            tagProgressTime.classList.remove('game-block__time-progress--active');
            clearInterval(gameTimer)

            userAnswerEquality();

            setTimeout(() => {
                tagProgressTime.classList.add('game-block__time-progress--active');
                gameTimer = appGameTimer(userAnswerEquality, 1000 * 3);
            }, 50);
        };
    }

    function stopGame () {
        clearInterval(gameTimer);
        clearInterval(gameEndTimer);

        window.removeEventListener('keypress', timeAttackGameFunc);
        tagStopGame.removeEventListener('click', stopGame);

        tagProgressTime.classList.remove('game-block__time-progress--active');
        gameOver(user, score, userTransitionHistory, mode)
    }
}