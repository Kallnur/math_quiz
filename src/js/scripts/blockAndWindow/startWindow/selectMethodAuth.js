import { funcTransitionBlock } from "../../utils/utils.js";
import { authQuest } from "../methodAuth/authQuest.js";
import { authSignIn } from "../methodAuth/authSignIn.js";
import { authSignUp } from "../methodAuth/authSignUp.js";

export const selectMethodAuth = (loginBlocks, blockQuestionLogin, blockHistory) => {
    const signBtns = document.querySelectorAll('.sign-btn');

    const signMethods = {
        signQuest: 'sign-quest',
        signIn: 'sign-in',
        signUp: 'sign-up'
    }

    Array.from(signBtns).forEach(btn => {
        btn.addEventListener('click', () => {
            Array.from(loginBlocks)?.forEach(block => {

                if(btn.dataset.signMethod == signMethods.signQuest && block.classList.contains(signMethods.signQuest)) {
                    funcTransitionBlock(blockQuestionLogin, block, blockHistory)
                    return authQuest(signMethods.signQuest, block, blockHistory)
                };
                if(btn.dataset.signMethod == signMethods.signIn && block.classList.contains(signMethods.signIn)) {
                    funcTransitionBlock(blockQuestionLogin, block, blockHistory)
                    return authSignIn(signMethods.signIn, block, blockHistory)
                };;
                if(btn.dataset.signMethod == signMethods.signUp && block.classList.contains(signMethods.signUp)) {
                    funcTransitionBlock(blockQuestionLogin, block, blockHistory)
                    return authSignUp(signMethods.signUp, block, blockHistory)
                };
            })
        })
    })
}