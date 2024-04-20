import { Link } from "react-router-dom";
import styles from './navbar.module.css'

export default function NavBar(){
    return(
        <ul className={styles.menu}>
       <li ><Link to = '/' className={styles.link}>Главная</Link></li>
       <li ><Link to = '/game' className={styles.link}>Игра</Link></li> 
        </ul>  
         )
    
}