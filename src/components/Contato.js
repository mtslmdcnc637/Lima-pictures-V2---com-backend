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
        Sinta-se à vontade para entrar em, coontato através de um dos meios
        abaixo
      </h3>
      <div>
        <div>
          <span>
            <AiOutlineMail />
            <b>Email:</b>
            <p>contato@limapictures.com.br</p>
          </span>
          <span>
            <AiOutlinePhone />
            <b>Telefone:</b>
            <p>(24)999999999</p>
          </span>
          <span>
            <AiOutlineWhatsApp />
            <b>Whatsapp:</b>
            <p>(24)999999999</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contato;
