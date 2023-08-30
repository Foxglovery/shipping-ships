import { DockList } from "./dockList.js";
import { haulerList } from "./haulerList.js";
import { shipList } from "./shipsList.js";

const mainContainer = document.getElementById("container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Ports</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cites">
        <h2>Haulers</h2>
        
        ${haulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Ships</h2>
        ${shipList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    
</article>`

mainContainer.innerHTML=applicationHTML