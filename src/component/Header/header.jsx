import styles from './header.module.css'
import NavBar from '../NavBar/navbar'
import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className={styles.header}>
            <h1>Изучай языки вместе с &#10078;CatLexicon&#10078;</h1>
            <p className={styles.menu}> 
           <Link to='/'><img src={logo} alt='logo' className={styles.logo}/></Link>
            <NavBar/>   
            </p>  
        </div>
    );
}

export default Header
