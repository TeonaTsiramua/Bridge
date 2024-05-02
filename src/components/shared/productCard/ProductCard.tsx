import { Card, CardImg, CardInfo, H3, Hr, P } from './styles';

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
        <H3>{name}</H3>
        <Hr />
        <P>{description}</P>
        <Hr />
        <P>{info}</P>
      </CardInfo>
    </Card>
  );
}
