import React from "react";
import style from "./css/Fotografia.module.css";
import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import {useEffect, useState} from 'react'
function Fotografia() {
  const [fotos, setFotos] = useState([]);
  useEffect(()=>{
    axios.get("https://portfolio-natha.herokuapp.com/image")
    .then((response)=>{
      setFotos(response.data)
    }).catch(()=>{
      console.log("Houve um erro ao carregar as fotos")
    })
  },[])

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.imghero}>
          <h1>Fotografia</h1>
          <p>Veja algumas fotos tiradas por mim</p>
        </div>
          

          <Carousel className={style.imagens}>
                      
                      {fotos.map((foto, key)=>{
                        return(
                          <Carousel.Item>
                            <img
                          className="d-block w-100"
                          src={foto.link}
                          alt={foto.title}
                        />
                        <Carousel.Caption>
                          <h3>{foto.title} </h3>
                          <p>
                            {foto.description}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                        )
                      })}
                      

          </Carousel>
        
      </div>
    </>
  );
}

export default Fotografia;
