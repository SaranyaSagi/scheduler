# Interview Scheduler


# Summary

A modern client application using the React view library.
- Interviews can be booked between Monday and Friday.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- The application makes API requests to load and persist data.
- Spots are updated on creation or deletion of appointment but not on edits. 
- Deletions have confirm option 
- Saving and deleting transitions included. 
- Built in jest, storybook and cypresss cover unit, componenet and end2end testing respectively. 


## Setup

Install dependencies with `npm install`.
- axios
- cypress
- storybook
- babel
- node-sass


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Final Product

### ☑︎ Transitions and data obtained from API-server
![transitions](https://github.com/SaranyaSagi/scheduler/blob/master/docs/transitions.gif?raw=true)

### ☑︎ Add appointment and update spots spontaneously
![Add appointments](https://github.com/SaranyaSagi/scheduler/blob/master/docs/Add_appt.gif?raw=true)

### ☑︎ Edit existing appointments
![Edit appointments](https://github.com/SaranyaSagi/scheduler/blob/master/docs/Edit_appt.gif?raw=true)

### ☑︎ Error handling or validation for name input with message 
![Error hanldling](https://github.com/SaranyaSagi/scheduler/blob/master/docs/Error_handling.gif?raw=true)

### ☑︎ Delete appointments and update spots
![Delete appointment](https://github.com/SaranyaSagi/scheduler/blob/master/docs/Delete_appt.gif?raw=true)

### ☑︎ Cypress End2End tests
![cypress](https://github.com/SaranyaSagi/scheduler/blob/master/docs/cypress.gif?raw=true)

### ☑︎ Storybook component tests 
![]()

### ☑︎ Jest unit tests
![]()