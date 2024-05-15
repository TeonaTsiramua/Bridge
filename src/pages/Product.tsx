import { useLoaderData, useNavigate } from 'react-router-dom';
import { PMain } from '../styles/MainStyles';
import { Image } from '../components';

const data = {
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
};

export default function Product() {
  const product = useLoaderData() as typeof data;
  const navigate = useNavigate();

  return (
    <PMain>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>{product.title}</h2>
      </div>

      <Image src={product.url} alt={product.title} />
      <Image src={product.thumbnailUrl} alt={product.title} />
    </PMain>
  );
}
