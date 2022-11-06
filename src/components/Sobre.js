import React from 'react'
import style from './css/Sobre.module.css'
import Story from './elements/code/Story'
import profile from '../assets/profile.jpg'

function Sobre(props) {
  return (
    <>
      <div className={style.conteiner}>
        <div className={style.text}>
          <h1>Sobre mim</h1>
          <p><iframe class="_49_rs" title="Wix Music" aria-label="Wix Music" scrolling="no" src="https://tpa.wixapps.net/music-server/music-widget?pageId=j9mi5&compId=…a5c01-5d5b-4832-bccb-906d102ea564&vsi=b74a8853-062f-4d68-bb11-8e7229639daf" allowfullscreen allowtransparency="true" allowvr="true" frameborder="0" allow="autoplay;camera;microphone;geolocation;vr"></iframe> </p>
        </div>
        <img src={profile}/>

      </div>
    </>
  )
}

export default Sobre