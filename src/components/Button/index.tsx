import React from 'react'

import './styles.scss'
import '@src/styles/animation.scss'

interface Props {
    imgName: string;
    
    btnType: string;
}

const Button: React.FC<Props> = ({ imgName, btnType}) => {
    return (
        <div className="btnContainer">
            <button className={`${btnType} && ${imgName}`}></button> 
        </div>
    )
}

export default Button
