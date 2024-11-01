//My Imports
import React, { useEffect, useState } from 'react'; 
import styles from './Products.module.scss';

// Define the main Products component
export function Products() {
  // Initialize state variables
  const [products, setProducts] = useState([]); // List of products from API.
  const [loading, setLoading] = useState(true); // Indicates the data if its still loading.
  const [error, setError] = useState(null); // Error messages during fetch.

  // useEffect to fetch products when component loads.
  useEffect(() => {
    // Asynchrone function to fetch product data.........
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from:', 'http://localhost:8081/products');
        
        // Send GET request to the API
        const response = await fetch('http://localhost:8081/products', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`); // Shows error...
        }

        // JSON data 
        const data = await response.json(); 
        setProducts(data); // updates product state with fetched data..
      } catch (err) {
        console.error('Fetch Error:', err); 
        setError(err.message || 'An unknown error occurred while fetching products'); // error state
      } finally {
        setLoading(false); // Sets loading to false after fetch completes...
      }
    };

    fetchProducts();
  }, []); // Empty dependency array. (So this runs only once when component mounts)

  // Conditional renderings ( a pattern used in React to render a different user interface based on whether a condition is true or false.)
  if (loading) return <div>Loading...</div>; // Shows loading message while data is fetching.
  if (error) return <div>Error: {error}</div>; // Displays error message if fetch fails.

  // Render the list of products
  return (
    <div className={styles.products}>
      {products.map((product) => ( // Map over products array to render each product.
        <div key={product.id} className={styles.product}> {/* Renders each product item with unique key. */}
          {product.image && ( // Check if image exists, then render it
            <img src={product.image} alt={product.name} className={styles.productImage} /> // Renders product image.
          )}
          <h2>{product.name}</h2> {/* Render product name */}
          <p>${product.price.toFixed(2)}</p> {/* Displays product price with 2 decimal points */}
          {product.description && <p>{product.description}</p>} {/* Renders description if it exists.. */}
          <button>Add to Cart</button> 
        </div>
      ))}
    </div>
  );
}
