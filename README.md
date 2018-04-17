# Testable Node.js API Express Example

This repository demonstrates the usage of Sequelize within an [Express](https://expressjs.com) application.
The implemented app is a simple beer registration tool.

## Starting App

```
npm install
node_modules/.bin/sequelize db:migrate
npm start
```

By running these commands you will start the application and create an SQLite database
in your app dir. Just open [http://localhost:4000](http://localhost:4000).

## Starting App with Docker

```
docker build --tag express-server .
docker run --name express-server --rm -p 4000:4000 -d express-server
```

## Running Tests

Tests are most implemented with [Mocha](https://mochajs.org). But there is also a
little bit of [Supertest](https://github.com/visionmedia/supertest) and [Chai](https://github.com/chaijs/chai) as well. 

You can run all tests by `npm test`

## Environments

The app is based on three different environments: dev, test, and production. 

For dev and test environments, the app will use an SQLite database, which as mentioned before,
will be created in your app dir (it's just a binary file that can be deleted and
replaced any time). 

Also, the app will generate a different SQLite database depending on
the environment you are on (dev or test), so you can run your tests with confidence, knowing 
that your dev database will keep untouched.

For production, there is some database environment variables you can set to configure
your own instance.

