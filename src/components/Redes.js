import style from "./css/Redes.module.css";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
function Redes() {
  return (
    <>
      <div className={style.box}>
        
        <a href="https://www.instagram.com/agencialimapictures/" target="_blank">
          
          <BsInstagram />
        </a>
        <a href="https://wa.me/5524993072587" target="_blank">
          
          <BsWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/nathã-lima-da-conceição" target="_blank">
          
          <AiFillLinkedin />
        </a>
      </div>
    </>
  );
}
export default Redes;
