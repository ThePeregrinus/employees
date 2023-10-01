import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http//localhost:8000/api',
});

const baseQueryWithtRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitAPi',
  baseQuery: baseQueryWithtRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
