import style from './Home.module.css'
import Button from '../Button/Button'

function Home(props) {


  return (
    <div className={style.App}>
      <div className={style.container}>
        <div className={style.image}><img src="./images/main_dice.png" alt="Main Images" /></div>
        <div className={style.text}>
          <h1>DICE GAME</h1>
          <div><Button Dark={true} text={'Play Now'} click={props.play}/></div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
