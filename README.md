# weather-app-server
Proxy server for external weather API

## Requirements
- Node.js
- NPM or yarn
- an API key for Open Weather Map

## Next Steps for Production-Ready
- [ ] CI/CD including linting and testing
- [ ] Containerization for consistent local development
- [ ] Logging and alerting
- [ ] Endpoint documentation including response schema

## Setup
1. Clone the repo
1. From the root directory run `npm install`
1. Run `npm run build` to transpile TS to JS
1. Run `npm run serve` to start the server (it expects your Open Weather Map key to be set on the environment variable `APPID`)

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

#### Weather Service

The weather service is designed to flexibly handle switching between external weather APIs. Inversion of control is provided by passing the desired client into the constructor of the service. The weather service has it's own contract to fulfill, which is decoupled from the schemas returned by the weather clients. Within the service, distinct clients are defined for each weather service that are each responsible for remapping data, keeping the top-level service file clean and agnostic of any client.

### External

Wrappers around calls out to external services are found in `src/external`. These wrappers do not perform any mutations to external data, leaving that task to services and their clients.

## TODO
- [x] Migrate to TS
- [x] Remove `sum` sample code
- [x] Add `external` directory for external API code
- [x] Add `service` directory for weather service business logic
- [x] Add `routes` directory and relevant subdirectories
- [x] Clean up app.js vs index.js
- [x] Add mocking of external API for testing
- [x] Replace sample with live calls
- [ ] Add deserialization
- [ ] Add basic auth check
- [x] Add caching of external response data
- [x] Add error handling
