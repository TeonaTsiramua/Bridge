import { Suspense, lazy } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

const Layout = lazy(() => import('./components/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Product = lazy(() => import('./pages/Product'));
import Loader from './components/shared/loader/Loader';

import '@fontsource/firago'; // Defaults to weight 400
import '@fontsource/firago/300.css'; // Specify weight
import '@fontsource/firago/500.css'; // Specify weight
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
        path='products/'
        element={<Products />}
        loader={async () =>
          fetch('https://jsonplaceholder.typicode.com/photos')
        }
      >
        <Route path=':page' element={<Products />} />
        <Route
          path=':productId'
          element={<Product />}
          loader={async ({ params }) => fetch(`${params.productId}`)}
        />
      </Route>
      <Route path='*' element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
