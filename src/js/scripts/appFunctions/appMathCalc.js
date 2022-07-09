export const appMathCalc = (num1, num2, operator) => {

    if( operator === '+') return num1 + num2;

    if( operator === '-' ) return num1 - num2;

    if( operator === '*') return num1 * num2;

    if( operator === '/') return num1 / num2;

}

export const numsEquality = (num1, num2) => {
    if(+num1 === +num2) return true 
    else return false
}