import { Card, CardImg, CardInfo } from './styles';

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
      <CardImg src='/assets/main/bg-3.jpg' alt='' />
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
