import style from './css/Menu.module.css'
import {Link} from 'react-router-dom'
function Menu(){
    return(
    <>
        <div className={style.menu} >
            <Link to="/">Home</Link>
            <Link to="/locução">Locução</Link>
            <Link to="/produção_de_video">Produção de vídeos</Link>
            <Link to="/fotografia">Fotografia</Link>
            <Link to="/sobre">Sobre min</Link>
            <Link to="/contatos">Contato</Link>
        </div>
            
    </>
    )
}
export default Menu