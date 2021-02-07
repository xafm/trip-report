# Trip Report

A report service for trips

# Installation

- Clone repository or download it manually
  ```bash
  git clone https://github.com/xafm/trip-report
  ```
- Create <strong>.env</strong> file in the root project directory
- Set required environment variables in .env file. Required envrionment variables are shown below with examples
  ```bash
  JWT_SECRET="TOPSECRET"
  DB_CONNECTION_STRING=mongodb+srv://...
  ```
- Install dependencies

  ```bash
  npm install
  ```

- Start the application
  ```bash
  npm start
  ```
  or with nodemon
  ```bash
  npm run watch
  ```
  That's all! Application should be running on the port you've specified. <br><br>
  To run tests
  ```bash
  npm test
  ```

## Install with docker

- pull
- Run container like shown below. Setting environment variables is necessary
  ```bash
  docker container run
  -e PORT=3001
     DB_CONNECTION_STRING=<your_mongo _connection_string>
     JWT_SECRET=<token_secret>
  -p 3002:3001 trip-report
  ```

# Endpoints

### POST /login

Logs the user in. It returns token if the credentials are correct, otherwise error.
<br><br>
Request Body

```bash
{
	"username":"admin",
	"password": "1234"
}
```

<br>

Example Responses <br>

Success

```bash
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjEyNTk4ODI1fQ"
  }
}
```

Error

```bash
{
  "success": false,
  "errors": [
    {
      "message": "Incorrect username or password"
    }
  ]
}
```

### GET /trips/startedAtPoint

Returns the trips which was started at the specified coordinates

### GET /trips/minMaxDistanceTravelled

Returns the trips with min and max travel distance that started at the specified coordinates

### GET /trips/groupByVehicleModelAtPoint

Returns the number of trips grouped by vehicle model years of travels which started at the specified coordinates
