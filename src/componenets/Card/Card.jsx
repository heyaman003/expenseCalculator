import React from 'react'
import './card.css'
const Card = ({children,className}) => {
       const classname= 'card '+className;
  return (
    <div className={classname}>{children}</div>
  )
}

export default Card
