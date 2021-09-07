using System;
using System.ComponentModel.DataAnnotations;

#nullable enable

namespace rtk_query_codegen_nullable
{
    public record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
    {
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }

    public record WeatherControlRequest([property: Required] DateTime Date, [property: Required] int TemperatureC, string Summary, string? Reason);

    public record WeatherControlResponse(DateTime Date, int TemperatureC, string Summary, string? Reason)
    {
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
}
