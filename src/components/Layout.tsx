import { Outlet } from 'react-router-dom';
import Footer from './shared/footer/Footer';
import Header from './shared/header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
