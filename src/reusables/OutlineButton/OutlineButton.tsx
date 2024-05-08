import React from 'react'
import style from "./OutlineButton.module.css"



interface OutlineButtonProps {
  text: string;
  color: string;
  padding?: string;
  marginRight?: string;
  onClick?: () => void;
  border?: string;
  
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ text, color, padding,onClick,border }) =>  {
  return (
    <div>
       <div>
            <button className={style.btn} style={{ background: color, padding,border}} onClick={onClick}>
                <span>{text}</span>
            </button>
        </div>
        
    </div>
  )
}

export default OutlineButton