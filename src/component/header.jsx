import styles from './header.module.css'

function Header(){
    return(
        <div className={styles.header}>
            <h1>Изучай языки вместе с &#10078;CatLexicon&#10078;</h1>
            <p>Добавляй новые слова и тренируй их &#11015;</p>
        </div>
    );
}

export default Header
