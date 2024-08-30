import { extractColors } from "extract-colors";

export const getBackgroundColor = async (imgSrc) => {
    try {
        const finalColor = await extractColors(imgSrc,{crossOrigin : "anonymous"})
        return finalColor[0].hex
    } catch (e) {
        console.log(e)
    }
}