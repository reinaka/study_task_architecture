import * as styles from './app.module.scss';

export const App = () => {
    return (
        <main className={styles.wrapper}>
           <h1 className={styles.heading}>
                <span>welcome to</span>
                <span className={styles.heading__page}>ORDER PAGE</span>
            </h1>
        </main>
    )
}