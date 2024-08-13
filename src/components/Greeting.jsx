import style from '../styles/Greeting.module.scss'

function Greeting (props){
    return(
     <>
     <h1 className={style.fontStyle}>Welcome <span>{props.name}</span> !</h1>
     </>
   )
}

export default Greeting