// import { useLoaderData } from 'react-router-dom';

import { AboutUs, Category, Hero, NewProducts, OrderUs } from '../components';
import { Main } from '../styles/MainStyles';

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
