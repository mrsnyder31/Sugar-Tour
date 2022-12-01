import { getVenues, getBands, getBookings } from "./database.js";
// import { findBand, findVenue } from "./Bookings.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings()
// const bandLocator = findBand();
// const venueLoactor = findVenue();

export const allVenues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html;
}

const matchVenueToBand = (venueId) => {
    let listArray = new Set()
    for (const booking of bookings) {
        if (booking.venueId === venueId) {
           listArray.add(booking.bandId)
        }
    }
   return listArray
}
// this function needs to loop through the bandId arary and 
//     ??print message for each band
// for (let i = 0; i < bandId.length; i++){
//     if (band.id === bandId[i]) {

const matchBandName = (bandId) => {
    let window = ""
    for(const set of bandId) {
    for (const band of bands) {
            if (set === band.id) {
            
             window += `${band.name} is playing here! \n`   
                }
            }
        }
    return window
}



document.addEventListener("click", (clickEvent)=>{
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("venue")) {
        const [,venueId] = itemClicked.id.split("--")

        for (const venue of venues) {
            if (venue.id === parseInt(venueId)) {
                const bandId = matchVenueToBand(parseInt(venueId));
                const bandName = matchBandName(bandId)
                

                window.alert(bandName)
                // window alert needs to show all bands that have booked a venue
            }
        }

    }
})

// venue click event needs to display all bands booked
/**
 * 1. create function to Loop through booking array and list each band id for venue IDs
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */