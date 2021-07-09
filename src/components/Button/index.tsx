import React from 'react'

import './styles.scss'

interface Props {
    imgName: string;
}

const Button: React.FC<Props> = ({ imgName }) => {
    return (
        <div className="btnContainer">
            <button className="btn">
                <img src={imgName} alt={imgName} height="80px" width="80px"/>
            </button>
        </div>
    )
}

export default Button
