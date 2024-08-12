import style from '../styles/NavBar.module.scss'

function NavBar () {
    return (
        <nav className={style.navStyle}>
        <ul>
           <li className={style.linkStyle}>Home</li>
           <li className={style.linkStyle}>Service</li>
           <li className={style.linkStyle}>Contact</li>
           <li className={style.linkStyle}>Product</li>
        </ul>
        
        </nav>
    )
}

export default NavBar