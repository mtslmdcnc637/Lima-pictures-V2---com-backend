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
                          src={img9}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img10}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img11}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img12}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img13}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img2}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img3}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img4}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img5}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img6}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img7}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img8}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p>
                            
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                     
                    
          </Carousel>
        
      </div>
    </>
  );
}

export default Fotografia;
