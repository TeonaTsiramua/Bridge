import Hero from '../components/home/Hero';
import Category from '../components/home/Category';
import NewProducts from '../components/home/NewProducts';
import AboutUs from '../components/home/AboutUs';
import { Main } from '../styles/MainStyles';

function Home() {
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
