# Zero-Ramp-Up

## Getting Started

If you like to clone the repo and install dependencies using ```npm i``` from the root directory.
   1) prepare the .env file for the server as per .env.example (eg. PORT = 4000). 
      Then write the url to connecting the MongoDb Atlas (eg. mongodb+srv://username:password@cluster0.hqqia.mongodb.net/Db_Name?retryWrites=true&w=majority).
   2) I used mongoose so you have to insert product using endpoint ('http://localhost:4000/product').

Then, run the app in development mode using following command, but make sure run command from root directory:

```bash
npm run dev
```

## Tech Stack with Advantage

backend Framework: Node + express
1) The first and most important advantage of using Express.JS is that we would be able to get fast application development experience with it.
2) Several such platforms are unable to handle a higher level of requests, but with the help of Express.JS, we would be able to handle requests efficiently as it offers you the support of I/Q request handling.
3) Express.JS is open source backend framework, so it is cost effective and it has widespread community for supporting.
4) We would be able to integrate several third-party applications and services with Express.JS.
5) We can use same language to code Frontend, which makes life easy to maintain or understand full stack app.

database: Mongo Atlas (mongoose ODM)
1) Easy to connect with cloud storage.
2) No-Sql database allows us to scale the daata model easily.
3) Mongoose ODM allows us to make partial relational database.
4) Light weight, easy to use and faster than RDBMS.

## Time Log

Started: 19th August, 2021 (5:00 PM to 10:00 PM)

## Difficulty

1) Logging took bit of time because did first time there are multiple ways to doing that I tried with that winston but it didn't work well so, I will try that again.