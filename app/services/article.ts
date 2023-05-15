import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector, useDispatch } from "react-redux";

const lastRequestTime: Record<string, number> = {
  "https://article-extractor-and-summarizer.p.rapidapi.com/summarize": 0,
};

const rapidApiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY || "";

const axiosBaseQuery = fetchBaseQuery({
  baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
  prepareHeaders: (headers, { getState }) => {
    // Add your custom logic to check the last request time here
    const currentTimestamp = Date.now();

    // check if the last request was made more than 12 hours ago

    // const lastRequestTimestamp = lastRequestTime['https://article-extractor-and-summarizer.p.rapidapi.com/summarize'];

    // if (currentTimestamp <= 10 * 60 * 1000) {
    //   headers.set('X-RapidAPI-Key', rapidApiKey);
    //   headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
    //   return headers;
    // }

    headers.set("X-RapidAPI-Key", rapidApiKey);
    headers.set(
      "X-RapidAPI-Host",
      "article-extractor-and-summarizer.p.rapidapi.com"
    );

    // Return empty headers to prevent the request
    return {
      ...headers,
    };
  },
});

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getSummary: builder.query<any, { articleUrl: string }>({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
      transformResponse: (response) => {
        console.log(response, "response");
        lastRequestTime[
          "https://article-extractor-and-summarizer.p.rapidapi.com/summarize"
        ] = Date.now();
        return response;
      },
    }),
  }),
});
