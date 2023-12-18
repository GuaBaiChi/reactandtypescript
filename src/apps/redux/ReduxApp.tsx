import { Provider } from 'react-redux'

import Header from './reduxComponents/Header';
import Shop from './reduxComponents/Shop';
import Product from './reduxComponents/Product';
import { DUMMY_PRODUCTS } from './dummy-products';
import { store } from './store/store'

import './ReduxApp.css';

function ReduxApp() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default ReduxApp;
