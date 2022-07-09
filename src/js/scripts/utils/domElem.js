import { toggleElemTimeout } from "./utils"

export const scoreIncSpan = (tagScore) => {
    toggleElemTimeout(tagScore, 'span', 'game-block__score-sum--inc', '+1', 700);
}

export const scoreDecSpan = (tagScore) => {
    toggleElemTimeout(tagScore, 'span', 'game-block__score-sum--dec', '-1', 700);
}