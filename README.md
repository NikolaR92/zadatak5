```
yarn install
```
```
yarn start - starts client side on localhost:3000 and server side on localhost:3001
```

*To migrate database and tables go to src/server and type
```
yarn migrate - cteates database and tables
yarn migrate - creates tables
```

*Product table should be filled with few products so that client side could show it

*if port for runing server should change then changes to config file on client side should change too because in config file is path to server side

*In src/client/service folder are functions for comunication with server api routes
*In src/server/controllers folder are functions for controling api servers routes
