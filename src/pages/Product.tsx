import { useLoaderData, useNavigate } from 'react-router-dom';
import { PMain } from '../styles/MainStyles';
import { Product } from '../interfaces';
// import { Image } from '../components';

export default function ProductPage() {
  const product = useLoaderData() as Product;
  const navigate = useNavigate();

  console.log(product);

  return (
    <PMain>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>{product.title}</h2>
      </div>

      {/* {product.images.map((image) => (
        <Image key={image} src={image} alt={product.title} />
      ))} */}
    </PMain>
  );
}
