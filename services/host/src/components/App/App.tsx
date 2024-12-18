import { useState } from 'react';
import { Outlet} from 'react-router-dom';
import { Link, Button } from '../ui';
import * as styles from './app.module.scss';

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => ++prev);
    }

    const decrement = () => {
        if(count > 0) setCount((prev) => --prev);
    }

    return (
        <main className={styles.main__wrapper}>
           <h1>HOST PAGE</h1>
           <div className={styles.links__wrapper}>
                <Link to="/shop">Shop</Link>
                <Link to="/admin">Admin</Link>
           </div>
           <div className={styles.count}>{count}</div>
           <div className={styles.buttons__wrapper}>
                <Button onClickHandler={increment}>+</Button>
                <Button onClickHandler={decrement}>-</Button>
           </div>
           <Outlet />
        </main>
    )
}