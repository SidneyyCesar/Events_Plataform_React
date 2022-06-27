import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from './lib/appolo'
import { Router } from "./Router";

const GET_LESSONS_QUERY = gql`

query{
  lessons {
    id,
    title
  }
}
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  return (    
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App