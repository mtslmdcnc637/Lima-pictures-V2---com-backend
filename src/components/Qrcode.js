import style from './css/Qrcode.module.css'
function Qrcode() {
    return (<>
        <div className={style.qrconteiner}>
            <span>
                <h1>Contato rápido</h1>
                <p>Escaneie o Qr code ao kado para entrar em contato pelo Whatsapp, ou clique no botão se estiver em um dispositivo com Whatsapp instalado</p>
                <a href="">Whatsapp</a>
            </span>
            <img src="http://s2.glbimg.com/XtGquOjcsqtxmRFjvQsFv9oIqY0=/290x290/s.glbimg.com/jo/g1/f/original/2011/05/17/qrcode.jpg" width="300" height="300" alt="Qrcode"></img>
        </div>
    </>)
}
export default Qrcode