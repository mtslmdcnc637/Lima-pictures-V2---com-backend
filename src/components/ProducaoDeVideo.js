import style from './css/ProducaoDeVideo.module.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
function ProducaoDeVideo(){
    const [videos, setVideos] = useState([]);
    const urlVideo = "https://www.youtube.com/embed/"
    useEffect(()=>{

        axios.get("https://portfolio-natha.herokuapp.com/video")
        .then((response)=>{
            setVideos(response.data)
        }).catch(()=>{
            console.log("Houve um erro ao carregar os vídeos")
        })
    },[])
    return(<>
        <div className={style.conteiner}>
            <div className={style.img}>
            <h1>Produção de vídeos</h1>
            <p>Vídos editados, filmados ou produzidos por mim</p>
            </div>
            <div className={style.videos}>
                {videos.map((video, key)=>{
                    return(
                        <div className={style.video} key={key}>
                            <iframe width="560" height="315" 
                            src={urlVideo + video.link}
                            title="YouTube video player" 
                            frameborder="0" allow="accelerometer; 
                            autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    )
                }
                )}

                </div>

        </div>
    </>
    )
}
export default ProducaoDeVideo