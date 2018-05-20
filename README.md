# Testable Node.js API Express Example

[![Coverage Status](https://coveralls.io/repos/github/patarkf/express-testable-api-boilerplate/badge.svg?branch=master&service=github)](https://coveralls.io/github/patarkf/express-testable-api-boilerplate?branch=master&service=github) [![Build Status](https://travis-ci.org/patarkf/express-testable-api-boilerplate.svg?branch=master)](https://travis-ci.org/patarkf/express-testable-api-boilerplate.svg?branch=master)

This repository demonstrates the usage of Sequelize within an [Express](https://expressjs.com) application.
The implemented app is a simple beer registration tool.

## Starting App

```
npm install
npm run db:migrate
npm start
```

By running these commands you will start the application and create an SQLite database
in your app dir. Just open [http://localhost:4000](http://localhost:4000).

## Running Tests

Tests are implemented with [Jest](https://facebook.github.io/jest/) and [Supertest](https://github.com/visionmedia/supertest).

You can run all tests by `npm test`.

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

