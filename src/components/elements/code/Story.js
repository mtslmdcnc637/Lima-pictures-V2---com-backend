import React from 'react'
import style from '../css/Story.module.css'

function Story(props) {
  const styleReceivedForContentStory = {
    background: props.PrimaryColor,
    border: '8px solid'+props.border,
    color:props.color

  };
  const styleReceivedForStory = {
    width:props.width+'px',
    height:props.height+'px'

  };
  return (
    <div className={style.story} style={styleReceivedForStory}><div className={style.contentstory} style={styleReceivedForContentStory}>{props.content}</div></div>
  )
}

export default Story