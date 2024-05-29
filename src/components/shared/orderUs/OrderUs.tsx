import { useState } from 'react';

import { Form, SendButton } from '../..';
import { animationConfig, searchAnimation } from '../../../utils/animations';

import {
  BackButton,
  ButtonDiv,
  FindIcon,
  H2,
  HeaderDiv,
  Icons,
  MainIcon,
  OrderDiv,
} from './styles';

export default function OrderUs() {
  const [showForm, setShowForm] = useState(false);

  return (
    <OrderDiv {...animationConfig}>
      <HeaderDiv>
        <Icons>
          <MainIcon src='/assets/order/document.png' alt='' />
          <FindIcon
            {...searchAnimation}
            src='/assets/order/magnifying-glass.png'
            alt='find'
          />
        </Icons>
        <H2>Couldn't find what you are looking for?</H2>
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
