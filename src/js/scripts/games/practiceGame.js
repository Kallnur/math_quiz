import { appMathCalc, numsEquality } from "../appFunctions/appMathCalc";
import { scoreDecSpan, scoreIncSpan } from "../utils/domElem";
import { funcTransitionBlock, newNums, toggleClassTimeout } from "../utils/utils";
import { gameOver } from "./gameOver";

export const practcieGame = (user, mainMenu, gameFiled, userTransitionHistory) => {

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
    const tagStopGame   = document.querySelector('.game-block__stop-btn');

    tagTimerBlock.classList.add('d-none');

    const mathOperators = ['/']; //, '*', '+', '-'
    const minNum = 1;
    const maxNum = 1;
    const mode = 'Practice'

    const score = {
        total: 0,
        correct: 0,
        incorrect: 0 
    };

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

    const writtingAnser = (e) => {
        tagUserAnswer.focus();
        if(tagUserAnswer.value.length > 5) e.preventDefault();
    };

    const userAnswerEquality = () => {
        const calcAnswer = appMathCalc(numbs.num_1, numbs.num_2, numbs.operator);
        const userAnswer = +tagUserAnswer.value;

        gameFilerd.dataset.showHide = false;
        gameFilerd.classList.replace('game-block__field--show', 'game-block__field--lieve');
        setTimeout(() => {gameFilerd.classList.remove('game-block__field--lieve')}, 300)

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

        setTimeout(() => gameFilerd.classList.add('game-block__field--show'), 330)
        setTimeout(() => gameFilerd.dataset.showHide = "true", 630)

    };

    window.addEventListener('keypress', practcieGameFunc);
    tagStopGame.addEventListener('click', stopGame);

    function practcieGameFunc (e) {
        writtingAnser(e);
        if(e.key === 'Enter' && tagUserAnswer.value.length) {
            if(gameFilerd.dataset.showHide == 'true') userAnswerEquality()
        };
    }

    function stopGame () {
        window.removeEventListener('keypress', practcieGameFunc);
        gameOver(user, score, userTransitionHistory, mode);
    }

}