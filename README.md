
# NestJS+TypeORM+PostgreSQL template

## Description

This is a start template for a server-side application that should use the following technologies: NestJS, TypeORM and PostgreSQL.

## Node version installation

```bash
$ nvm install
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to specify evironment variables

Rename the env.template file from the root and place it to the config folder.
The file name should have the following structure: `.{stage}.env`. For example: `.dev.env`.

This is the path that the app looks for the env file `./config/.${process.env.NODE_ENV}.env`,
