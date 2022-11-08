import style from "./css/Contato.module.css";
import Qrcode from "../assets/bg.jpg";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
function Contato() {
  return (
    <div className={style.conteiner}>
      <h3>
        Sinta-se à vontade para entrar em, contato através de um dos meios
        abaixo
      </h3>
      <div>
        <div>
          <span>
            <AiOutlineMail />
            <b>Email:</b>
            <p>nathaempreendimentos@gmail.com</p>
          </span>
          <span>
            <AiOutlinePhone />
            <b>Telefone:</b>
            <p>(24)993072587</p>
          </span>
          <span>
            <AiOutlineWhatsApp />
            <b>Whatsapp:</b>
            <p>(24)993072587</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contato;
