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
        <main className="base">
            <div className="soundExit"></div>

            <section className="screenDisplay">

            </section>

            <section className="btnContainer">
                <Button imgName={rock}/>
                <Button imgName={paper}/>
                <Button imgName={scissor}/>
            </section>
        </main>
    )
}

export default Fliper
