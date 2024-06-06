import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header, Footer } from './';

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
