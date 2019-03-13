

EPIC MAIL
===================================
EPIC Mail is a Web-based email platform that enables user to communicate using electronic devices. The use can create an account and login to read or send the emails. The admin can create groups so that the user can communicate in a group instead of individual communication.

[![Build Status](https://travis-ci.com/Diama1/EPIC-Mail.svg?branch=develop)](https://travis-ci.com/Diama1/EPIC-Mail) [![Coverage Status](https://coveralls.io/repos/github/Diama1/EPIC-Mail/badge.svg?branch=develop)](https://coveralls.io/github/Diama1/EPIC-Mail?branch=develop)

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
    
    
    
# Setting up Dev

Getting the Project in your local machine <br/>
`https://github.com/Diama1/EPIC-Mail.git` cd into the project `cd EPIC-Mail` 

Install dependencies <br/>
`npm install`

Starting development server <br/> 
`npm start`

Run Tests <br/>
`npm test`


## API-Endpoints
JSON Object is what is returned for each API endpoint, structure of return JSON Object:

## User
Sign Up​

`POST /auth/signup`
```source-json1
    {
    "status": 201,
    "data": [
        {
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU1MjA0NTg5MywiZXhwIjoxNTUyNjUwNjkzfQ.
            msUPUA4qDF2mrwCQBtmKwJh8wnu59YmRqrDLiNshkJ8"
        }
    ]
}
```
Login

`POST /auth/login`
```source-json1
    {
    "status": 200,
    "data": [
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1MjA0NjE3MiwiZXhwIjoxNTUyNjUwOTcyfQ.
            1ls4iARoj-rCXMl2VvUiISSFmCDpkUcCTfdCdxifjVk"
        }
    ]
}
```
## Messages
Create Message​
`POST /messages`
```source-json1
  {
    "status": 201,
    "data": [
        {
            "id": 2,
            "createdOn": "2019-03-08T11:59:35.381Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 3,
            "receiverID": 1,
            "ParrentMessageId": 2,
            "status": "sent"
        }
    ]
}

```
Fetch all messages
`GET/messages`
``` source-json1
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "createdOn": "2019-03-08T12:06:21.906Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 2,
            "receiverID": 1,
            "ParrentMessageId": 1,
            "status": "unread"
        },
        {
            "id": 2,
            "createdOn": "2019-03-08T12:06:22.982Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 3,
            "receiverID": 1,
            "ParrentMessageId": 2,
            "status": "unread"
        },
        {
            "id": 3,
            "createdOn": "2019-03-08T12:06:23.964Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 4,
            "receiverID": 1,
            "ParrentMessageId": 3,
            "status": "unread"
        },
        {
            "id": 4,
            "createdOn": "2019-03-08T12:06:30.461Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 5,
            "receiverID": 1,
            "ParrentMessageId": 4
        },
        {
            "id": 5,
            "createdOn": "2019-03-08T12:06:33.579Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 6,
            "receiverID": 1,
            "ParrentMessageId": 5
        },
        {
            "id": 6,
            "createdOn": "2019-03-08T12:06:34.712Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 7,
            "receiverID": 1,
            "ParrentMessageId": 6
        },
        {
            "id": 7,
            "createdOn": "2019-03-08T12:06:47.505Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 8,
            "receiverID": 1,
            "ParrentMessageId": 7,
            "status": "read"
        },
        {
            "id": 8,
            "createdOn": "2019-03-08T12:06:48.505Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 9,
            "receiverID": 1,
            "ParrentMessageId": 8,
            "status": "read"
        }
    ]
}

```
Get a specific message​

`GET api/v1/messages/:id`
```Source-json1
{
    "status": 200,
    "data": [
        {
            "id": 2,
            "createdOn": "2019-03-08T12:06:22.982Z",
            "subject": "Testing",
            "message": "Hello world!",
            "SenderID": 3,
            "receiverID": 1,
            "ParrentMessageId": 2,
            "status": "unread"
        }
    ]
}
```
Delete a message​

`DELETE api/v1/messages/:id`
```Source-json1
{
    "status": 200,
    "data": [
        {
            "message": "The message is successfully deleted!"
        }
    ]
}
```


