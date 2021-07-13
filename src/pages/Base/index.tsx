import React from 'react'

import './styles.scss';
import '@src/global.scss';

import Button from '../../components/Button/index';

import rockImg from "../../assets/rock.png"
import scissorImg from "../../assets/scissor.png"
import paperImg from "../../assets/paper.png"

import InnerScreen from '../../components/Game';

function Base() {
    const rock = rockImg;
    const scissor = scissorImg;
    const paper = paperImg;

    return (
        <div className="base">
            <header className="soundExit"></header>

            <main className="screenDisplay">
                <InnerScreen />     
            </main>

            <footer className="row">
                <Button btnType="btn" imgName={rock}      buttonColor={'#617A67'}    secButtonColor={'#3c4b3f'}/>
                <Button btnType="btn" imgName={paper}     buttonColor={'#6E7EE0'}    secButtonColor={'#4d5797'}/>
                <Button btnType="btn" imgName={scissor}   buttonColor={'#E04C5B'}    secButtonColor={'#92323b'}/>
            </footer>
        </div>
    )
}

export default Base
