import { Btn } from './styles';

const Button = ({
  content,
  onClick,
  width = '100%',
}: {
  content: string | number;
  onClick?: () => void;
  width?: string;
}) => {
  return (
    <Btn $width={width} onClick={onClick}>
      {content}
    </Btn>
  );
};
export default Button;
