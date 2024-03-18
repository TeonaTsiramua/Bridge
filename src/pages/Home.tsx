import Hero from '../components/home/Hero';
import Category from '../components/home/Category';
import NewProducts from '../components/home/NewProducts';
import AboutUs from '../components/home/AboutUs';
import { Main } from '../styles/MainStyles';
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
      <NewProducts />
      <AboutUs />
    </Main>
  );
}

export default Home;
