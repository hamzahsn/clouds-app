## Aiven Cloud :fire: :rocket: :cloud: :zap:

## Introduction

This application is a demo for Aiven cloud

## Quick start

### Server

to run the server, navigate to the server folder and to cloud_backend and then run:

```bash
python manage.py runserver
```

### Client

to run the client, navigate to the client folder and:

```bash
npm install
npm start

or

yarn
yarn start
```

## APIs

```bash
http://127.0.0.1:8000/api/v1/clouds => returning fetched clouds from the API provided from the backend

```

## Pages

there is one single page for this project which is the landing page which will show the set of Clouds retrieved from the backend and then you can apply a set of filter on them depending on the cloud.

## Client ommands:

| Command             |      description       |
| ------------------- | :--------------------: |
| `npm run serve`     |   start the project    |
| `npm build `        |   build the project    |
| `npm run stylelint` | style lint the project |
| `npm run format`    |   format the project   |

## folder structure

the project is splited into 2 different folders under one git history to manage version controlling over the whole project, one for the frontend and one for the backend

## Tech used

this app is using React with typescript bootstrapped with create-react-app for the client and Python Django framework for the backend and handled the API services with [Django rest framework](https://www.django-rest-framework.org/)

## what is missing?

Due to the lack of time for this project, the serializer is missing in the server(which is maybe is not that necessary) and caching the service with Redis, and filtering the data by choosing the closest cloud provider to the client location in the frontend which will normally I would use browser API location service and tests for the frontend which I would follow normally TDD
