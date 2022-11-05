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
          <p> Eu sou eu sempre fui eu sempre serei eu mesmo que voce não goste e nçao concorde sdgsdg sdg sf sfg sdgsdkjsdf dfgljdbf sdshjdbsdg dfgjsdfgdfgsdgkb   dfkgdflgdfg dfgdjgf </p>
        </div>
        <img src={profile}/>

      </div>
    </>
  )
}

export default Sobre