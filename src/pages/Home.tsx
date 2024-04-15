import Hero from '../components/home/hero/Hero';
import Category from '../components/home/category/Category';
import NewProducts from '../components/home/newProducts/NewProducts';
import AboutUs from '../components/home/aboutUs/AboutUs';
import { Main } from '../styles/MainStyles';
import OrderUs from '../components/shared/orderUs/OrderUs';
// import { useLoaderData } from 'react-router-dom';

// interface CompanyInterface {
//   description: string;
//   slogan: string;
//   title: string;
// }

function Home() {
  // const company = useLoaderData() as CompanyInterface;
  // console.log(company);
  return (
    <Main>
      <Hero />
      <Category />
      <AboutUs />
      <NewProducts />
      <OrderUs />
    </Main>
  );
}

export default Home;
