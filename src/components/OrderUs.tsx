import { useState } from 'react';
import { motion } from 'framer-motion';
import FormComponent from './FormComponent';
import {
  BackButton,
  Button,
  ButtonDiv,
  FindIcon,
  HeaderDiv,
  Icons,
  MainIcon,
  OrderDiv,
  SendIcon,
} from '../styles/FormStyles';
import mainIcon from '../assets/order/document.png';
import findIcon from '../assets/order/magnifying-glass.png';
import sendIcon from '../assets/order/send.png';

export default function OrderUs() {
  const [showForm, setShowForm] = useState(false);
  return (
    <OrderDiv
      as={motion.div}
      initial={{ y: '30%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <HeaderDiv>
        <Icons>
          <MainIcon src={mainIcon} alt='' />
          <FindIcon
            as={motion.img}
            initial={{ x: -50, y: -100 }}
            whileInView={{
              x: [25, 0, -25, 0, 25],
              y: [0, 25, 0, -25, 0],
              transition: { repeat: 2, duration: 5, ease: 'linear' },
            }}
            src={findIcon}
            alt='find'
          />
        </Icons>
        <h2>Couldn't find what you are looking for?</h2>
        <p>
          Order us any kind of heavy vehicle, our representative will contact
          you within 24 hours.{' '}
        </p>
      </HeaderDiv>

      <ButtonDiv>
        {!showForm ? (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowForm(true)}
          >
            {' '}
            <span>
              <SendIcon src={sendIcon} alt='send' /> Order Us
            </span>
          </Button>
        ) : (
          <>
            <BackButton onClick={() => setShowForm(false)}>🡨</BackButton>
            <FormComponent />
          </>
        )}
      </ButtonDiv>
    </OrderDiv>
  );
}
