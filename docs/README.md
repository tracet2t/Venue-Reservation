# Reservation Management System

### Description

The Team Reservation Management System is a web-based application designed to streamline the process of reserving venues for teams and organizations. This system enables users to manage and reserve spaces efficiently while providing role-based access for users, admins, and super admins.

### Table of Contents
1. Use Cases
2. User Stories
3. Activity Diagram
4. Mockup Design
5. High-Level Architecture

### Use Cases
The system supports several key use cases to enhance user experience and manage reservations efficiently. The following diagram provides an overview of the major use cases involved:



### User Stories
User stories capture the functionality from the perspective of different roles in the system. Each story describes a specific requirement or feature the system should fulfill.

* **User Stories:**

#### User Role
1. **Login**  
As a User, I want to log into my account so that I can access my dashboard and manage my reservations.

2. **Search Venue**  
As a User, I want to search for venues by location, date, or availability so that I can find the right venue for my needs.

3. **Reserve a Venue (After Login)**  
As a User, I want to reserve a venue after logging in so that I can secure a booking for my event.

4. **View Reservation Summary and Status (After Login)**  
As a User, I want to view a summary and the status of my reservation after logging in, so I can track its progress and details.

5. **Remove Draft Venues (After Login)**  
As a User, I want to remove venues that are in draft status from my reservation list after logging in, so I can manage my reservations more efficiently.

6. **Add Feedback (After Login)**  
As a User, I want to provide feedback about a venue or the reservation process after logging in, so I can share my experience and help improve the service.

7. **Cancel Reservation (After Login)**  
As a User, I want to cancel my reservation after logging in, so I can manage my bookings and avoid unnecessary commitments.


#### Guest User Role
1. **View Venue Availability by Location**  
As a Guest User, I want to view the availability of venues according to the location so I can explore options before logging in.

2. **View Venue Availability by Venue Type**  
As a Guest User, I want to view the availability of venues according to the venue types so I can find a venue that fits my needs.

3. **Sign Up**  
As a Guest User, I want to sign up for a new account so that I can create an account and access additional features after logging in.

#### Admin Role
1. **Login**  
As an Admin, I want to log into my admin account so that I can manage venues and reservations effectively.

2. **Update Venue Availability**  
As an Admin, I want to update the availability of venues so that users can only book venues that are free at their preferred times.

3. **Add New Venue Details**  
As an Admin, I want to add new venues to the system so that users have more options to choose from.

4. **Update Venue Details**  
As an Admin, I want to update the details of existing venues so that the information is always current and accurate.

5. **View User Reservations**  
As an Admin, I want to view user reservations so that I can monitor and manage booking activities.

6. **Accept or Reject User Reservations**  
As an Admin, I want to accept or reject user reservations so that I can control venue bookings based on availability and other factors.

7. **Reply to User Feedback**  
As an Admin, I want to reply to user feedback so that I can address their concerns and improve user satisfaction.

8. **Delete Venue**  
As an Admin, I want to delete a venue from the system if it is no longer available, so users only see valid options.

9. **Generate Reports**  
As an Admin, I want to generate reports about venue usage and user reservations so that I can analyze performance and make informed decisions.

### Activity Diagram
The activity diagram illustrates the flow of actions users perform within the system to complete various tasks such as reserving a venue, managing user roles, and generating reports.

## Description
This Venue Reservation System allows users to view and reserve venues online. The system accommodates different user types: guest users, registered users, and administrators, each with varying permissions and capabilities.

## User and Admin Activity Flow
The UML activity diagram below illustrates the interactions between users (both guest and registered) and the system, as well as how administrators manage venues and reservations.

### Diagram Outline

1. **Landing Page Interaction**  
   Users start by landing on the homepage, where they are presented with:
   - Login option
   - Sign-up option
   - Featured Venues section (available for all users, including guests)  
   Users can log in, sign up, or interact with featured venues.

2. **Login Flow**  
   If a user clicks on Login, they are redirected to the login page:
   - Users can log in if they have an account, redirecting them to the Logged-In Dashboard.
   - Users can sign up if they do not have an account, redirecting to the Sign-Up Page.

