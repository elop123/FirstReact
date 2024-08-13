import style from '../styles/Main.module.scss'
import Greeting from './Greeting'

function Main (){
    return(
        <>
        <div className={style.mydiv}>
        <Greeting name='Elena' />
        <Greeting name='Makka' />
        <Greeting name='Loveleen' />
        <h2>It is my First react component</h2>
        <p  className={style.myp}>Learning React is challenging  &#128549;</p>
        </div>
        </>
    )

}

export default Main