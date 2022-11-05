import style from "./css/Redes.module.css";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
function Redes() {
  return (
    <>
      <div className={style.box}>
        <a href="#">
          
          <BsFacebook />
        </a>
        <a href="#">
          
          <BsInstagram />
        </a>
        <a href="#">
          
          <BsWhatsapp />
        </a>
        <a href="#">
          
          <BsYoutube />
        </a>
      </div>
    </>
  );
}
export default Redes;
