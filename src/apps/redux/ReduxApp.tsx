import Header from './reduxComponents/Header';
import Shop from './reduxComponents/Shop';
import Product from './reduxComponents/Product';
import { DUMMY_PRODUCTS } from './dummy-products';

import './ReduxApp.css';

function ReduxApp() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default ReduxApp;
