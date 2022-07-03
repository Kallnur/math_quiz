import { appTransitionBlock } from "./appTransitionBlock.js"
import { appTransitionClose, appTransitionOpen } from "./appTransitionWindow.js"

export const appTransitionPrev = (prevBlock, nextBlock) => {
    appTransitionOpen()
    appTransitionBlock(prevBlock, nextBlock, true)
    appTransitionClose()
}