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
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(goToNextItem, 10000);
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

  const handleTouchStart = (event: React.TouchEvent<HTMLUListElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLUListElement>) => {
    if (touchStartX.current !== null) {
      const touchEndX = event.touches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;
      const sensitivity = 50; // Adjust sensitivity as needed

      if (deltaX > sensitivity) {
        goToPrevItem();
      } else if (deltaX < -sensitivity) {
        goToNextItem();
      }

      touchStartX.current = null;
    }
  };

  return (
    <Container>
      <h2>{header}</h2>
      <Wrapper>
        <Ul
          ref={containerRef}
          visibleItems={visibleItems}
          totalItems={totalItems}
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {items.map((item, index) => (
            <Item visibleItems={visibleItems} key={index}>
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
