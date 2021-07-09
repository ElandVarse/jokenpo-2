import React from 'react'

import './styles.scss';

import Button from '../Button/index';

import rockImg from "../../assets/rock.png"
import scissorImg from "../../assets/scissor.png"
import paperImg from "../../assets/paper.png"

function Fliper() {
    const rock = rockImg;
    const scissor = scissorImg;
    const paper = paperImg;
    
    return (
        <div className="screenBorders">
            <div className="screen">

            </div>

            <div className="btnContainer">
                <Button imgName={rock}/>
                <Button imgName={paper}/>
                <Button imgName={scissor}/>
            </div>
        </div>
    )
}

export default Fliper
