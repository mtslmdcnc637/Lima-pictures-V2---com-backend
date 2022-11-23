import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Contato from "./components/Contato";
import Fotografia from "./components/Fotografia";
import Sobre from "./components/Sobre";
import Locucao from "./components/Locucao";
import ProducaoDeVideo from "./components/ProducaoDeVideo";
import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";
import Qrcode from "./components/Qrcode";
import { useEffect, useRef, useState } from "react";

function App() {
  const width = window.screen.width;
  const [page, setPage] = useState(1);
  const sentinela = useRef(null);
  useEffect(() => {
   const intersection = new IntersectionObserver(([entry])=>{
    const ratio = entry.intersectionRatio;
    
    if(ratio > 0.9){
      setPage((oldpage)=> oldpage + 1);
      
    }
    })
    
    if(sentinela.current){
      intersection.observe(sentinela.current);
  }
  
return () => {intersection.disconnect()}

  }, []);
  

  return (
    <>
      <Menu width={width}/>
      <section id="home" >
        <Hero width={width} />

        <HomeContent width={width}/>
        
        <Qrcode width={width} />
        <div ref={sentinela}></div>
      </section>

    {page > 1 && (
      <>
      <section id="producao_de_videos">
        <ProducaoDeVideo width={width}/>
      </section>
      <section id="locucao">
        <Locucao width={width}/>
      </section>
      <section id="fotografia">
        <Fotografia width={width}/>
      </section> 
      
      <section id="contato">
        <Contato width={width}/>
      </section>
     

      <Footer />
      </>
    )}
    </>
  )
}

  export default App;
