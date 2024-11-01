import React, { useEffect, useState } from 'react';
import styles from './Products.module.scss';

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from:', 'http://localhost:8081/products');
        
        const response = await fetch('http://localhost:8081/products', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json(); // parse JSON directly
        setProducts(data);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError(err.message || 'An unknown error occurred while fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          {product.image && (
            <img src={product.image} alt={product.name} className={styles.productImage} />
          )}
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
          {product.description && <p>{product.description}</p>}
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
