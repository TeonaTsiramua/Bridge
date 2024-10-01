import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../interfaces';
import { opacityAnimation } from '../../utils/animations';
import { Image, MainSpecifications } from '../../components';

import {
  Container,
  Main,
  Modal,
  ModalContent,
  Overlay,
  CloseButton,
  Title,
  Wrapper,
  ArrowButton,
  SliderContainer,
  MainImage,
  Thumbnails,
  Btn,
} from './styles';

export default function ProductPage() {
  const product = useLoaderData() as Product;
  const navigate = useNavigate();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedImage = product.images[selectedImageIndex];

  const handleNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Main as={motion.main} {...opacityAnimation(0.5)}>
      <Wrapper>
        <Btn onClick={() => navigate(-1)}>&#10094;</Btn>
      </Wrapper>

      <Container>
        <SliderContainer>
          <Title>
            {product.brand} - {product.model}
          </Title>
          <MainImage>
            <ArrowButton onClick={handlePrevImage} direction='left'>
              &#10094;
            </ArrowButton>
            <Image
              src={selectedImage}
              alt={`${product.brand} ${product.model}`}
              onClick={openModal}
            />
            <ArrowButton onClick={handleNextImage} direction='right'>
              &#10095;
            </ArrowButton>
          </MainImage>
          <Thumbnails>
            {product.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${product.brand} ${product.model}`}
                onClick={() => handleThumbnailClick(index)}
                className={index === selectedImageIndex ? 'active' : ''}
              />
            ))}
          </Thumbnails>
        </SliderContainer>

        <MainSpecifications product={product} />
      </Container>
      {/* <InfoContent product={product} /> */}

      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <ArrowButton onClick={handlePrevImage} direction='left'>
              &#10094;
            </ArrowButton>
            <ModalContent>
              <Image
                src={selectedImage}
                alt={`${product.brand} ${product.model}`}
              />
            </ModalContent>
            <ArrowButton onClick={handleNextImage} direction='right'>
              &#10095;
            </ArrowButton>
            <CloseButton onClick={closeModal}>✖</CloseButton>
          </Modal>
        </>
      )}
    </Main>
  );
}
