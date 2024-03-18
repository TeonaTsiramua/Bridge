import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Item,
  Wrapper,
  Container,
  Ul,
  ButtonDiv,
} from '../../styles/CarouselStyles';
import ProductCard from '../ProductCard';
import { useSwipeable } from 'react-swipeable';

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
  const [isInteracting, setIsInteracting] = useState(false);
  const totalItems = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInteracting) {
        goToNextItem();
      }
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInteracting]);

  const goToPrevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - visibleItems : prevIndex - 1
    );
  };

  const goToNextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - visibleItems ? 0 : prevIndex + 1
    );
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex !== totalItems - visibleItems) {
        goToNextItem();
      }
    },
    onSwipedRight: () => {
      if (currentIndex !== 0) {
        goToPrevItem();
      }
    },
  });

  return (
    <Container
      {...handlers}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
    >
      <h2>{header}</h2>
      <Wrapper>
        <Ul
          as={motion.ul}
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
