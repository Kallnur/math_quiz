import { appTransitionWindow } from "./appFunctions/appTransitionWindow.js"

export const app = () => {
    const btnStart = document.querySelector('.btn-start')

    btnStart.addEventListener('click', () => appTransitionWindow())
}