# Web Dev Notes
> Notes for starting a basic web app.


## Tools Needed
  - [Node.js](https://nodejs.org/en/)
  - [Postman](https://www.postman.com/)
  - [Git](https://git-scm.com/download/win)


## Creating a Github Project
1. Create folder for application.
2. Run Git commands to link to repo:
```
git init
git remote add origin <GITHUB_LINK>
```
3. Create a `README.md` file
4. Apply changes to github:
```
git add .
git commit -m "<MESSAGE>"
git push origin master
```

*NOTE:* Follow step 4 every time you want to apply changes to Github repo.


## Creating a Node.js App
1. Initialize app with `npm init`.
2. Install modules with `npm i <MODULE_NAME>`
  - *nodemon*, dev tool to reload app
  - *express*, API framework
  - *mongoose*, database module
  - *body-parser*, parse requests as JSON
3. Create a `.gitignore` file:
```
node_modules/
```
4. Create a `index.js` file.
5. Import modules: `const MODULE_NAME = require('MODULE_NAME')`
6. Run app with: `node index.js`
7. View site with: `localhost:PORT`


## Setup nodemon
1. Create script in *package.json*:
```
scripts: {
  ...
  "dev": "nodemon index"
}
```
2. Run server with: `npm run dev`


## Setup first request
1. Setup bodyparser
```javascript
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
```
2. Create request handler
```javascript
app.get('/', (req, res) => {
    // req: request, res: response
    res.json({
        message: "Hello world"
    })
})
```

## CRUD requests
  - *POST*, create date
  - *GET*, read data
  - *PUT*, update data
  - *DELETE*, delete data


## React
  - `npx create-react-app <APP_NAME>`
  - `cd <APP_NAME>`
  - `npm start`
