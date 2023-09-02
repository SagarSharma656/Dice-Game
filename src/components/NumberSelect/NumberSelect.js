import style from './NumberSelect.module.css';

function NumberSelect(props) {

    const NumberArr = [1, 2, 3, 4, 5, 6];


    return (
        <div className={style.main}>
            {
                props.showErr? <p style={{color: 'red'}}>You have not selected any number</p> : null
            }
            <div className={style.numbers} >
                {
                    NumberArr.map((value, i) => (
                        <div className={props.selectNumber == value ? style.isSelect : style.box} key={i} onClick={() => {props.setSelectNumber(value); props.setShowErr(false);}}>{value}</div>
                    ))
                }
            </div>
            
            <p>Select Number</p>
            

        </div>
    );
}

export default NumberSelect;
