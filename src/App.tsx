import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Products from './pages/Products';

import '@fontsource/firago'; // Defaults to weight 400
import '@fontsource/firago/300.css'; // Specify weight
import '@fontsource/firago/600.css'; // Specify weight and style

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
