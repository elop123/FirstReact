import style from '../styles/Footer.module.scss'

function Footer (){
    return(
        <div className={style.myFooter}>
            <h3>Footer</h3>
            <ul>
                <li >About us</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            
        </div>
);
}

export default Footer