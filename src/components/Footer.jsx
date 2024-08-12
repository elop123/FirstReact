import style from '../styles/Footer.module.scss'

function Footer (){
    return(
        <footer className={style.myfooter}>
            <div className={style.f_section}>
            <h3>About us</h3>
            <ul className={style.list}>
                <li>Storegade 1</li>
                <li>Aalborg, 9220</li>
                <li>Denmark</li>
            </ul>
            </div>
            <div className={style.f_section}>
            <h3> Help </h3>
            <ul className={style.list}>
                <li>Questions</li>
                <li>Reclamation</li>
                <li>Jobs</li>
            </ul>
            </div>  
            <div className={style.f_section}>
            <h3>Info</h3>
            <ul className={style.list}>
                <li>Shipping</li>
                <li>Payment</li>
                <li>Click&Collect</li>
            </ul>
            </div>  
        </footer>
);
}

export default Footer