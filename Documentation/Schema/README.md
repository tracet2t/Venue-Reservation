# Database Schema 

### Description
The application is backed by a well-structured database to handle users, reservations, venues, and admins. Here is a high-level overview of the main entities:

### Entities 

1. User: Stores details of the users like name, contact, and hashed passwords.
2. Admin: Includes admin details and functionalities.
3. Venue: Contains venue details such as name, address, and availability.
4. Time Mode: Handles different time modes for booking (hourly, session, entire day).
5. Reservation: Stores reservation details including user information, venue, and time mode.
6. Reservation States: Tracks the status of a reservation (draft, pending, accepted, rejected).
7. Super Admin: Manages roles and has full control over the system.


### ER Diagram 

```
---
config:
  theme: default
---
erDiagram
    USER ||--|{ RESERVATION: ""
    USER ||--o{ FEEDBACK: ""
    USER ||--o{ VENUE: ""
    USER ||--o{ RESERVATION_STATE: ""
    VENUE ||--|| RESERVATION: ""
    RESERVATION ||--|| RESERVATION_STATE : ""
    VENUE ||--|| LOCATION: ""
    USER {
        uuid user_id PK
        string first_name
        string last_name
        int contact_number
        string address
        string email
        string password
         enum user_type "user | admin"
    }
    VENUE {
        uuid venue_id PK
        string name
        string photo
        string description
        int capcity 
        string venue_size
        enum venue_type "Auditorium | Outdoor | Co-Working Space | Conference Hall "
        enum availability "Available | Partial Available | Not Available | Reserved"
        enum time_mode "entire_day | hourly_time | session_time"
        uuid location_id FK
    }
    LOCATION { 
        uuid location_id PK
        string city
        string district
        string provincial
    }
    RESERVATION {
        uuid reservation_id PK
        uuid user_id FK
        uuid venue_id FK
        string title
        string purpose_of_reservation
        int time_duration
         enum extra_services " food | sound_system | private_parking | projectors | extend hours "
        date reservation_date
        timestamp created_at
        timestamp updated_at
    }
    RESERVATION_STATE {
        uuid reservation_state_id PK
        uuid reservation_id FK
       enum status "Pending | Rejected | Accepted"
        string admin_comments
    }
    FEEDBACK {
        uuid feedback_id PK
        uuid user_id FK
        uuid venue_id FK
        string feedback_content
        int rating "1 to 5"
        string reply
        timestamp created_at
        timestamp updated_at
    }
```
