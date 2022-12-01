import { allBands } from "./Bands.js";
import { allVenues } from "./Venues.js";
import { allBookings } from "./Bookings.js"


const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Sugar Tour</h1>
<article class="bookings">
    <h2>All Bookings</h2>
    ${allBookings()}
</article>
<article class="details">
<section class="details-column-list">
    <h2>Venues</h2>
    ${allVenues()}
</section>
    <section class="details-column-list">
        <h2>Bands</h2>
        ${allBands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML