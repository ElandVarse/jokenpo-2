import React from 'react'

import './styles.scss'

interface Props {
    imgName: string;
    
    buttonColor: string;
    secButtonColor: string;

    btnType: string;
}

const Button: React.FC<Props> = ({ imgName, buttonColor, secButtonColor, btnType}) => {
    return (
        <div className="btnContainer">
            <button className={btnType} style={{backgroundColor: `${buttonColor}`, borderColor: `${secButtonColor}`}}>
                <img src={imgName} alt={imgName} height="80px" width="80px" />
            </button> 
        </div>
    )
}

export default Button
