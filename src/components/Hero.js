import style from './css/Hero.module.css'
import Redes from './Redes';
import Story from './elements/code/Story'
import profilepic from '../assets/profile.jpg'
function Hero(props) {
    const width = props.width
    return (
        <>
            <div className={style.conteiner}>
                <div>
                    
                    <h1>Ola! Bem vindo ao meu portfólio!</h1>
                    <p className={style.herotext}>Me chamo Nathã e sou profissional do audiovisual a 3 anos</p>
                </div>
                {width > 1000 && (
                <div className={style.profile}>
                    <div className={style.down}>
                        <img src={profilepic}/>
                        <h3>Nathã Lima</h3>
                        <p>Produtor audiovisual | Fotógrafo</p>
                        <Redes /></div>
                </div>)}
            </div>
        </>
    )
}
export default Hero