## Zemoga Client Api

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start
```

## Test

```bash
# unit tests
$ yarn run test
```

## Heroku link

[https://zemoga-client-api.herokuapp.com/](https://zemoga-client-api.herokuapp.com/)

## Endpoints

You can find the Postman Collection [here](Zemoga-API.postman_collection.json)

```bash
# POST      /auth/login
# GET       /auth/profile

# GET       /users
# GET       /users/:id
# POST      /users
# PUT       /users/:id
# DELETE    /users/:id

# GET       /votes
# GET       /votes/:id
# GET       /votes/byUserId/:userId
# POST      /votes
# PUT       /votes/:id
# DELETE    /votes/:id

# GET       /candidates
```

## Objects structure

```js
// User

{
    "id": 1,
    "username": "username.1",
    "age": 21,
    "marriageStatus": "married",
    "createdAt": "2020-08-18T02:28:50.000Z",
    "updatedAt": "2020-08-18T02:28:50.000Z",
    "votes": [
        {
            "id": 1,
            "candidate": "candidate-1",
            "type": "down",
            "createdAt": "2020-08-18T02:28:58.000Z",
            "updatedAt": "2020-08-18T02:28:58.000Z"
        }
    ]
}


// Vote

{
    "id": 1,
    "candidate": "candidate-1",
    "type": "up",
    "createdAt": "2020-08-18T02:54:12.000Z",
    "updatedAt": "2020-08-18T02:54:12.000Z",
    "user": {
        "id": 1,
        "username": "username.1",
        "age": 21,
        "marriageStatus": "married",
        "createdAt": "2020-08-18T02:28:50.000Z",
        "updatedAt": "2020-08-18T02:28:50.000Z"
    }
}


// Candidate

{
        "id": 1,
        "name": "Kanye West",
        "time_ago": "1 month",
        "industry": "Entertaiment",
        "description": "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        "profile_picture": "kanye-west.jpg",
        "votes": {
            "up": 64,
            "down": 36
        }
    }
```
