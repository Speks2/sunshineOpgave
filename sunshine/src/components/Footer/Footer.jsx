import styles from './Footer.module.scss';



export function Footer() {

    return (

        <>
        <footer>
            <div className={styles.FooterText}>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li>Supercoffeeroad 223b</li>
                    <li>92230 New Coffeland</li>
                    <li>Phone: 22331122</li>
                    <li>Mail: coffeeland@info.com</li>
                </ul>
                <ul>
                    <li><h3>Legal</h3></li>
                    <li>Cookie Policy</li>
                    <li>Return policy</li>
                    <li>Shipping</li>
                    <li>Terms and Conditions</li>
                </ul>
                <ul>
                    <li><h3>About</h3></li>
                    <li>History</li>
                    <li>The People behind</li>
                    <li>Partnerships</li>
                    <li>International</li>
                </ul>
            </div>
        </footer>
        </>
        )
} 






