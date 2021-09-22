# weather-app-server
Proxy server for external weather API

## Requirements
- Node.js
- NPM or yarn

## Setup
1. Clone the repo
1. From the root directory run `npm install`
1. Run `npm run build` to transpile TS to JS
1. Run `npm run serve` to start the server

## Testing
`npm run test`

## Linting
`npm run lint`

## Project Structure

### Routing

Routes are found in `src/routes` and are always broken down into subdirectories by route path. Controllers are minimal and contain no business logic.

### Services

The service layer of the API is found in `src/services` and is responsible for the business logic called in routes' controllers. Services are unaware of Express functionality.

Services may have clients defined within them that contain business logic for manipulating data from external sources.

### External

Wrappers around calls out to external services are found in `src/external`. These wrappers do not perform any mutations to external data, leaving that task to services and their clients.

## TODO
- [x] Migrate to TS
- [x] Remove `sum` sample code
- [x] Add `external` directory for external API code
- [x] Add `service` directory for weather service business logic
- [x] Add `routes` directory and relevant subdirectories
- [x] Clean up app.js vs index.js
- [ ] Add mocking of external API for testing
- [ ] Replace sample with live calls
- [ ] Add deserialization
- [ ] Add caching of external response data
- [ ] Add error handling
