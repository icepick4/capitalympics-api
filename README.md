# Capitalympis API

This is an API built with Node.js, Express, and MySQL to manage users and their scores for the [Capitalympics](https://github.com/icepick4/capitalympics) project.

## Endpoints

The API is private for the `/users` endpoints, meaning that an API key must be included in the request header to access them. The API is open for the `/countries` endpoints.

### Countries

-   `GET /countries`: Returns all countries in the database.
-   `GET /countries/:code`: Returns the country with the given [alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1) code.

### Users

-   All endpoints require an API key in the request header.
