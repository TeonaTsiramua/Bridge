import { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Layout, Loader } from './components';

const Products = lazy(() => import('./pages/products/Products'));
const Product = lazy(() => import('./pages/Product'));
import { Contact, ErrorPage, Home, ServerErrorPage } from './pages';

const API = process.env.REACT_APP_API;

const productsLoader = async () => {
  try {
    const response = await fetch(`${API}/test-product-route`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Response('Failed to load products', { status: 502 });
  }
};

export const router = createBrowserRouter(
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
        loader={productsLoader}
        errorElement={<ServerErrorPage />}
      ></Route>
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
