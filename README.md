# Coinslot Project.

This project aims to allow a user/company to manage coinslots.
### Tech

This project uses the following technologies:

* [AngularJS] - HTML enhanced for web apps
* [Angular Material] - UI Component framework to do Material Design with AngularJS
* [NodeJS] - evented I/O for the backend

### Installation
First, you'll need to import the 'coinslot_db.sql' file to your database to have some data. You can build your own data from scratch as well, the provided one is only for the test.

Then, you need to run the API. Go to the 'api/' folder and run:

```sh
$ npm install
```
Now you need to configure the access to the database in the 'server.js' file. 
Replace the following arguments with yours:
```javascript
var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'coinslot_user',
        password : 'AzErTy_123456',
        database : 'coinslot_db',
        debug    :  false
    });
```

In my opinion, it's better to create a specific user only for this new table.

Then simply run:
```sh
npm start
```
You should see something like 
>All right ! I am alive at Port 3000.

We have now our API running !. Now, we need to run the webpage.
To do so, go into the 'webapp/' folder and start installing the node modules:
``` sh
npm install
```
Then you need a simple http server to run the webpage on. You can configure your apache/nginx to do so, or simply run:
``` sh
python -m SimpleHTTPServer 8080
```

Now that we have our http server running, go to your browser, type in 'http://localhost:8080/' and there you go !

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [AngularJS]: <http://angularjs.org>
   [Angular Material]: <https://material.angularjs.org/>
   [NodeJS]: <http://nodejs.org>

