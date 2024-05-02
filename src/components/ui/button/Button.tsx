import { Btn } from './styles';

const Button = ({
  content,
  onClick,
}: {
  content: string | number;
  onClick?: () => void;
}) => {
  return <Btn onClick={onClick}>{content}</Btn>;
};
export default Button;
