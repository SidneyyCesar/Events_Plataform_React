import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4sgt3n8216c01yx904w5ibi/master',
  cache: new InMemoryCache()
})