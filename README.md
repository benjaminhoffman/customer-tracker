# Client / Patient Tracker
A simple web app to help service professionals (i.e. lawyers, physicians) track how they acquire clients / patients. Said another way, this app helps professionals answer the question, _"where do I get most my customers from?"_

# Development

## client
- react 15
- webpack 3
- es6 via babel 6
- css modules
- eslint/standard & prettier for linting & code quality

## server
- node 8.1.6
- express 4
- firebase for db

## Pre-reqs
- check your node version; should be `node v8.1.4`
- install yarn (`npm install yarn -g`)

## Run locally
```bash
$ yarn install
$ yarn client
-> http://localhost:8080
$ yarn server
```

# Principles
1. colocate files, including CSS, tests, etc
2. css modules should be imported via style-loader & css-loader
3. JSX files have `.jsx` extension
4. one component, one file
5. dont block the event loop!

# To do
- [x] redux
- [ ] use `static`
- [ ] add `.env` for env vars
- [x] react router
- [x] add `historyApiFallback` for HMR refreshes
- [ ] authentication
- [x] conditional logic to form fields
- [x] proptypes, defaultProps, displayName
- [ ] deploy to heroku
- [x] moar graphs!
- [ ] loading spinner
- [ ] fix package.json proxy setting
- CSS/HTML
 - [ ] make fields required*
 - [x] semantic markup
 - [ ] CSS preprocessor
   - [ ] add `<fieldset>` to forms
   - [x] add `<nav>` `<main>` `<header>` `<section>` `<footer>`
 - [ ] add reset/normalize
 - [x] do not nest within `<span>`
 - [ ] convert to `border-box`
