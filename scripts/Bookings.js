import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

//function to connect band to booking
export const findBand = (booking, bandsArray) => {
    let bookBand = []

    for (const band of bandsArray) {
        if (band.id === booking.bandId) {
            bookBand = band
        }
    }

    return bookBand
}

// function to connect venue to booking
export const findVenue = (booking, venuesArray) => {
    let bookVenue = []

    for (const venue of venuesArray) {
        if (venue.id === booking.venueId) {
            bookVenue = venue
        }
    }

    return bookVenue
}


export const allBookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${new Date(booking.bookingDate).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}



document.addEventListener("click", (clickEvent)=>{
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("booking")) {
        const [,bookingId] = itemClicked.id.split("--")

        for (const booking of bookings) {
            if (booking.id === parseInt(bookingId)) {
                for (const band of bands) {
                    if (band.id === booking.bandId) {

                window.alert(`${band.name}\n${band.genre}\n${band.numOfMembers}\n${band.yearFormed}`)
                // window alert needs to show all bands that have booked a venue
            }
        }
    }
        }
    }
})



/**When a booking is clicked window alert should displays all of the band information
 *  Rocket Pumpkins
    EDM
    Formed in 2005
    3 band members
 * 
 * 
 * 
 * 
 * 
 */