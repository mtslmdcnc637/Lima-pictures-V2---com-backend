import React from "react";
import style from "./css/Fotografia.module.css";
import Qrcode from "../assets/bg.jpg";
import Carousel from "react-bootstrap/Carousel";
function Fotografia() {
  return (
    <>
      <div className={style.conteiner}>
        <div className={style.imghero}>
          <h1>Fotografia</h1>
          <p>Veja algumas fotos tiradas por mim</p>
        </div>
          

          <Carousel className={style.imagens}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Qrcode}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Imagem 1</h3>
                          <p>
                            Foto tirada no dia 21
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    
          </Carousel>
        
      </div>
    </>
  );
}

export default Fotografia;
