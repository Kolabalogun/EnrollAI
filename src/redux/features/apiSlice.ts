/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const api_url = "https://backendcrawl.onrender.com/api/";
// const api_url = "http://localhost:3000/api/";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api_url,
  }),

  tagTypes: [],
  endpoints: () => ({}),
});
