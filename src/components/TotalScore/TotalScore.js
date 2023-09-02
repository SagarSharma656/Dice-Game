import React from 'react'
import style from './TotalScore.module.css'

function TotalScore(props) {
  return (
    <div className={style.main}>
      <h1>{props.total}</h1>
      <p>Total Score</p>
    </div>
  );
}

export default TotalScore;
