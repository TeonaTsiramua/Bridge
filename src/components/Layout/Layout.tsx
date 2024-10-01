import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import { Header, Footer, Loader } from '..';
import { BottomOverlay, TopOverlay } from './styles';

const Layout = () => {
  const navigation = useNavigation();

  const loading = navigation.state === 'loading';

  return loading ? (
    <Loader />
  ) : (
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
