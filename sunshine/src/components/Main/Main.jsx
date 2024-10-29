import styles from './Main.module.scss';




export function Main() {

    return (
        <>
        <container className={styles.TextAndImages}>
            <div>
                <h2>The right beans</h2>
                <p>Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.</p>
             <img src="src/assets/hands.png" alt="beans1" />
            </div>
            <div>
                <h2>Carefully handled</h2>
                <p>Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.</p>
             <img src="src/assets/sacks.png" alt="beans2" />
            </div>
            <div>
                <h2>From us to you</h2>
                <p>Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.</p>
             <img src="src/assets/coffeeHeart.png" alt="beans3" />
            </div>
        </container>
        </>
    )
}
