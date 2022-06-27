import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { client } from "./lib/appolo"
import { Event } from "./pages/Event";

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
    
    <Event />

  )
  
  // const  {data} = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);
  
  // return (
  //   <ul>
  //     {data?.lessons.map(item => {
  //       return <li key={item.id}>{item.title}</li>
  //     })}
  //   </ul>
  // )
}

export default App