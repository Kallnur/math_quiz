import { appTransitionBlock } from "./appTransitionBlock.js"
import { appTransitionClose, appTransitionOpen } from "./appTransitionWindow.js"

export const appTransitionPrev = (btnPrev, history, hideBtn = true) => {
    btnPrev?.addEventListener('click', () => {

        if(history.length < 2 && hideBtn) btnPrev.classList.add('d-none')

        const lastTransition = history.pop();

        appTransitionOpen()
        appTransitionBlock(lastTransition.next, lastTransition.prev, true)
        appTransitionClose()
    })
}