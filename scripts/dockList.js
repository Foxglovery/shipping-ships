import { getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock" data-maxcapacity="${dock.volume}">${dock.location}</li>`
    }

    docksHTML += "</ul>"
}