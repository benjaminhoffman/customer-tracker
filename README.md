# Patient Tracker
A simple web app to help service professionals (i.e. physicians) track their customers (i.e. patient) referrals. Said another why, this app helps professionals answer the question, _"where do I get most my customers from?"_

# Deploy
Push to master branch and app will autodeploy via heroku.
- https://patient-tracker-2017.herokuapp.com/

# Stack
### client
- react w/ es6 via babel & webpack
- css modules
- standard/eslint for linting & prettier for formatting

### server
- node & express

# Principles
1. colocate files, including CSS, tests, etc
2. css modules should be imported via style-loader & css-loader
3. JSX files have `.jsx` extension for better atom plugin support & syntax highlighting

# Pre-reqs
- check your node version; should be `node v8.1.4`
- use yarn; try `npm install yarn -g`

# To do
- [x] react router
- [ ] authentication
- [x] conditional logic to form fields
- [ ] make fields required*
- [ ] proptypes, defaultProps, displayName

# Development
```bash
$ yarn install
$ yarn start
in a new window:
$ yarn dev
http://localhost:8080
```
