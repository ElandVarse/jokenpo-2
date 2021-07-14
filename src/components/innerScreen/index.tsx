import React from 'react'

import "./styles.scss"
import "@src/styles/animation.scss"
import '@src/styles/global.scss';

import enemy from '@src/assets/enemy.png' 
import rockImg from "../../assets/rockEnemy.png"
import scissorImg from "../../assets/scissorEnemy.png"
import paperImg from "../../assets/paperEnemy.png"

import Buttons from '@components/Buttons'

function InnerScreen() {
    const rock = rockImg;
    const scissor = scissorImg;
    const paper = paperImg;

    return (
        <div className="innerScreen">
            <h1>CHOOSE</h1>

            <div className="row">
                <Buttons btnType="btnEnemy" imgName={scissor}   buttonColor={'#cacaca'}    secButtonColor={'#646464'}/>
                <img className="enemy" src={enemy} alt="enemy" height="240px" width="240px" />
                <Buttons btnType="btnEnemy" imgName={rock}      buttonColor={'#cacaca'}    secButtonColor={'#646464'}/>
            </div>

            <div className="row">
                <Buttons btnType="btnEnemy" imgName={paper}     buttonColor={'#cacaca'}    secButtonColor={'#646464'}/>
            </div>
        </div>
    )
}

export default InnerScreen