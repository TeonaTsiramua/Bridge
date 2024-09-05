import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { router } from './routes';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </CurrencyProvider>
  );
}

export default App;