3. **Guest User Interaction**  
   If a user clicks on Featured Venues without logging in, they are treated as a Guest User:
   - They can search for venues and view filtered results.
   - They can check venue availability in a read-only calendar.
   - If a guest user clicks to reserve a venue, they are prompted to sign up.

4. **Registered User Interaction**  
   Once a user is logged in, they are redirected to their Logged-In Dashboard, where they can:
   - **Search Venues**: View filtered results and proceed to the reservation form.
   - **View My Reservations**: See a list of their reservations with options to modify or cancel.
   - **View/Edit Profile**: Access and update their profile information.

5. **Admin Interaction**  
   An Admin User logs in to access the Admin Dashboard:
   - Admins can view venue utilization charts and reports.
   - Admins can manage reservations, viewing requests and approving or rejecting them.
   - Admins can manage venues, with options to add, edit, or delete venue information.

## Activity Diagram
To better visualize the described user flow, the following activity diagram was generated using PlantUML:

```plantuml
@startuml
|User|
start
:Land on Landing Page;
:View Login, Signup, and Featured Venues Options;

if (User clicks on Login?) then (yes)
    :Redirect to Login Page;
    if (Has Account?) then (yes)
        :Log In;
        :Redirect to Logged-In Dashboard;
    else (no)
        :Redirect to Sign-Up Page;
    endif
else (no)
    if (Click on Featured Venues?) then (yes)
        :Redirect to Guest User Dashboard;
        |Guest User|
        if (Click on Login or Signup?) then (yes)
            :Redirect to Login or Signup Page;
        else (no)
            if (Search Venue?) then (yes)
                :Enter Venue Name or Filter Criteria;
                :View Filtered Venues;
                if (Click on Venue?) then (yes)
                    :View Reservation Calendar (Read-Only);
                    if (Guest User?) then (yes)
                        :Prompt to Sign-Up for Reservation;
                    else (no)
                        :Proceed to Reservation Form;
                    endif
                endif
            endif
        endif
    endif
endif

|Registered User|
if (User is Logged In?) then (yes)
    :Redirect to Logged-In Dashboard;
    :Search Venue, View My Reservations, or View Profile;
    
    if (Click on My Reservations?) then (yes)
        :View Reservations List;
        if (Modify Reservation?) then (yes)
            :Update Reservation;
        endif
        if (Cancel Reservation?) then (yes)
            :Cancel Reservation;
        endif
    endif
    
    if (Click Profile?) then (yes)
        :View Profile Info;
        if (Edit Profile?) then (yes)
            :Edit Profile Info;
            :Save Changes;
        endif
    endif
    
    if (Search Venue?) then (yes)
        :Enter Venue Name or Filter Criteria;
        :View Filtered Venues;
        if (Click on Venue?) then (yes)
            :View Reservation Calendar;
            :Proceed to Reservation Form;
            :Confirm Reservation;
        endif
    endif
endif

|Admin|
if (Admin Log In?) then (yes)
    :Redirect to Admin Dashboard;
    :View Venue Utilization and Reports;
    if (Manage Reservations?) then (yes)
        :View Reservation Requests;
        if (Approve or Reject Request?) then (yes)
            :Send Approval/Rejection Notification;
        endif
    endif
    if (Manage Venues?) then (yes)
        :View Venues List;
        if (Add/Edit/Delete Venue?) then (yes)
            :Perform Venue Operations;
        endif
    endif
endif

stop
@enduml


### Mockup Design
The system design is visualized through mockups, which offer a representation of the user interface and flow.

* **Mockup Design View (Figma)**:
[View Mockup](https://www.figma.com/design/mxbmrtTWL5lfMVfiDeIHpg/Reservation-Figma?node-id=0-1&t=DuOx7Mjf2TCZkNOj-1)

### High-Level Architecture
The architecture diagram provides an overview of the system’s structure, showing key components, data flow, and technology stacks used.

* **High-Level Architecture Diagram**:
[View High-Level Architecture](https://www.canva.com/design/DAGTjXwcJaE/KVVQk55P4Iba4lbqMU0BHQ/edit?utm_content=DAGTjXwcJaE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
