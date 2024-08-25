import { Suspense, lazy } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import { Layout, Loader } from './components';

const Products = lazy(() => import('./pages/products/Products'));
const Product = lazy(() => import('./pages/Product'));
import { Contact, ErrorPage, Home } from './pages';

const API = process.env.REACT_APP_API;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="products"
        element={
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        }
        loader={async () => fetch(`${API}/test-product-route`)}
      >
        {/* <Route path="page/:page" element={<Products />} /> */}
      </Route>
      <Route
        path="products/product/:id"
        element={
          <Suspense fallback={<Loader />}>
            <Product />
          </Suspense>
        }
        loader={async ({ params }) =>
          fetch(`${API}/test-product-route/${params.id}`)
        }
      />
      <Route path="*" element={<ErrorPage />} />
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
