import React from 'react';
import style from './Rules.module.css'

function Rules() {
    return (
        <div className={style.rules}>
            <h1>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on dice if selected number is equal ti dice number you will get 10 point as dice </p>
            <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
    );
}

export default Rules;
