import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const clickedDock = itemClicked.dataset.dockid
        const clickedDockLoc = itemClicked.dataset.dockloc
        const haulers = structuredClone(getHaulers())
        const docks = structuredClone(getDocks())
        let matchingHaulers = []
            if (itemClicked.dataset.type === "dock") {
                
                let dock = docks.find(dock => dock.id === parseInt(clickedDock)) //finds dock object with same id as clicked    
                // let booking = bookings.find(booking => bookings.venueId === parseInt(clickedVenueId))
                matchingHaulers = haulers.filter(hauler => dock.allowedHaulers.includes(hauler.portId)) //filter method crates new array of haulers wherein portid is INCLUDED in the dock's allowed haulers
            
            if(matchingHaulers.length === 0) { //if new array is empty, no haulers
                window.alert(`${clickedDockLoc} is currently unloading nothing.`)
            } else {
                let haulerNames = matchingHaulers.map(hauler => hauler.name).join(", ") // .map make a new array of only name properties from filtered array and .join adds the proper rendered syntax
                window.alert(`${clickedDockLoc} is currently unloading ${haulerNames}`)
            }

        }



        /*
            Your job is to design an algorithm and implement it
        */
    }
)
// let matchedItems = items.filter(item => item.key === '1');
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

//ADD EVENT LISTENER: LEFT 8/30
//store multipleHaulers in an array
//iterate haulers
//if pk id === hauler id
//The Shanghai, China dock is currently unloading Boaty McBoatface
//if not, The Shanghai, China dock is currently unloading nothing
//if multiple The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-dockid="${dock.id}" data-type="dock" data-dockloc="${dock.location}" data-maxcapacity="${dock.volume}">${dock.location} can hold up to ${dock.volume} million pounds of cargo</li>`
    }

    return docksHTML += "</ul>"
}