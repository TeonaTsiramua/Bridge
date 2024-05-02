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
  return (
    <Container>
      <Img src={product.url} alt={product.title} />
      <Title>{product.title}</Title>
    </Container>
  );
};
export default ProductCard;
