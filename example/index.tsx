import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Coffe-Mug!',
    img: ''
  }
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        // maxCount: 10,
      }}
    >
      {
        ({ reset, count, onHandleIncrease, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />

          </>
        )
      }
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
