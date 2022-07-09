import { randomizerNum } from "../utils/utils";

export const renderNewMathNumbers = (min, max, mathOperators) => {

    const maxCountOperator = mathOperators.length -1;
    const newOperator = mathOperators[randomizerNum(0, maxCountOperator)];
    let newNum_1 = randomizerNum(min, max);
    let newNum_2 = randomizerNum(min, max);

    if(newOperator === '-' && newNum_2 > newNum_1){
        invertNums()
    };

    if(newOperator === '/'){
        if( newNum_2 > newNum_1 ) invertNums();

        if( newNum_1 % newNum_2 != 0) {
            if(newNum_1 <= 10) newNum_1 = newNum_1 * newNum_2

            else if(newNum_1 <= 100) subtracRemind(2)

            else subtracRemind(7)
        }
    }

    function invertNums() {
        const saveNum_2 = newNum_2;
        newNum_2 = newNum_1;
        newNum_1 = saveNum_2;
    }

    function subtracRemind (decr) {
        newNum_2 = randomizerNum(min, newNum_1 / decr)
        const mod = newNum_1 % newNum_2;
        newNum_1 = newNum_1 - mod;
    }

    return {newNum_1, newNum_2, newOperator};
}