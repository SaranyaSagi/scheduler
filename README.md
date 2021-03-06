# Interview Scheduler

# Summary

A modern client single page application using the React view library.
- ✅ Interviews can be booked between Monday and Friday.
- ✅ Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- ✅ The application makes API requests to load and persist data.
- ✅ Spots are updated on creation or deletion of appointment but not on edits. 
- ✅ Deletions have confirm option 
- ✅ Saving and deleting transitions included. 
- ✅ Built in jest, storybook and cypresss cover unit, componenet and end2end testing respectively. 
- ✅ Web sockets implementation allowing real time updates when appointments are added, edited or deleted. 

## Final Product

### ☑︎ Main page with transitions between days 
#### Data obtained from API-server
![transitions](https://github.com/SaranyaSagi/scheduler/blob/master/docs/transitions.gif?raw=true)

### ☑︎ Add appointment and update spots spontaneously
#### API server gets updated so data is not lost upon refresh
![Add appointments](https://github.com/SaranyaSagi/scheduler/blob/master/docs/newAddAppt.gif?raw=true)

### ☑︎ Edit existing appointments
#### Old name and interviewer preselected before editing
![Edit appointments](https://github.com/SaranyaSagi/scheduler/blob/master/docs/newEditappt.gif?raw=true)

### ☑︎ Error handling or validation for name and interviewer
#### Error message for empty name
#### Error message if no interviewer selected
![Error hanldling](https://github.com/SaranyaSagi/scheduler/blob/master/docs/newErrorHandling.gif?raw=true)

### ☑︎ Delete appointments with confirm/cancel options and updated spots
![Delete appointment](https://github.com/SaranyaSagi/scheduler/blob/master/docs/Delete_appt.gif?raw=true)

### ☑︎ Error handling when deleting and saving could not be performed.
![Error hanldling close](https://github.com/SaranyaSagi/scheduler/blob/master/docs/error_close.gif?raw=true)

### ☑︎ Cypress End2End tests
![cypress](https://github.com/SaranyaSagi/scheduler/blob/master/docs/new_cypress.gif?raw=true)

### ☑︎ Storybook component, integration tests 
![storybook](https://github.com/SaranyaSagi/scheduler/blob/master/docs/storybook.gif?raw=true)

### ☑︎ Jest unit tests and Test coverage
![Test coverage](https://github.com/SaranyaSagi/scheduler/blob/master/docs/jest.png?raw=true)

### ☑︎ Web sockets with real time updates 
#### Add, edit, and delete appointments in real time without refresh
![Web Sockets](https://github.com/SaranyaSagi/scheduler/blob/master/docs/WebSockets.gif?raw=true)

## Dependencies
- axios: "^0.25.0",
- classnames: "^2.2.6",
- normalize.css: "^8.0.1",
- react: "^16.13.1",
- react-dom: "^16.13.1",
- react-scripts: "3.0.0"

## devDependencies
- @babel/core: "^7.4.3",
- @storybook/addon-actions: "^5.0.10",
- @storybook/addon-backgrounds: "^5.0.10",
- @storybook/addon-links: "^5.0.10",
- @storybook/addons: "^5.0.10",
- @storybook/react: "^5.0.10",
- @testing-library/jest-dom: "^4.0.0",
- @testing-library/react: "^8.0.7",
- @testing-library/react-hooks: "^7.0.2",
- babel-loader: "^8.0.5",
- node-sass: "^4.14.0",
- prop-types: "^15.8.1"

## Getting Started - Setup

Install dependencies with `npm install`.
- axios
- cypress
- storybook
- babel
- node-sass

### Running Webpack Development Server
```sh
npm start
```

### Running Jest Test Framework
```sh
npm test
```

### Running Storybook Visual Testbed
```sh
npm run storybook
```