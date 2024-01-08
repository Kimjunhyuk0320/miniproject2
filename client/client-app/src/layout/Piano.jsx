import React from 'react'
import './css/Piano.css'

const Piano = () => {
    return (
        <div className='pianoCon'>
            <div class="CDEFGABCContainer">
                <button class="btn_" id="c0" onclick="soundOnC0()"></button>
                <button class="btn_" id="d0" onclick="soundOnD0()"></button>
                <button class="btn_" id="e0" onclick="soundOnE0()"></button>
                <button class="btn_" id="f0" onclick="soundOnF0()"></button>
                <button class="btn_" id="g0" onclick="soundOnG0()"></button>
                <button class="btn_" id="a0" onclick="soundOnA0()"></button>
                <button class="btn_" id="b0" onclick="soundOnB0()"></button>
                <button class="btn_" id="c1" onclick="soundOnC1()"></button>
            </div>
            <div class="SContainer-L">
                <button class="btn_" id="c0s" onclick="soundOnCS0()"></button>
                <button class="btn_" id="d0s" onclick="soundOnDS0()"></button>
            </div>
            <div class="SContainer-R">
                <button class="btn_" id="f0s" onclick="soundOnFS0()"></button>
                <button class="btn_" id="g0s" onclick="soundOnGS0()"></button>
                <button class="btn_" id="a0s" onclick="soundOnAS0()"></button>
            </div>
        </div>
    )
}

export default Piano