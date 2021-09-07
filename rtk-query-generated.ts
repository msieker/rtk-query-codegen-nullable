import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: [],
  endpoints: (build) => ({
    weatherForecastUpdate: build.mutation<
      WeatherForecastUpdateApiResponse,
      WeatherForecastUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/WeatherForecast`,
        method: "POST",
        body: queryArg.weatherControlRequest,
      }),
    }),
    weatherForecastGet: build.query<
      WeatherForecastGetApiResponse,
      WeatherForecastGetApiArg
    >({
      query: () => ({ url: `/WeatherForecast` }),
    }),
  }),
});
export type WeatherForecastUpdateApiResponse =
  /** status 200  */ WeatherControlResponse;
export type WeatherForecastUpdateApiArg = {
  weatherControlRequest: WeatherControlRequest;
};
export type WeatherForecastGetApiResponse =
  /** status 200  */ WeatherForecast[];
export type WeatherForecastGetApiArg = {};
export type WeatherControlResponse = {
  date?: string;
  temperatureC?: number;
  summary?: string;
  reason?: string | null;
  temperatureF?: number;
};
export type WeatherControlRequest = {
  date: string;
  temperatureC?: number;
  summary: string;
  reason?: string | null;
};
export type WeatherForecast = {
  date?: string;
  temperatureC?: number;
  summary?: string | null;
  temperatureF?: number;
};
export const { useWeatherForecastUpdateMutation, useWeatherForecastGetQuery } =
  api;

