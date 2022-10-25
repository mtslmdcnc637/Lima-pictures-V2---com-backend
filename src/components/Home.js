import style from './css/Home.module.css'
function Home() {
    return (
        <>
            <div className={style.conteiner}>
                <div>
                    <h1>Ola! Bem vindo ao meu portfólio!</h1>
                    <p>Me chamo Nathã e sou profissional do audiovisual a 3 anos</p>
                </div>
                <div className={style.profile}></div>
            </div>
        </>
    )
}
export default Home