import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { router } from './routes';
import { CurrencyProvider } from './context/CurrencyContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <CurrencyProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CurrencyProvider>
    </ProductProvider>
  );
}

export default App;
