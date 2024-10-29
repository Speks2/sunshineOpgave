//Imports
import React, { useEffect, useState } from 'react';
import { Top } from './Top/Top';
import { Middle } from './Middle/Middle';
import { Bottom } from './Bottom/Bottom';
import styles from'../src/App.module.scss';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Fetching products with my own API (local)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://your-api-url.com/api/products'); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //Error handling
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  //Simple loading screen
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.Products}>
      <Top products={products} />
      <Middle products={products} />
      <Bottom products={products} />
    </div>
  );
}

export default App;
