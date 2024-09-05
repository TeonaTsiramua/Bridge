import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigation,
} from 'react-router-dom';
import { Header, Footer, Loader } from '..';
import { BottomOverlay, TopOverlay } from './styles';

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();

  const loading = navigation.state === 'loading';
  const isProductPage = location.pathname === '/products';

  return (
    <>
      <ScrollRestoration />
      <Header />
      {loading && !isProductPage ? <Loader /> : <Outlet />}
      <Footer />
      <TopOverlay />
      <BottomOverlay />
    </>
  );
};
export default Layout;
