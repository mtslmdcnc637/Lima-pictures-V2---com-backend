import style from './css/Redes.module.css'
import {BsFacebook, BsInstagram, BsWhatsapp, BsYoutube} from "react-icons/bs"
function Redes() {
    return (
        <>
            <div className={style.box}>
                <BsFacebook/>
                <BsInstagram/>
                <BsWhatsapp/>
                <BsYoutube/>
            </div>
        </>
    )
}
export default Redes