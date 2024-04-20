 import styles from "./error.module.css"


 export default function Error(){
    return(
        <>
        <h2 className={styles.title}>Упс! Страница не найдена</h2>
        <p className={styles.error}>404 Page Not Found</p>
        </>
    )

}
