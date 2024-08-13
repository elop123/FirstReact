import style from '../styles/Button.module.scss'

function Button({text, index}){
    const handleAlert = () => alert('Button is clicked!');
  
 return(
    <>
    <button  onClick={handleAlert} className={style.myButton}>{text}</button>
    </>
 )
}

export default Button