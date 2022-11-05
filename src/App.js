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

function App() {
  const width = window.screen.width
  return (
    <>
      <Menu width={width}/>
      <section id="home">
        <Hero width={width}/>
      <section>
        <Sobre width={width}/>
      </section>
        <HomeContent width={width}/>
        <Qrcode />
      </section>
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
  );
}

export default App;
