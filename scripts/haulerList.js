import { getHaulers } from "./database.js";
import { getShips } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        const clickedHauler = itemClicked.dataset.haulerid
        const ships = structuredClone(getShips())
        if(itemClicked.dataset.type ==="hauler") {
            
            let shipsHauled = 0
            
            for (const ship of ships) {
                if (ship.haulerId === parseInt(clickedHauler)) {
                    shipsHauled++

                }
            }
           window.alert(`This hauler is transporting ${shipsHauled} vessels`) 
        }
        // Was a hauler list item clickedXXXXXX

            // Get the id of the hauler clickedXXXXXX

            // Start a counter variable at 0XXXXXXX

            // Iterate all of the shipping shipsXXXXXXXX

                // Does the haulerId foreign key match the id?XXXXX

                    // Increase the counter by 1XXXXXXX

    }
)





export const haulerList = () => {
    const haulers = getHaulers()

    let haulerHTML = "<ul>"

    for (const hauler of haulers) {
        haulerHTML += `<li data-type="hauler" data-haulerId="${hauler.id}" data-portId="${hauler.portId}">${hauler.name}</li>`
    
       } 
       return haulerHTML += "</ul>"
    }