import React, { useState } from 'react';
import style from './RoleDice.module.css'

function RoleDice(props) {


  return (
    <div className={style.main}>
      <div className={style.dice} onClick={props.roleDice}>
        <img src={`./images/dices/dice${props.currentDice}.png`} alt="#" />  
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
}

export default RoleDice;
