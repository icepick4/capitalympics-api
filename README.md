# Capitalympis API

This is an API built with Node.js, Express, Prisma and MySQL to manage users and their scores for the [Capitalympics](https://github.com/icepick4/capitalympics) project.

## Endpoints

- `/api`: Authentication and user management routes. Here, we log the user, refresh their tokens, manage their accounts (delete and update).
- `/api/continents`: Provides raw data for continents, which is then stored on the front-end.
- `/api/regions`: Provides raw data for regions, which is then stored on the front-end.
- `/api/countries`: Provides raw data for countries, which is then stored on the front-end.
- `/api/questions`: Handles user responses, helps retrieve the best questions based on previous answers. This route involves significant backend calculations.
- `/api/scores`: Retrieves calculated scores for a user, provides overall scores, and allows score resetting.
- `/api/users`: Route for user registration only.

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
DATABASE_URL=database url
```
(or see [example](.env.example))
  
- A mysql database with the correct tables :

<details>
<summary>Users :</summary>

| Name          | Type         | Key |
| ------------- | ------------ | --- |
| id            | Int          | PK  |
| name          | String       |     |
| password      | String       |     |
| created_at    | DateTime     |     |
| updated_at    | DateTime     |     |
| language      | Language     |     |

</details>

<details>
<summary>Continent :</summary>

| Name          | Type         | Key |
| ------------- | ------------ | --- |
| id            | Int          | PK  |
| name          | Json         |     |

</details>

<details>
<summary>Country :</summary>

| Name            | Type         | Key |
| --------------- | ------------ | --- |
| id              | Int          | PK  |
| code            | String       |     |
| name            | Json         |     |
| capital         | Json         |     |
| official_name   | Json         |     |
| region_id       | Int          |     |
| population      | Int          |     |
| google_maps_link| String        |     |
| flag            | String        |     |

</details>

<details>
<summary>CountryCurrency :</summary>

| Name          | Type         | Key |
| ------------- | ------------ | --- |
| id            | Int          | PK  |
| country_id    | Int          |     |
| currency_id   | Int          |     |

</details>

<details>
<summary>Currency :</summary>

| Name          | Type         | Key |
| ------------- | ------------ | --- |
| id            | Int          | PK  |
| name          | String       |     |
| symbol        | String       |     |

</details>

<details>
<summary>Region :</summary>

| Name          | Type         | Key |
| ------------- | ------------ | --- |
| id            | Int          | PK  |
| name          | Json         |     |
| continent_id  | Int          |     |

</details>

<details>
<summary>QuestionResult :</summary>

| Name          | Type         | Key |
| ------------- | ------------ | --- |
| id            | Int          | PK  |
| user_id       | Int          |     |
| country_id    | Int          |     |
| learning_type | LearningType |     |
| result        | Score        |     |
| created_at    | DateTime     |     |

</details>

With these types :

```javascript
enum Language {
  en
  es
  it
  fr
}

enum LearningType {
  capital
  flag
}

enum Score {
  succeeded
  medium
  failed
}
```

Use prisma to initialize your database, migrations are available [here](/prisma/migrations).

Then you can easily seed the database by running : `npm run seed`
To fill raw data tables : countries, regions and continents.
  
## Run the api
Either : 

- Clone the repo
- Run the classic : `npm i`
- Do not forget to fill the `.env`
- Run the following command : `npm run dev`
- Then go to http://localhost:3001

Or : 

- Build the Dockerfile with the following command : `docker build -t <yourname>/api-capitalympics -f Dockerfile .`
- Run it : `sudo docker run --network=host -p 3001:3001 -e DB_HOST=<YOUR_DB_HOST> -e DB_USER=<YOUR_DB_USER> -e DB_PWD=<YOUR_DB_PWD> -e DB_NAME=<YOUR_DB_NAME> -e PORT=<YOUR_PORT> -e JWT_TOKEN=<YOUR_JWT_TOKEN> -e DATABASE_URL=<YOUR_DATABASE_URL> --name capitalympics <yourname>/api-capital`
    
