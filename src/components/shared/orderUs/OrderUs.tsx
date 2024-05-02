import { useState } from 'react';
import { motion } from 'framer-motion';

import { Form, SendButton } from '../..';

import {
  BackButton,
  ButtonDiv,
  FindIcon,
  HeaderDiv,
  Icons,
  MainIcon,
  OrderDiv,
} from './styles';

export default function OrderUs() {
  const [showForm, setShowForm] = useState(false);

  return (
    <OrderDiv
      as={motion.div}
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ bounce: 0.4, duration: 0.8 }}
    >
      <HeaderDiv>
        <Icons>
          <MainIcon src='/assets/order/document.png' alt='' />
          <FindIcon
            as={motion.img}
            initial={{ x: 0, y: 0 }}
            whileInView={{
              x: [25, 0, -25, 0, 25],
              y: [0, 25, 0, -25, 0],
              transition: { repeat: 1, duration: 3, ease: 'linear' },
            }}
            src='/assets/order/magnifying-glass.png'
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
          <SendButton onClick={() => setShowForm(true)} content='Order Us' />
        ) : (
          <>
            <BackButton onClick={() => setShowForm(false)}> &larr;</BackButton>
            <Form />
          </>
        )}
      </ButtonDiv>
    </OrderDiv>
  );
}
