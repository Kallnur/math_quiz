import { toggleElemTimeout } from "./utils"

export const scoreIncSpan = (tagScore) => {
    toggleElemTimeout(tagScore, 'span', 'game-block__score-sum--inc', '+1', 700);
}

export const scoreDecSpan = (tagScore) => {
    toggleElemTimeout(tagScore, 'span', 'game-block__score-sum--dec', '-1', 700);
}

export const constructorLeaderUser = (user, modes, mode) => {
    const newLi = document.createElement('li');
    const tagUserName = document.createElement('span');
    const tagUserScore = document.createElement('span');

    newLi.classList.add('leaderboard__item');
    newLi.dataset.userName = user.name;
    tagUserName.classList.add('leaderboard__name');
    tagUserScore.classList.add('leaderboard__score');

    tagUserName.textContent = user.name;

    if(mode == modes.practice && user.scores.practice > 0) tagUserScore.textContent = user.scores.practice
    
    else if(mode == modes.timeAttack && user.scores.timeAttack > 0) tagUserScore.textContent = user.scores.timeAttack

    else return false;

    newLi.append(tagUserName, tagUserScore);

    return newLi;
}

export const constructorAvaBlock  = (obj) => {
    const newBlock = document.createElement('div');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');

    newBlock.classList.add('setings-block__ava-block');
    newSpan.classList.add('setings-block__ava-price');

    newImg.src = obj.url;
    newSpan.textContent = obj.price + '$';

    newBlock.append(newImg, newSpan);

    return newBlock;
}

export const avatarsObj = () => {
    const avatars = [
        {
            url: './assets/images/ava/bob_ava.jpg',
            name: 'Bob',
            price: 100
        },
        {
            url: './assets/images/ava/bart_ava.jpg',
            name: 'Bart',
            price: 100
        },
        {
            url: './assets/images/ava/dazai_ava.jpg',
            name: 'Dazai',
            price: 150
        },
        {
            url: './assets/images/ava/luffy_ava.jpg',
            name: 'Dazai',
            price: 150
        },
        {
            url: './assets/images/ava/pepe_ava.jpg',
            name: 'Pepe',
            price: 0
        },
        {
            url: './assets/images/ava/rik_ava.jpg',
            name: 'Pepe',
            price: 120
        },
        {
            url: './assets/images/ava/saitama_ava.jpg',
            name: 'Pepe',
            price: 200
        }
    ]

    return avatars;
}