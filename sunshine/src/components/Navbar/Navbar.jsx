import styles from './Navbar.module.scss';



export function Navbar() {


    return (

     <>
        <nav className={styles.Navbar}>
        <div>MySite</div>
         <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
         </ul>
        </nav>
        <header>
        <img src="/src/assets/Cofeee.jpg" alt="headerImage" />
        </header>
     </>
    )
}
Nvarbar()