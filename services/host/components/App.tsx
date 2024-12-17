import { Link, Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <h1>Shop</h1>
            <div>
                <Link to="/about">About</Link>
            </div>
            <Outlet />
        </div>
    )
}