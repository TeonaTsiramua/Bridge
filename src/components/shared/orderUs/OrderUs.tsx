import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <OrderDiv {...animationConfig}>
      <HeaderDiv>
        <Icons>
          <MainIcon src="/assets/order/document.png" alt="" />
          <FindIcon
            {...searchAnimation}
            src="/assets/order/magnifying-glass.png"
            alt="find"
          />
        </Icons>
        <H2>{t('order.title')}</H2>
        <p>{t('order.description')}</p>
      </HeaderDiv>

      <ButtonDiv>
        {!showForm ? (
          <SendButton
            onClick={() => setShowForm(true)}
            content={t('order.button')}
          />
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
