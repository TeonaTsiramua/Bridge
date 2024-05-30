import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { CarouselCard } from '../..';
import { clickAnimation } from '../../../utils/animations';

import { Item, Wrapper, Container, Ul, ButtonDiv, H2, SButton } from './styles';

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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - visibleItems : prevIndex - 1
      );
      setTimeout(() => setIsButtonDisabled(false), 1000); // Re-enable button after 1 second
    }
  };

  const goToNextItem = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - visibleItems ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsButtonDisabled(false), 1000); // Re-enable button after 1 second
    }
  };

  const handleInteractionStart = () => setIsInteracting(true);
  const handleInteractionEnd = () => setIsInteracting(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex !== items.length - visibleItems) {
        goToNextItem();
        setIsInteracting(true);
        setTimeout(() => setIsInteracting(false), 1000);
      }
    },
    onSwipedRight: () => {
      if (currentIndex !== 0) {
        goToPrevItem();
        setIsInteracting(true);
        setTimeout(() => setIsInteracting(false), 1000);
      }
    },
  });

  return (
    <Container
      {...handlers}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
    >
      <H2>{header}</H2>
      <Wrapper>
        <Ul
          animate={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
          transition={{ duration: 1 }}
        >
          {items.map((item) => (
            <Item
              key={item.name}
              style={{ width: `calc(100% / ${visibleItems} - 0.86rem)` }}
            >
              <CarouselCard
                name={item.name}
                description={item.description}
                info={item.info}
              />
            </Item>
          ))}
        </Ul>
      </Wrapper>
      <ButtonDiv>
        <SButton {...clickAnimation} onClick={goToPrevItem}>
          &lt;
        </SButton>
        <SButton {...clickAnimation} onClick={goToNextItem}>
          &gt;
        </SButton>
      </ButtonDiv>
    </Container>
  );
};

export default Carousel;
