import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import { Header, Footer, Loader } from './';

const Layout = () => {
  const navigation = useNavigation();
  return navigation.state === 'loading' ? (
    <Loader />
  ) : (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
