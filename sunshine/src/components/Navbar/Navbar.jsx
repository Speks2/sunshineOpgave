import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';


export function Navbar() {


    return (

     <>
        <nav className={styles.Navbar}>
        <div>MySite</div>
         <ul>
          <NavLink to={'/Products'}>
            Products
          </NavLink>
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'/Checkout'}>
           Checkout
          </NavLink>
          <NavLink to={'/Login'}>
            Login
          </NavLink>
         </ul>
        </nav>
        <header>
        <img src="/src/assets/Cofeee.jpg" alt="headerImage" />
        </header>
     </>
    )
}
