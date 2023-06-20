import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = (props) => {
  return (
    <Link to={`/${props.product.id}`} className={styles.product}>
      <span>
        <h3>{props.product.title}</h3>
        <div
          className={styles.thumbnail}
          style={{
            backgroundImage: `url(${props.product.thumbnail})`,
          }}
        />
      </span>
      <p className={styles['price-tag']}>&#36;{props.product.price}</p>
      <p>{props.product.description}</p>
    </Link>
  );
};

export default Product;
