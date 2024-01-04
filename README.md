<h1 align="center">Journify</h1>
<p align="center">A trusted, memorable, and enjoyable travel experience mobile application</p>

## React Native Setup

You need first to set the development environment following [react-native cli guide](https://reactnative.dev/docs/environment-setup)

### Install dependencies

```bash
# for android
cd mobile && yarn install
```

To start iOS

```bash
# for iOS
cd mobile && yarn install
cd ios && pod install
```

### Bootstrap

Have a look at `.env.example`

In the mobile folder, to start the application, you can use `yarn start` or `yarn android`, `yarn ios`

## Backend

We use NestJS to build a backend on EC2 AWS using Docker and Terraform, with Prisma ORM as Postgres db underlying (so you can use whatever is compatible with Prisma).

You need to set up a local Postgres database or launch by Docker (we have not set up Docker development yet)

Install dependencies by `yarn install`, and start the server by `yarn start:dev`. Have a look at `.env.example`
