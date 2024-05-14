import { useNavigate } from 'react-router-dom';
import { Container, Img, Title } from './styles';

const ProductCard = ({
  product,
}: {
  product: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };
}) => {
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const handleClick = () => {
    // Navigate to the product page when the card is clicked
    navigate(`/products/product/${product.id}`); // Assuming the URL for the product page is '/product/:id'
  };

  return (
    <Container onClick={handleClick}>
      <Img src={product.url} alt={product.title} />
      <Title>{product.title}</Title>
    </Container>
  );
};
export default ProductCard;
