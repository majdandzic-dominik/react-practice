import { Link, defer, useRouteLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const data = useRouteLoaderData('product-detail');

  return (
    <div>
      <Link to={'..'}>Back</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>&#36;{data.price}</p>
      <p>{data.discountPercentage}</p>
      <p>{data.rating}</p>
      <p>{data.stock}</p>
      <p>{data.brand}</p>
      <p>{data.smartphones}</p>
    </div>
  );
};

export default ProductDetails;

export const loader = async ({ request, params }) => {
  const id = params.productId;
  const response = await fetch('https://dummyjson.com/products/' + id);
  const responseData = await response.json();
  return responseData;
};
