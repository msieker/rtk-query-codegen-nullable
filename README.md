# rtk-query-codegen-nullable

This is a simple demo project for how rtk-query-codegen behaves when API return
types are marked as not null.

## Project Info

This project is mostly a boilerplate dotnet 5 web api project. Docker support
has been added if a dotnet5 environment isn't set up

The following changes have been made to the project:

- Add the `#nullable enable` directive to `WeatherForecast.cs`
- Change the `WeatherForecast` class to a record type
- Add `WeatherControlRequest` and `WeatherControlResponse` records to `WeatherForecast.cs`
- Add `POST` endpoint that uses the newly created Request/Response records
- Switch from Swashbuckle to NSwag, since NSwag understands nullable reference types

## Running

If dotnet 5 is installed, `dotnet run` from this directory will build the
project and launch a browser pointed at swagger.

With Docker, run the following commands:

```bash
docker build -t rtk-query-codegen-nullable .
docker run --rm -p 8080:80 -it rtk-query-codegen-nullable
```

And then open a browser at `http://localhost:8080/swagger/index.html`
Pressing `ctrl-c` will exit.

Running `rtk-query-codegen` can then be done with:

```bash
npx @rtk-incubator/rtk-query-codegen-openapi --baseUrl / --hooks http://localhost:5100/swagger/v1/swagger.json
```
