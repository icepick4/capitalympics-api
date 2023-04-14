# Capitalympis API

This is an API built with Node.js, Express, and MySQL to manage users and their scores for the [Capitalympics](https://github.com/icepick4/capitalympics) project.

## Endpoints

The API is private for the `/users` endpoints, meaning that a token associated to the user must be included in the request header to access them (the token depends on the day you log in).
The API is open for the `/countries` endpoints with GET Method.

### Countries

-   `GET /countries`: Returns all countries in the database.
-   `GET /countries/:code`: Returns the country with the given [alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1) code.

### Users

-   All endpoints require a user token.

## Dev

This project is not meant to be run locally but you can still do it, you need : 

- A file `.env` containing your database connection, such as : 
```
PORT=XXXX
DB_HOST=localhost
DB_USER=username
DB_PWD=password
DB_NAME=database
JWT_TOKEN=token
```
(or see [example](.env.example))
  
- A mysql database with the correct tables :
  <details>
  <summary>users :</summary>

    | Name | Type | Key |
    | ---- | ---- | --- |
    | id   | int  | PK  |
    | name   | char | ∅ |
    | password   | char  | ∅ |
    | level (-1 to 10)   | int  | ∅ |
    | last_activity | date | ∅ |

  </details>
    
  <details>
  <summary>userScores :</summary>
  
    | Name | Type | Key |
    | ---- | ---- | --- |
    | user_id   | int  | PK FK |
    | country_code   | char(3)  | PK FK |
    | succeeded_streak   | int | ∅ |
    | succeeded   | int  | ∅ |
    | medium_streak   | int  | ∅ |
    | medium | int | ∅ |
    | failed_streak   | int  | ∅ |
    | failed | int | ∅ |
    | level (-1 to 10) | int | ∅ |
    
  </details>
  
  <details>
  <summary>countries :</summary>
  
    | Name | Type | Key |
    | ---- | ---- | --- |
    | name | char |  ∅  |
    | official_name | char |  ∅  |
    | capital | char |  ∅  |
    | region | char |  ∅  |
    | subregion | char |  ∅  |
    | population | int |  ∅  |
    | googlemaps | char |  ∅  |
    | flag | char |  ∅  |
    | alpha3Code | char |  PK  |
    | currencies | char |  ∅  |
    
  </details>
  
  <details>
  <summary>currencies :</summary>
  
    | Name | Type | Key |
    | ---- | ---- | --- |
    | id | int |  PK  |
    | symbol | char | ∅  |
    | currency_name | char | ∅  |
    | country_code | char(3) | FK  |
    
  </details>
  
## Run the api
Either : 

- Run the following command : `npm run start`
- Then go to http://localhost:3001

Or : 

- Build the Dockerfile with the following command : `docker build -t <yourname>/api-capitalympics -f Dockerfile .`
- Run it : `sudo docker run --network=host -p 3001:3001 -e DB_HOST=<YOUR_DB_HOST> -e DB_USER=<YOUR_DB_USER> -e DB_PWD=<YOUR_DB_PWD> -e DB_NAME=<YOUR_DB_NAME> -e PORT=<YOUR_PORT> -e JWT_TOKEN=<YOUR_JWT_TOKEN> --name capitalympics <yourname>/api-capital`
    
