import { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Layout, Loader } from './components';

const Products = lazy(() => import('./pages/products/Products'));
const Product = lazy(() => import('./pages/product/Product'));
import { Contact, ErrorPage, Home, ServerErrorPage } from './pages';

const API = process.env.REACT_APP_API;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home />}
        loader={async () => fetch(`${API}/test-product-route`)}
      />
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
        errorElement={<ServerErrorPage />}
      />
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
