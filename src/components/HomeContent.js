import style from './css/HomeContent.module.css'
import { BsCamera2, BsCameraReelsFill, BsFillMicFill, } from "react-icons/bs";
import { FaPhotoVideo } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import axios from 'axios';
function HomeContent() {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        axios.get("https://portfolio-natha.herokuapp.com/service")
        .then((response)=>{
            setServices(response.data)
        }).catch(()=>{
            console.log("Houve um erro ao carregar os serviços")
        })
    },[])
    return (
        <>
            <div className={style.conteiner}>
                <h1>Serviços que ofereço</h1>
                <div>
                    {services.map((service, key)=>{
                        return(
                        <span>
                        {service.icon}
                        <h3>{service.title}</h3>
                        <p>{service.text} </p>
                        <a href="#producao_de_videos">Ver exemplos</a>
                    </span>
                        )
                    })}
                    
                </div>


            </div>
        </>
    )
}
export default HomeContent