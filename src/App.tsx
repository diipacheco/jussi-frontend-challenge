import React from 'react';

import { ProductsContextProvider } from './hooks/Products';
import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <ProductsContextProvider>
      <Main />
    </ProductsContextProvider>
    <GlobalStyles />
  </>
);

export default App;
