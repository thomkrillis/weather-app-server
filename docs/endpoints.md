# Endpoints

## Health

`GET /health`

### Responses

200

## Ping

`GET /ping`

### Responses

200 string

## Weather

`GET /weather?q={query}`

`query` is a location search string (e.g. 'London, UK')

### Responses

200 { data: [Weather](../src/services/weather/types.ts) }

400 [ErrorResponse](../src/errors/index.ts)