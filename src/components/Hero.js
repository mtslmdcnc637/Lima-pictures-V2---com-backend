import style from './css/Hero.module.css'
import Redes from './Redes';
import Story from './elements/code/Story'
import profilepic from '../assets/profile.jpg'
function Hero(props) {
    const width = props.width
    return (
        <>
            <div className={style.conteiner}>
                <div className={style.toptext}>
                    
                    <h1>Ola! Bem vindo(a) ao meu <b>portfólio!</b></h1>
                    <p className={style.herotext}>
                        Olá meu nome é Nathã, seja bem vindo ao meu site. Neste espaço você vai encontrar amostras dos serviços que ofereço, como fotografia, locução e produção de vídeos. Fique a vontade para navegar e verificar se os meus serviços atendem a sua demanda. Caso tenha alguma dúvida entre em contato, será um prazer te atender
                    </p> 
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