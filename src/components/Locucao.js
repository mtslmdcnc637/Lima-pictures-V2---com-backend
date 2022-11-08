import style from "./css/Locucao.module.css";
import MercadoDaDilda from '../assets/Mercado da Dilda.mp3'
import NarracaoCuriosidades from '../assets/Narração para vídeo de curiosidades.mp3'
import LocucaoMarta from '../assets/locução martha Mp3.mp3'
import RanchoDoRango from '../assets/Restaurante Rancho Do Rango mp3.mp3'

function Locucao() {
  return (
    <>
      <div className={style.heroimage}>
        <h1>Locução</h1>
        <p>
          Veja abaixo alguns vídeos que eu narrei
        </p>
      </div>
      <div className={style.content}>
        <h6>Narração para video de cusiosidades</h6>
        <audio controls>
          <source src={NarracaoCuriosidades} type="audio/mp3" />
        </audio>
        <h6>Locução comercial</h6>
        <audio controls>
          <source src={MercadoDaDilda} type="audio/mp3" />

        </audio>
        
        <h6>Locução para restaurante</h6>
        <audio controls>
          <source src={RanchoDoRango} type="audio/mp3" />
        </audio>
   

      </div>
    </>
  );
}
export default Locucao;
