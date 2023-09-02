import React from 'react';
import style from './Button.module.css'

function Button(props) {
  return (
    <div>
      <button className={props.Dark? style.darkBtn : style.lightBtn} onClick={props.click}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
