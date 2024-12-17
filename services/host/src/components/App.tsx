import { useState } from 'react';
import { Link, Outlet} from 'react-router-dom';

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => ++prev);
    }

    const decrement = () => {
        if(count > 0) setCount((prev) => --prev);
    }

    return (
        <main>
           <h1>SHOP</h1>
           <div>
            <Link to="/page_1">Page 1</Link>
            <Link to="/page_2">Page 2</Link>
           </div>
           <div>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
           </div>
           <Outlet />
        </main>
    )
}