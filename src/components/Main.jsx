import style from '../styles/Main.module.scss'
import Greeting from './Greeting'

function Main (){
    return(
        <>
        <div className={style.mydiv}>
        <Greeting/>
        <h2>It is my First react component</h2>
        <p  className={style.myp}>Learning React is challenging  &#128549;</p>
        </div>
        </>
    )

}

export default Main