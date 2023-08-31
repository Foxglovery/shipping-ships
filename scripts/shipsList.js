import { getShips, getHaulers } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a shipping ship list item clicked?
        const clickedship = itemClicked.dataset.haulerid
        const haulers = structuredClone(getHaulers())
        if(itemClicked.dataset.type === "ship"){
                
                const shipName= itemClicked.dataset.name
                
            // Get the haulerId value of the shipping ship clicked
            
            
            
            let haulingShip = { name: "Incorrect" }
            // Define a default object for the found hauler
            for (const hauler of haulers) {
                
                // Iterate the array of hauler objects
                if (hauler.id === parseInt(clickedship)) {
                    // Does the haulerId foreign key match the id of the current hauler?
                        haulingShip = hauler.name
                }

                    
                }
            
            window.alert(`${shipName} is being hauled by ${haulingShip}`)
            // Reassign the value of `haulingShip` to the current hauler
            
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
        }
    }
)



export const shipList = () => {
    const ships = getShips()
    let shipHTML = "<ul>"

    for (const ship of ships) {
        shipHTML += `<li data-type="ship" data-name="${ship.name}" data-haulerId="${ship.haulerId}" ">${ship.name}</li>`
    
       } 
       return shipHTML += "</ul>"
}