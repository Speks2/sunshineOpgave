import styles from './Main.module.scss';




export function Main() {

    return (
        <>
        <container className={styles.TextAndImages}>
            <figure>
            <figcaption>
                <h2>The right beans</h2>
                <p>Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.</p>
            </figcaption>
             <img src="src/assets/hands.png" alt="beans1" />
            </figure>
            <figure>
            <figcaption>
                <h2>Carefully handled</h2>
                <p>Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.</p>
            </figcaption>
             <img src="src/assets/sacks.png" alt="beans2" />
            </figure>
            <figure>
            <figcaption>
                <h2>From us to you</h2>
                <p>Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.</p>
            </figcaption>
             <img src="src/assets/coffeeHeart.png" alt="beans3" />
            </figure>
        </container>

        <container className={styles.ShopNow}>
        <article>
           <h2>Shop now</h2>
           <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
           <button>Go to products</button>
        </article>
        </container>
        
        
        <div className={styles.Testimonies}>
         <h2>Testimonies</h2>
         <div>
         <ul>
            <li><h3>John</h3></li>
            <li><p>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p></li>
         </ul>
         <ul>
            <li><h3>Eva</h3></li>
            <li><p>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p></li>
         </ul>
         <ul>
            <li><h3>Peter</h3></li>
            <li><p>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p></li>
         </ul>
         <ul>
            <li><h3>Michelle</h3></li>
            <li><p>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p></li>
         </ul>
         </div>
        </div>

        </>
    )
}
