import bg from '../assets/bg-3.jpg';
import { Card, CardImg, CardInfo } from '../styles/ProductCardStyles';

export default function ProductCard({
  name,
  description,
  info,
}: {
  name: string;
  description: string;
  info: string;
}) {
  return (
    <Card>
      <CardImg src={bg} alt='' />
      <CardInfo>
        <h3>{name}</h3>
        <hr />
        <p>{description}</p>
        <hr />
        <p>{info}</p>
      </CardInfo>
    </Card>
  );
}
