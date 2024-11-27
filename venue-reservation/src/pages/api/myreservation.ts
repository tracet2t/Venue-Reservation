export default function handler(req, res) {
    // Updated mock data for reservations with additional 'Done' status and venueType
    const reservations = [
        {
            eventName: 'Team Workshop',
            startDate: '2024-12-02T10:00:00',
            endDate: '2024-12-02T12:00:00',
            timeMode: 'Half Day',
            totalDuration: '2',
            extraServices: ['Whiteboard'],
            purposeOfReservation: 'Team Development',
            status: 'Pending',
            customerName: 'Jane Smith',
            customerEmail: 'jane.smith@example.com',
            customerContactNumber: '+987654321',
            venueType: 'Conference Room', // Added venueType
        },
        {
            eventName: 'Sales Presentation',
            startDate: '2024-12-15T11:00:00',
            endDate: '2024-12-15T13:00:00',
            timeMode: 'Full Day',
            totalDuration: '2',
            extraServices: ['Projector', 'Refreshments'],
            purposeOfReservation: 'Sales Pitch',
            status: 'Accepted',
            customerName: 'Michael Scott',
            customerEmail: 'michael.scott@example.com',
            customerContactNumber: '+4455667788',
            venueType: 'Auditorium', // Added venueType
        },
        {
            eventName: 'Sales Presentation',
            startDate: '2024-12-15T11:00:00',
            endDate: '2024-12-15T13:00:00',
            timeMode: 'Full Day',
            totalDuration: '2',
            extraServices: ['Projector', 'Refreshments'],
            purposeOfReservation: 'Sales Pitch',
            status: 'Rejected',
            customerName: 'Michael Scott',
            customerEmail: 'michael.scott@example.com',
            customerContactNumber: '+4455667788',
            venueType: 'Auditorium', // Added venueType
        },
        {
            eventName: 'Team Building Retreat',
            startDate: '2024-11-05T10:00:00',
            endDate: '2024-11-05T16:00:00',
            timeMode: 'Full Day',
            totalDuration: '6',
            extraServices: ['Team Building Activities', 'Lunch'],
            purposeOfReservation: 'Employee Motivation',
            status: 'Done',
            customerName: 'Scarlett Johansson',
            customerEmail: 'scarlett.johansson@example.com',
            customerContactNumber: '+456789123',
            venueType: 'Outdoor Venue', // Added venueType
        },
    ];

    // Get current date
    const currentDate = new Date();

    // Update reservation status to 'Done' if the endDate has passed
    const updatedReservations = reservations.map(reservation => {
        const reservationEndDate = new Date(reservation.endDate);

        // If current date is past the reservation end date, update status to 'Done'
        if (currentDate > reservationEndDate && reservation.status !== 'Canceled') {
            return {
                ...reservation,
                status: 'Done',
            };
        }
        return reservation;
    });

    // Filter reservations to only include those with status: Accepted, Pending, Rejected, Done
    const filteredReservations = updatedReservations.filter(reservation =>
        ['Accepted', 'Pending', 'Rejected', 'Done'].includes(reservation.status)
    );

    // Limit the filtered data to 4 reservations
    const limitedReservations = filteredReservations.slice(0, 4);

    // Return the filtered and limited reservations data as a JSON response
    res.status(200).json(limitedReservations);
}