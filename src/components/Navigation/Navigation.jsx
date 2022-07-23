import { Outlet, NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={s.navigation}>
            <NavLink to='/' className={({ isActive }) => (isActive ? s.active : s.navigation_item)}>Home</NavLink>
            
            <NavLink to='/movies' className={({isActive}) => (isActive ? s.active : s.navigation_item)}>Movies</NavLink>
            <hr />
            <Outlet />
        </nav>
    );
}