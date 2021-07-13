import React from 'react'

import './styles.scss';

import Button from '../Button/index';

import rockImg from "../../assets/rock.png"
import scissorImg from "../../assets/scissor.png"
import paperImg from "../../assets/paper.png"

import Game from './Game';

function Fliper() {
    const rock = rockImg;
    const scissor = scissorImg;
    const paper = paperImg;

    return (
        <main className="base">
            <div className="soundExit"></div>

            <section className="screenDisplay">
                <Game />     
            </section>

            <section className="btnContainer">
                <Button imgName={rock}      buttonColor={'#617A67'}    secButtonColor={'#3c4b3f'}/>
                <Button imgName={paper}     buttonColor={'#6E7EE0'}    secButtonColor={'#4d5797'}/>
                <Button imgName={scissor}   buttonColor={'#E04C5B'}    secButtonColor={'#92323b'}/>
            </section>
        </main>
    )
}

export default Fliper
