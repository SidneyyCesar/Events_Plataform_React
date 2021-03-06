import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  
  const { slug } = useParams<{slug: string}>();

  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* when exists slug (dinamic name of route) shows videos, when there is no slug shows empty div */}
        { slug? <Video lessonSlug={slug} />  : <div className="flex-1" /> }        
        <Sidebar />  
      </main> 
    </div>
  )

}