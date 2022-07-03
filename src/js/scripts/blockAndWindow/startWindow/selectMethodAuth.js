import { appTransitionBlock } from "../../appFunctions/appTransitionBlock";
import { appTransitionClose, appTransitionOpen } from "../../appFunctions/appTransitionWindow.js";
import { authQuest } from "../methodAuth/authQuest.js";
import { authSignIn } from "../methodAuth/authSignIn";

export const selectMethodAuth = (loginBlocks, blockQuestionLogin, user) => {
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
                    transitionBlock()
                    return authQuest(user, signMethods.signQuest)
                };
                if(btn.dataset.signMethod == signMethods.signIn && block.classList.contains(signMethods.signIn)) {
                    transitionBlock()
                    return authSignIn(user, signMethods.signIn)
                };

                function transitionBlock() {
                    appTransitionOpen()

                    appTransitionBlock(blockQuestionLogin, block, true)

                    appTransitionClose()
                }

            })
        })
    })
}