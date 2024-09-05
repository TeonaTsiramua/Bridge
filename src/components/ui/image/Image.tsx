import { useState } from 'react';
import { loadingAnimation } from '../../../utils/animations';
import { Img, ImgWrapper } from './styles';

const Image = ({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setPulsing(false);
  };
  return (
    <ImgWrapper $pulsing={pulsing} onClick={onClick}>
      <Img
        {...loadingAnimation}
        animate={{
          opacity: imageLoading ? 0 : 1,
        }}
        onLoad={imageLoaded}
        src={src}
        alt={alt}
      />
    </ImgWrapper>
  );
};
export default Image;
