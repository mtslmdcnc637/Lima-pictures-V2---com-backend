import style from './css/HomeContent.module.css'
import { BsCamera2, BsCameraReelsFill, BsFillMicFill, } from "react-icons/bs";
import { FaPhotoVideo } from 'react-icons/fa'
function HomeContent() {
    return (
        <>
            <div className={style.conteiner}>
                <h1>Serviços que ofereço</h1>
                <div>
                    <span>
                        <FaPhotoVideo />
                        <h3>Edição de vídeo</h3>
                        <p>Independente da finalidade do seu Vídeo, é importante que ele tenha uma boa construção. Para isso é necessária uma boa edição.
                            Para tornar seu vídeo mais dinâmico, cortes, colorgrading, efeitos sonoros, efeitos visuais, podem deixar seu vídeo muito mais atrativo, seja ele para redes sociais ou com finalidades comerciais.</p>
                        <a href="#producao_de_videos">Ver exemplos</a>
                    </span>
                    <span>
                        <BsFillMicFill />
                        <h3>Locuçao/Narração</h3>
                        <p>Locução comercial ou narração para roteiros de vídeos. Voz madura - grave</p>
                        <a href="#locucao">Ver exemplos</a>
                    </span>
                    <span>
                        <BsCamera2 />
                        <h3>Fotografia</h3>
                        <p>Fotografia de alimentos, natureza e estabelecimentos comerciais. Com o tratamento incluso.
                            (No momento atendo apenas a região de Paraty e proximidades)</p>
                        <a href="#fotografia">Ver exemplos</a>
                    </span>
                    <span>
                        <BsCameraReelsFill />
                        <h3>Gravação de vídeos</h3>
                        <p>Equipamentos para garantir uma boa iluminação, assim como teleprompter para te ajudar na produção de conteúdo, assim como câmeras Dslr, vão deixar seus vídeos com uma cara mais profissional.
                            (No momento atendo apenas a região de Paraty e proximidades)</p>
                        <a href="#producao_de_videos">Ver exemplos</a>
                    </span>
                    


                </div>


            </div>
        </>
    )
}
export default HomeContent