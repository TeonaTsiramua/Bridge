import { useState } from 'react';
import { loadingAnimation } from '../../../utils/animations';
import { Img, ImgWrapper } from './styles';

const Image = ({ src, alt }: { src: string; alt: string }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setPulsing(false);
  };
  return (
    <ImgWrapper $pulsing={pulsing}>
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
