import { appTransitionClose, appTransitionOpen } from "../../appFunctions/appTransitionWindow.js"
import { appTransitionBlock } from "../../appFunctions/appTransitionBlock.js"
import { authQuest } from "../methodAuth/authQuest.js"

export const startWindow = (blockQuestionLogin) => {
    const btnStart = document.querySelector('.btn-start')
    const hideBlock = document.querySelector('.start-window__btn-block')

    btnStart?.addEventListener('click', (e) => {
        appTransitionOpen()
        appTransitionBlock(hideBlock, blockQuestionLogin, true)

        appTransitionClose()
    })
}