import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders ={
    'x-rapidapi-key': '7701e06ac5msh16a813e990e5d37p1545cbjsn8fd1540eef18',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    
}
const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({url , headers :cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptos: builder.query({
            query:(count)=>createRequest (`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query:(coinId)=>createRequest (`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query:({coinId, timePeriod})=>createRequest (`coin/${coinId}/history?timeperiod=${timePeriod}`),
        }),

    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery

} = cryptoApi;

