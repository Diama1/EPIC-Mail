

EPIC MAIL
===================================
EPIC Mail is a Web-based email platform that enables user to communicate using electronic devices. The use can create an account and login to read or send the emails. The admin can create groups so that the user can communicate in a group instead of individual communication.

 [![Coverage Status](https://coveralls.io/repos/github/Diama1/EPIC-Mail/badge.svg?branch=develop)](https://coveralls.io/github/Diama1/EPIC-Mail?branch=develop)

## Features

- Users can sign up.
- User can Login.
- Users can create groups
- Users can send a message to individuals .
- Users can view their inbox and read messages.
- Users can retract sent messages.
- Users can save an email as draft and send it later or delete it.


# Prerequisites
The required tools : 
    * Node : 10.14.2
    * NPM : 6.4.1
    * Postgres : 10
    
    
    
# Setting up Dev

## Clone the Repository to your local machine <br/>
```
git clone https://github.com/Diama1/EPIC-Mail.git
``` 
## Change the directory into the project directory 
`cd EPIC-Mail` 

## Install dependencies <br/>
``` 
npm install
```

## Starting development server <br/> 
``` 
npm start
```

## Run Tests <br/>
```
npm test
```


## API-Endpoints
JSON Object is what is returned for each API endpoint, structure of return JSON Object:

# API ENDPOINTS ROUTES
| Methods | Endpoints | Actions |
| :----- | :----- | ----- |
| /GET | / | Welcome message |
| /POST | /api/v2/auth/signup | Creating a User |
| /POST | /api/v2/auth/login | User Login |
| /GET | /api/v2/users | Get list of users |
| /POST | /api/v2/messages | Send a message |
| /GET | /api/v2/messages | Fetch all sent messages |
| /DELETE | /api/v2/messages/{messageId} | Delete one specified message |
| /GET | /api/v2/messages/{messageId} | Get a specific Message |
| /POST | /api/v2/groups | Create a group |
| /GET | /api/v2/groups | Get a list of group |
| /DELETE | /api/v2/groups/{groupId} | Delete a group |
| /GET | /api/v2/groups/{groupId} | Get a specific group |
