# Patient Tracker
A simple web app to help service professionals (i.e. physicians) track their customers (i.e. patients). Said another way, this app helps professionals answer the question, _"where do I get most my customers from?"_

# Development
All commits have a linter precommit hook.  We also use `prettier` for code formatting.

## Pre-reqs
- check your node version; should be `node v8.1.4`
- install yarn (`npm install yarn -g`)

## Run locally
```bash
$ yarn install
$ yarn start
in a new window:
$ yarn dev
http://localhost:8080
```


# Deploy
Push to master branch and app will autodeploy via heroku.
- https://customer-tracker-2017.herokuapp.com/

# Stack

### client
- react w/ es6 via babel & webpack
- css modules
- standard/eslint for linting & prettier for formatting

### server
- node & express
- firebase for db

# Principles
1. colocate files, including CSS, tests, etc
2. css modules should be imported via style-loader & css-loader
3. JSX files have `.jsx` extension for better atom plugin support & syntax highlighting

# To do
- [x] react router
- [ ] authentication
- [x] conditional logic to form fields
- [ ] make fields required*
- [ ] proptypes, defaultProps, displayName
- [ ] deploy to heroku
- [ ] moar graphs!
