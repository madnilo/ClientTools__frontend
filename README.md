# ClientTools__frontend

This is a sample React & Redux application bootstraped with `create-react-app` to serve as UI for ClientTools REST API (github.com/madnilo/ClientTools__backend).

### Running the app

Clone the repository and run:

`npm install`

`npm start`

For development it is really useful to open another terminal and run:

`npm run test`

This command will run `jest` in watch mode. Every change to relevant files will re-run the tests associated to that file and the developer can have instant-ish feedback.

### TDD

The webapp was built using TDD practices. Unit tests were applied in the parts that makes sense (UI, business logic). Integration tests were applied with specific nodes of the tree that combine other components. Functional tests could be applied with libraries like Cypress, Selenium, etc. These kinds of tests would cover the part where TDD would be too cumbersome (Side effects, API integration, Use cases, etc). Exploration tests are also mandatory in a real team.

### Type-checking

The app was built using vanilla ES6, and `prop-types` library was used to create type checking for the components integration. `Flow` and Typescript could also be an alternative.

### Responsiviness

A mobile first approach was used to develop this prototype. The app is optimized for smartphones and desktops. It could be also optimized for tablets, but for simplicity this feature was not added.

