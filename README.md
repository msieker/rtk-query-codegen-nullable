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
- 

## Running

If dotnet 5 is installed, `dotnet run` from this directory will build the
project and launch a browser pointed at swagger.

Running `rtk-query-codegen` can then be done with:

```bash
npx @rtk-incubator/rtk-query-codegen-openapi --baseUrl / --hooks http://localhost:5100/swagger/v1/swagger.json
```
