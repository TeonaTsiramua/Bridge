import { useNavigate } from 'react-router-dom';
import { Container, Title, Wrapper } from './styles';
import { Image } from '../..';

const ProductCard = ({
  product,
  primary = true,
}: {
  product: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };
  primary?: boolean;
}) => {
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const handleClick = () => {
    // Navigate to the product page when the card is clicked
    navigate(`/products/product/${product.id}`); // Assuming the URL for the product page is '/product/:id'
  };

  return (
    <Container onClick={handleClick} $primary={primary}>
      <Wrapper $primary={primary}>
        <Image src={product.url} alt={product.title} />
      </Wrapper>
      <Title>{product.title}</Title>
    </Container>
  );
};
export default ProductCard;
