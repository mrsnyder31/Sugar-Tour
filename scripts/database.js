const database = {
    bands: [
        {
            id: 1,
            name: "Ready Player One",
            numOfMembers: 5,
            genre: "Punk Rock",
            yearFormed: 2003
        },
        {
            id: 2,
            name: "Dream Street",
            numOfMembers: 4,
            genre: "Blues",
            yearFormed: 2003
        },
        {
            id: 3,
            name: "Lifting Horizons",
            numOfMembers: 2,
            genre: "Techno",
            yearFormed: 2003
        }
    ],
    venues: [
        {
            id: 1,
            name: "The Music Room",
            address: "123 Music Street",
            squareFootage: "400 sq ft",
            maxOccupancy: 50
        },
        {
            id: 2,
            name: "The Hip Spot",
            address: "222 Hip Street",
            squareFootage: "800 sq ft",
            maxOccupancy: 100
        },
        {
            id: 3,
            name: "The Memorial Theare",
            address: "321 Theatre Street",
            squareFootage: "1600 sq ft",
            maxOccupancy: 200
        },
        // {
        //     id: 4,
        //     name: "The Yard",
        //     address: "123 Music Street",
        //     squareFootage: "400 sq ft",
        //     maxOccupancy: 50
        // },
        // {
        //     id: 5,
        //     name: "The Street",
        //     address: "222 Hip Street",
        //     squareFootage: "800 sq ft",
        //     maxOccupancy: 100
        // },
        // {
        //     id: 6,
        //     name: "The City",
        //     address: "321 Theatre Street",
        //     squareFootage: "1600 sq ft",
        //     maxOccupancy: 200
        // }
    ],
    bookings: [
        {
            id: 1,
            bandId: 3,
            bookingDate: "12/10/2022",
            venueId: 1
        },
        {
            id: 2,
            bandId: 1,
            bookingDate: "12/1/2022",
            venueId: 3
        },
        {
            id: 3,
            bandId: 3,
            bookingDate: "12/10/2022",
            venueId: 2
        },
        {
            id: 4,
            bandId: 2,
            bookingDate: "12/10/2022",
            venueId: 3
        },{
            id: 5,
            bandId: 2,
            bookingDate: "12/10/2022",
            venueId: 1
        },
        {
            id: 6,
            bandId: 3,
            bookingDate: "12/12/2022",
            venueId: 2
        },
        {
            id: 7,
            bandId: 1,
            bookingDate: "12/5/2022",
            venueId: 3
        }
    ]

}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}