import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header, Footer } from '..';
import { BottomOverlay, TopOverlay } from './styles';

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
      <TopOverlay />
      <BottomOverlay />
    </>
  );
};
export default Layout;
