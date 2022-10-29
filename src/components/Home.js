import style from './css/Home.module.css'
import Redes from './Redes';
function Home() {
    return (
        <>
            <div className={style.conteiner}>
                <div>
                    <h1>Ola! Bem vindo ao meu portfólio!</h1>
                    <p className={style.herotext}>Me chamo Nathã e sou profissional do audiovisual a 3 anos</p>
                </div>
                <div className={style.profile}>
                    <div className={style.down}>
                        <div className={style.profileimg}>
                        </div>
                        <h3>Nathã Lima</h3>
                        <p>Produtor audiovisual | Fotógrafo</p>
                        <Redes /></div>
                </div>
            </div>
        </>
    )
}
export default Home