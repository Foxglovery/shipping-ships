import { getDocks } from "./database.js"

//ADD EVENT LISTENER: LEFT 8/30

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock" data-maxcapacity="${dock.volume}">${dock.location} can hold up to ${dock.volume} million pounds of cargo</li>`
    }

    return docksHTML += "</ul>"
}