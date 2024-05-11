import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header, Footer } from './';

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
