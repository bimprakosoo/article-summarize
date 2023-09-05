import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidGptKey = import.meta.env.VITE_CHAT_GPT_KEY;

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-summarizer-by-chatgpt.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'youtube-summarizer-by-chatgpt.p.rapidapi.com');

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/ytsummary1/?url=${encodeURIComponent(params.youtubeUrl)}&key=${rapidGptKey}`
    })
  })
})

export const { useLazyGetSummaryQuery } = youtubeApi;