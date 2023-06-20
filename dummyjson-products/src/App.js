import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetails, {
  loader as productLoader,
} from './components/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />,
  },
  {
    path: '/:productId',
    id: 'product-detail',
    element: <ProductDetails />,
    loader: productLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
