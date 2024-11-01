import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';


export function Navbar() {


    return (

     <>
        <nav className={styles.Navbar}>
          <div>
            <h2>Sunshine Coffee</h2>
          <img src="src/assets/icons8-coffee-50.png" alt="logo" />
          </div>
         <ul>
          <NavLink to={'/Products'}>
            Products
          </NavLink>
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'/Checkout'}>
           <img src="src/assets/icons8-cart-50.png" alt="cart" />
          </NavLink>
          <NavLink to={'/Login'}>
            <img src="src/assets/icons8-user-48.png" alt="user" />
          </NavLink>
         </ul>
        </nav>
        <header>
        <img src="/src/assets/Cofeee.jpg" alt="headerImage" />
        <h1>We Love Coffee 
          And all the people who make it</h1>
        </header>
     </>
    )
}
