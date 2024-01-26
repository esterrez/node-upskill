# Upskill microservice

using:
- Express
- TypeScript
- eslint + prettier + jest + ts-jest


## Usage

### Scripts
- start
    > Runs the application with [nodemon][nodemon] from source. Meant to be used during development.
- prod
    > Runs the application from built js files. Meant to be used within the container in Prod-like environments.
- build
    > Builds the application. Outputting in `dist/`
- clean
    > 
- lint
    > 
- test
    > 

### Database connection 
define environment variable `DB_CONNECTION_URI`

example:
```
DB_CONNECTION_URI=mysql://user:pass@example.com:3396/nodedata
```