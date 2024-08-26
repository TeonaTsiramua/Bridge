import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  opacityAnimation,
  recieveAnimation,
  sendAnimation,
} from '../../../utils/animations';
import { SendButton } from '../..';

import {
  FormDiv,
  FormElement,
  FormIcon,
  FormIcons,
  Input,
  Label,
  Message,
  MessageDiv,
  P,
  SendingImg,
  StyledForm,
  TextArea,
} from './styles';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  description?: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { t } = useTranslation();

  const onSubmit = (data: FormData) => {
    setSubmitted(true);
    setSending(true);
    setTimeout(() => {
      console.log(data);
      setSending(false);
    }, 2000);
  };

  const resetForm = () => {
    reset();
    setSubmitted(false);
  };

  return (
    <FormDiv>
      {!submitted ? (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormElement {...opacityAnimation(0.1)}>
            <Label htmlFor="name">{t('form.name')} *</Label>
            <FormIcons>
              <FormIcon src="/assets/form/user.png" alt="name" />
            </FormIcons>
            <Input
              type="text"
              id="name"
              placeholder={t('placeholder.name')}
              {...register('name', { required: true })}
              onBlur={() => trigger('name')}
            />
            {errors.name && <span>{t('form.error')}</span>}
          </FormElement>

          <FormElement {...opacityAnimation(0.2)}>
            <Label htmlFor="email">{t('form.email')} </Label>
            <FormIcons>
              <FormIcon src="/assets/form/email.png" alt="email" />
            </FormIcons>
            <Input
              type="email"
              id="email"
              placeholder={t('placeholder.email')}
              {...register('email')}
              onBlur={() => trigger('email')}
            />
          </FormElement>

          <FormElement {...opacityAnimation(0.3)}>
            <Label htmlFor="phone">{t('form.phone')} *</Label>
            <FormIcons>
              <FormIcon src="/assets/form/phone-call.png" alt="phone" />
            </FormIcons>
            <Input
              type="tel"
              id="phone"
              placeholder={t('placeholder.phone')}
              {...register('phone', { required: true })}
              onBlur={() => trigger('phone')}
            />
            {errors.phone && <span>{t('form.error')}</span>}
          </FormElement>

          <FormElement {...opacityAnimation(0.4)}>
            <Label htmlFor="description">{t('form.description')}</Label>
            <TextArea
              id="description"
              placeholder={t('placeholder.description')}
              {...register('description')}
              onBlur={() => trigger('description')}
            />
          </FormElement>

          <SendButton content={t('form.submit')} type="submit" />
        </StyledForm>
      ) : !sending ? (
        <MessageDiv>
          <Message>
            <P>{t('order.success')}</P>
            <SendingImg
              src="/assets/order/received.png"
              alt="recieved"
              {...recieveAnimation}
            />
          </Message>
          <SendButton content={t('order.another')} onClick={resetForm} />
        </MessageDiv>
      ) : (
        <SendingImg
          src="/assets/order/sending.png"
          alt="sending"
          {...sendAnimation}
        />
      )}
    </FormDiv>
  );
};

export default Form;
