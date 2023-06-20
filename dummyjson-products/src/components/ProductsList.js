import { useEffect, useState } from 'react';
import Product from './Product';
import styles from './ProductsList.module.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const responseData = await response.json();

      setProducts(responseData.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.content}>
      <h1>Products</h1>
      <ul className={styles['products-list']}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
