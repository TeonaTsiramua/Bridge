import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Product from './pages/Product';

import '@fontsource/firago'; // Defaults to weight 400
import '@fontsource/firago/300.css'; // Specify weight
import '@fontsource/firago/600.css'; // Specify weight

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        index
        element={<Home />}
        // loader={async () => fetch('http://localhost:5456/test-endpoint')}
      />
      <Route path='contact' element={<Contact />} />
      <Route
        path='products'
        element={<Products />}
        loader={async () => fetch('')}
      />
      <Route
        path='products/:productId'
        element={<Product />}
        loader={async ({ params }) => fetch(`${params.productId}`)}
      />
      <Route path='*' element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
