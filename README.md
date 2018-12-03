# Web Shop

Web Site was made as a test for a Internship. Site simulate basic online store,
where you have to Sign In to view products and ordered them. Site is separated on client and server side.
Client and server side when started run on your local machine on following addresses:
- Client side runs on [client](localhost:3000)
- Server side runs on [server](localhost:3001)

Before starting a site after migration, product table should be filled with random products of your choosing.


## Dependencies
* [git](https://git-scm.com/) - Distributed version control system
* [node.js](http://nodejs.org) - JavaScript runtime
* [yarn](https://yarnpkg.com) - Packages dependency manager
* [MYSQL](https://www.mysql.com/) - Open-source relational database management system

## Clone a repository

```sh
$ git clone https://NikolaR92@bitbucket.org/NikolaR92/zadatak5.git
```

## Installing dependencies for Ubuntu

Npm
```sh
$ sudo apt-get install npm
```
Yarn
```sh
$ sudo apt-get install curl
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update
$ sudo apt-get install yarn
```

git
```sh
$ sudo apt-get install git
```
MYSQL
```sh
$ sudo apt-get install mysql-server
```

## Install tools JavaScript

```sh
$ yarn install - installs all packages of a project
$ yarn upgrade - upgrades all packages of a project
```
## Adding new packages with yarn

### Client side
  dependencies
  ```sh
  $ cd src/client
  $ yarn add package_name
  ```
  devDependencies
  ```sh
  $ cd src/client
  $ yarn add --dev package_name
  ```

### Server side

  dependencies
  ```sh
  $ cd src/server
  $ yarn add package_name
  ```
  devDependencies
  ```sh
  $ cd src/server
  $ yarn add --dev package_name
  ```

## JavaScript packages for a project

### Client side
* [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux.js](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Immutable.js](http://facebook.github.io/immutable-js/) - Immutable.js provides many Persistent Immutable data structures
### Server side
* [Express](https://expressjs.com/) - Node.js web application framework that provides a robust set of features for web and mobile applications
* [Sequelize](http://docs.sequelizejs.com/) - Is a promise-based ORM for Node.js

## Start project
```sh
$ yarn start
```

### Start client side
```sh
$ yarn start:client
```

### Start server side
```sh
$ yarn start:server 
```
## Build project
```sh
$ yarn build
```

## Migrate database and tables
```sh
yarn migrate - creates database and tables
yarn migrate:data - creates tables
```

## Create documentation
```sh
$ yarn generate:docs
```
