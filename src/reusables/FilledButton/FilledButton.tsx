import React from "react";
import style from './FillrdButton.module.css';

interface FilledButtonProps {
    text: string;
    color: string;
    padding?: string;
    marginRight?: string;
    onClick?: () => void;
    border?: string;
    disabled?: boolean;
    type?: "submit" | "reset" | "button"

    
}

const FilledButton: React.FC<FilledButtonProps> = ({ text, color, padding,onClick,border,disabled,type }) => {
    return (
        <div>
            <button className={style.btn} style={{ background: color, padding,border}} onClick={onClick} disabled={disabled} type={type}>
                <span>{text}</span>
            </button>
        </div>
    );
}

export default FilledButton;