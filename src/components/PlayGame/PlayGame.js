import React from 'react';
import style from './PlayGame.module.css'
import TotalScore from '../TotalScore/TotalScore';
import NumberSelect from '../NumberSelect/NumberSelect';
import RoleDice from '../RoleDice/RoleDice';
import { useState } from 'react';
import Button from '../Button/Button'
import Rules from '../Rules/Rules';


function PlayGame() {



  const [currentDice, setCurrentDice] = useState(1);
  const [selectNumber, setSelectNumber] = useState();
  const [total, setTotal] = useState(0);


  const [showErr, setShowErr] = useState(false);
  const [showRule, setShowRules] = useState(false);



  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const roleDice = () => {

    if (!selectNumber) {
      setShowErr(true);
      return
    }

    const randomNumber = generateNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectNumber == randomNumber) {
      setTotal(total + 10);
    } else {
      setTotal(total - 1);
    }

    setSelectNumber(null);
  }



  return (

    <div className={style.main}>
      <div className={style.top}>
        <TotalScore total={total} />

        <NumberSelect selectNumber={selectNumber} setSelectNumber={setSelectNumber} showErr={showErr} setShowErr={setShowErr} />
      </div>
      <div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
      </div>
      <div className={style.btns}>
        <Button Dark={false} click={() => setTotal(0)} text={'Reset Score'} />
        <Button Dark={true} click={() => setShowRules(!showRule)} text={showRule? 'Hide Rules' : 'Show Rules'} />
      </div>
      {
        showRule? <Rules/> : null
      }

    </div>
  );
}

export default PlayGame;
