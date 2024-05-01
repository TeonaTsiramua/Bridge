import { ReactNode, useState } from 'react';
import { P } from './styles';
import DownArrow from '../downArrow/DownArrow';

interface DropDownProps {
  children: ReactNode;
  title: string;
  open?: boolean;
}

const DropDown = ({ children, title, open = false }: DropDownProps) => {
  const [show, setShow] = useState(open);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <P onClick={() => toggleShow()}>
        {title} <DownArrow showSection={show} />
      </P>
      {show && children}
    </>
  );
};
export default DropDown;
