import { useState } from 'react';
import { motion } from 'framer-motion';
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
        as={motion.img}
        initial={{ opacity: 0 }}
        animate={{
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
        onLoad={imageLoaded}
        src={src}
        alt={alt}
      />
    </ImgWrapper>
  );
};
export default Image;
