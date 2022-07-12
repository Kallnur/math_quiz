import { constructorLeaderUser } from "../../utils/domElem";
import { getDataLocalStorage } from "../../utils/localStorage";
import { funcTransitionBlock } from "../../utils/utils"

export const leaderboardFunc = (prevBlock) => {

    const mainMenu = document.querySelector('.main-menu');
    const selectMode = document.querySelector('#leaderboard-select');
    const btnPrevMenu = document.querySelector('.leaderboard__btn-prev');
    const tagPracticeList = document.querySelector('.leaderboard__list--practice');
    const leaderboardBlock = document.querySelector('.leaderboard');
    const tagTimeAttckList = document.querySelector('.leaderboard__list--timeAttack');

    const practiceAllLi = tagPracticeList.children;
    const timeAttackAllLi = tagTimeAttckList.children;

    funcTransitionBlock(prevBlock, leaderboardBlock)

    const modes = {
        practice: 'practice', 
        timeAttack: 'timeAttack'
    }

    selectMode.addEventListener('change', () => {
        if(selectMode.value == modes.practice) {
            tagPracticeList.classList.remove('d-none');
            tagTimeAttckList.classList.add('d-none');

        }
        if(selectMode.value == modes.timeAttack) {
            tagPracticeList.classList.add('d-none');
            tagTimeAttckList.classList.remove('d-none');
        }
    })

    const localUsers = getDataLocalStorage('mathQuizUsers');

    const practcieChampions = localUsers.map(obj => obj);
    const timeAttackChampions = localUsers.map(obj => obj);

    practcieChampions?.sort((a, b) => a.scores.practice < b.scores.practice ? 1 : -1);
    timeAttackChampions?.sort((a, b) => a.scores.timeAttack < b.scores.timeAttack ? 1 : -1);

    renderNewLi(practcieChampions, practiceAllLi, tagPracticeList, modes.practice);
    renderNewLi(timeAttackChampions, timeAttackAllLi, tagTimeAttckList, modes.timeAttack);

    function renderNewLi (arrUsers, allTagLi, list, mode){

        arrUsers?.forEach(obj => {
            if(allTagLi.length){
                Array.from(allTagLi).forEach(li => {
                    console.log(li);
                    if(li.dataset.userName == obj.name) null 
    
                    else {
                        const newLi = constructorLeaderUser(obj, modes, mode);
                        if(newLi) list.append(newLi);
                    }
                })
    
            } else{
    
                const newLi = constructorLeaderUser(obj, modes, mode);
                if(newLi) list.append(newLi);
            }
        })
    }

    btnPrevMenu.addEventListener('click', () => {
        funcTransitionBlock(leaderboardBlock, mainMenu);
    })

}