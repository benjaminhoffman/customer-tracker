# customer-tracker
simple web app to help service professionals track their business/customers.  right now it's geared towards medical practices (i.e. physician private practices) but the use case to wider than just that.

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
- react router
- authentication
- condition logic to form fields
- make fields required*
- proptypes, defaultProps, displayName

# Development
```bash
$ yarn install
$ yarn start
in a new window:
$ yarn dev
http://localhost:8080
```
