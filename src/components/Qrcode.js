import style from './css/Qrcode.module.css'
import Qrcode_wp from '../assets/qrcode_wp.png'
function Qrcode(props) {
    return (<>
        <div className={style.qrconteiner}>
            <span>
                <h1>Contato rápido</h1>
                <p>Escaneie o Qr code ao kado para entrar em contato pelo Whatsapp, ou clique no botão se estiver em um dispositivo com Whatsapp instalado</p>
                <a href="">Whatsapp</a>
            </span>
            {props.width > 1000 &&(<img src={Qrcode_wp} width="300" height="300" alt="Qrcode"></img>)}
        </div>
    </>)
}
export default Qrcode