# test-node-grapqhl
A sample node API for finding cities and countries using the zipcode, is used here to demonstrate the API rest and graphql

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#build--run">Build/Run</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li>
      <a href="#contribute-structure">Contribute (Structure)</a>
      <ul>
        <li><a href="#tech-stack">Tech stack</a></li>
        <li><a href="#entities">Entities</a></li>
        <li><a href="#directory-structure">Directory structure</a></li>
      </ul>
    </li>
 </ol>
</details>


## Prerequisites

* Node.js 14.16.0+
* Mysql 8.0+

## Build / Run

```
git clone https://github.com/sirlantj/test-node-grapqhl
cd test-node-grapqhl
npm install
npm run build for build the application
npm run dev for run the application in the development env
npm run test to execute the unit tests
```

## Configuration 

**ENV dependencies**

* In `./.env` 
    * `"NODE_ENV"` [Enviroment]
    * `"DB_NAME"` [Db Name]
    * `"DB_USER"` [Db User]
    * `"DB_HOST"` [Db host]
    * `"DB_DRIVER"` [Database]
    * `"DB_PASSWORD"` [Db Password]
    * `"PORT"` [Port the application]
    

## Usage 

`npm run dev`

Open your local browser and verify the sample-node-api is working by accessing:
* http://localhost:3000//api/v1/cities
* http://localhost:3000//api/v1/cities/20601
* http://localhost:18000//api/graphql to access the playground for graphql

* You can use the postman, using the POST and body, choose the ocean GraphQL and use the queries below:
```
Example by zipcode
{
  getByZipCode(zipcode:20601) {
    zipcode
    city
    country
  }
}

Example for get all cities
{
  getAll {
    zipcode
    city
    country
  }
}

```

## Contribute (Structure)

### Tech stack

* Sequelize [ORM]
* Express [API]
* Mysql [Database]
* Typescript [Language]
* GraphQL [API]

### Entities

* Cities


### Directory structure

```
.
├── src
│   ├── api
│   │   ├── controllers
│   │   │   └── cities
│   │   ├── dto
│   │   ├── graphql
│   │   │   ├── resolvers
│   │   │   └── schemas
│   │   ├── handlers
│   │   ├── interfaces
│   │   └── routes
│   └── db
│       ├── dal
│       ├── models
│       └── services
└── tests
   ├── unit
       └── services
```

### Author
- [Sirlan A Moraes](https://github.com/sirlantj). 
- Email sirlantj@gmail.com