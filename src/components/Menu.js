import style from './css/Menu.module.css'
function Menu(){
    return(
    <>
        <div className={style.menu} >
            <a href="">Home</a>
            <a href="">Locução</a>
            <a href="">Produção de vídeos</a>
            <a href="">Fotografia</a>
            <a href="">Sobre min</a>
            <a href="">Contato</a>
        </div>
            
    </>
    )
}
export default Menu