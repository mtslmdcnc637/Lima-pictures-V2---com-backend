import {useState} from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import style from './css/Menu.module.css'
import Redes from './Redes'
function Menu(props){
    const width = props.width
    const [active, setActive] = useState(false)
    const ToggleMode = ()=>{
        setActive(!active)
    }
    return(
    <>
        <header className={style.menu} >
            <div className={style.mobile_menu} onClick={ToggleMode} >
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <div className={style.line3}></div>
            </div>
            {active && (
            <nav>
            <a href="#home" >Home</a>
            <a href="#locucao" >Locução</a>
            <a href="#producao_de_videos" >Produção de vídeos</a>
            <a href="#fotografia" >Fotografia</a>
            
            <a href="#contato" >Contato</a>
            </nav>
            
            )}
            {width > 1000 && (
            <nav className={style.desktop}>
            <a href="#home" >Home</a>
            <a href="#locucao" >Locução</a>
            <a href="#producao_de_videos" >Produção de vídeos</a>
            <a href="#fotografia" >Fotografia</a>
            
            <a href="#contato" >Contato</a>
            </nav>
            )}
            {width < 1000 &&(<Redes/>)}
            
            
        </header>
        <a href="#home"><BsFillArrowUpCircleFill className={style.to_top}/></a>
            
    </>
    )
    
}
export default Menu