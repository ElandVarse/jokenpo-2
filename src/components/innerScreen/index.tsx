import React from 'react'

import "./styles.scss"
import "@src/styles/animation.scss"
import '@src/styles/global.scss';

import enemy from '@src/assets/enemyFolder/enemy.png' 

import Button from '@components/Button'

function InnerScreen() {
    return (
        <div className="innerScreen">
            <h1>CHOOSE</h1>

            <div className="row">
                <Button btnType="enemyForm" imgName={'scissorEnemy'}/>
                <img  className="wizardComputer" src={enemy} alt="enemy" height="240px" width="240px" />
                <Button btnType="enemyForm" imgName={'rockEnemy'}   />
            </div>

            <div className="row">
                <Button btnType="enemyForm" imgName={'paperEnemy'}  />
            </div>
        </div>
    )
}

export default InnerScreen