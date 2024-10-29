import styles from './API.module.scss';





export function Top() {


    return (
        <>
         <nav class="navbar">
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
Top()