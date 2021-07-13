import React from 'react'

import enemy from '@src/assets/enemy.png' 
import "./styles.scss"
import Button from '@components/Button'

import rockImg from "../../assets/rock.png"
import scissorImg from "../../assets/scissor.png"
import paperImg from "../../assets/paper.png"

import '@src/global.scss';

function InnerScreen() {
    const rock = rockImg;
    const scissor = scissorImg;
    const paper = paperImg;

    return (
        <div className="innerScreen">
            <h1>CHOOSE</h1>

            <div className="row">
                <img src={enemy} alt="enemy" height="240px" width="240px" style={{marginLeft:'120px'}} />
                <h2 style={{marginTop:'64px'}} >Mwaahaha <br/> nub </h2>
            </div>

            <div className="row">
                <Button btnType="btnEnemy" imgName={scissor}   buttonColor={'#E04C5B'}    secButtonColor={'#92323b'}/>
                <Button btnType="btnEnemy" imgName={paper}     buttonColor={'#6E7EE0'}    secButtonColor={'#4d5797'}/>
                <Button btnType="btnEnemy" imgName={rock}      buttonColor={'#617A67'}    secButtonColor={'#3c4b3f'}/>
            </div>
        </div>
    )
}

export default InnerScreen