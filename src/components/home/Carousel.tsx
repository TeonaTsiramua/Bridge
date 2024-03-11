import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  Item,
  Wrapper,
  Container,
  Ul,
  ButtonDiv,
} from '../../styles/CarouselStyles';
import ProductCard from '../ProductCard';

interface CarouselProps {
  items: {
    name: string;
    description: string;
    info: string;
  }[];
  visibleItems: number;
  header: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, visibleItems, header }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const totalItems = items.length;

  useEffect(() => {
    const interval = setInterval(goToNextItem, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPrevItem = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
    );
  const goToNextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - visibleItems ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <h2>{header}</h2>
      <Wrapper>
        <Ul
          as={motion.ul}
          ref={containerRef}
          animate={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
          transition={{ duration: 1 }}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              style={{ width: `calc(100% / ${visibleItems} - 0.86rem)` }}
            >
              <ProductCard
                name={item.name}
                description={item.description}
                info={item.info}
              />
            </Item>
          ))}
        </Ul>
      </Wrapper>
      <ButtonDiv>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevItem}
        >
          &lt;
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNextItem}
        >
          &gt;
        </motion.button>
      </ButtonDiv>
    </Container>
  );
};

export default Carousel;
