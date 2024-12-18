import * as styles from './app.module.scss';
import { sum } from '@packages/shared';

export const App = () => {
    return (
        <main className={styles.wrapper}>
           <h1 className={styles.heading}>
                <span>welcome to</span>
                <span className={styles.heading__page}>SHOP PAGE</span>
            </h1>
            <div className={styles.sum}>{sum(5,9)}</div>
        </main>
    )
}