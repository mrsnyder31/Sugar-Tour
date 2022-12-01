import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

export const allBands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html;
}

const matchBandToVenue = (bandId) => {
    let listArray = new Set()
    for (const booking of bookings) {
        if (booking.bandId === bandId) {
           listArray.add(booking.venueId)
        }
    }
   return listArray
}
const matchVenueName = (venueId) => {
    let window = ""
    for(const set of venueId) {
    for (const venue of venues) {
            if (set === venue.id) {
            
             window += `${venue.name} \n`   
                }
            }
        }
    return window
}

document.addEventListener("click", (clickEvent)=>{
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("band")) {
        const [,bandId] = itemClicked.id.split("--")

        for (const band of bands) {
           
            if (band.id === parseInt(bandId)) {
                const venueId = matchBandToVenue(parseInt(bandId));
                const venueName = matchVenueName(venueId)   
                

                window.alert(`Playing At:\n ${venueName}`)
                // window alert needs to show all bands that have booked a venue
            }
        }
    }
})

/**When a band name is clicked, a window alert should displays all of the venue at which the band is playing
 * 
 * 
 * 
 * 
 * 
 * 
 */