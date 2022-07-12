import { renderNewMathNumbers } from "../appFunctions/appRenderNum.js";
import { appTransitionBlock } from "../appFunctions/appTransitionBlock.js";
import { appTransitionClose, appTransitionOpen } from "../appFunctions/appTransitionWindow.js";

export const elementHasClass = (elem, className) => {
    if(elem){
        return elem.classList.contains(className)
    }
    return false;
}


export const disableNumInput = (e) => {
    if ("1234567890".includes(e.key)) e.preventDefault();
}

let count = 0;

export const funcTransitionBlock = (nextBlock, prevBlock, blockHistory) => {
    appTransitionOpen()
    count += 1;
    appTransitionBlock(nextBlock, prevBlock, true)
    console.log('Func Transition Block '+count+' - count',nextBlock, prevBlock, blockHistory);
    blockHistory?.push({prev: nextBlock, next: prevBlock})

    appTransitionClose()
}


export const toggleClassTimeout = (elem, className, time) => {
    elem.classList.add(className);

    setTimeout(() => {
        elem.classList.remove(className)
    }, time);
}

export const toggleElemTimeout = (parent, elem, className, text, time) => {

    const newElem = document.createElement(elem);

    newElem.classList.add(className);
    newElem.textContent = text;

    parent.append(newElem);

    setTimeout(() => {
        parent.removeChild(newElem)
    }, time);
}

export const randomizerNum = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

export const newNums = (minNum, maxNum, mathOperators) => {
    const {newNum_1, newNum_2, newOperator} = renderNewMathNumbers(minNum, maxNum, mathOperators);
    return {
        num_1: newNum_1,
        num_2: newNum_2,
        operator: newOperator
    }
}

export const timeRenderForLabel = (labValue) => {
    if( labValue == '00:30' ) return {
        min: 0,
        sec: 30
    } 
    else if( labValue == '01:00' ) return {
        min: 1,
        sec: 0
    }
    else if( labValue == '01:30' ) return {
        min: 1,
        sec: 30
    }
    else if( labValue == '02:00' ) return {
        min: 2,
        sec: 0
    }
}