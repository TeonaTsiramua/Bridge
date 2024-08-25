import { useNavigate } from 'react-router-dom';
import { Product } from '../../../interfaces';
import { Container, Title, Wrapper } from './styles';
import { Image } from '../..';

const ProductCard = ({
  product,
  primary = true,
}: {
  product: Product;
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
        <Image src={product.images[0]} alt={product.title} />
      </Wrapper>
      <Title>
        {product.brand} - {product.model}
      </Title>
    </Container>
  );
};
export default ProductCard;
