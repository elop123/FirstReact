import NavBar from "./Navbar"
import style from '../styles/Header.module.scss'

function Header ({headerText='Mangler headerText'}){
    return(
      <>
      <NavBar/>
      <h3 className={style.myH3} >{headerText}</h3>
      </>
     

   )
}

export default Header