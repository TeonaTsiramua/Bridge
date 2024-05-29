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
            <Label htmlFor='name'>Name *</Label>
            <FormIcons>
              <FormIcon src='/assets/form/user.png' alt='name' />
            </FormIcons>
            <Input
              type='text'
              id='name'
              placeholder='Your name'
              {...register('name', { required: true })}
              onBlur={() => trigger('name')}
            />
            {errors.name && <span>This field is required</span>}
          </FormElement>

          <FormElement {...opacityAnimation(0.2)}>
            <Label htmlFor='email'>Email </Label>
            <FormIcons>
              <FormIcon src='/assets/form/email.png' alt='email' />
            </FormIcons>
            <Input
              type='email'
              id='email'
              placeholder='Email'
              {...register('email')}
              onBlur={() => trigger('email')}
            />
          </FormElement>

          <FormElement {...opacityAnimation(0.3)}>
            <Label htmlFor='phone'>Phone *</Label>
            <FormIcons>
              <FormIcon src='/assets/form/phone-call.png' alt='phone' />
            </FormIcons>
            <Input
              type='tel'
              id='phone'
              placeholder='Phone number'
              {...register('phone', { required: true })}
              onBlur={() => trigger('phone')}
            />
            {errors.phone && <span>This field is required</span>}
          </FormElement>

          <FormElement {...opacityAnimation(0.4)}>
            <Label htmlFor='description'>Description</Label>
            <TextArea
              id='description'
              placeholder='Describe product'
              {...register('description')}
              onBlur={() => trigger('description')}
            />
          </FormElement>

          <SendButton content='Submit' type='submit' />
        </StyledForm>
      ) : !sending ? (
        <MessageDiv>
          <Message>
            <P>Order Received!</P>
            <SendingImg
              src='/assets/order/received.png'
              alt='recieved'
              {...recieveAnimation}
            />
          </Message>
          <SendButton content='Order Another' onClick={resetForm} />
        </MessageDiv>
      ) : (
        <SendingImg
          src='/assets/order/sending.png'
          alt='sending'
          {...sendAnimation}
        />
      )}
    </FormDiv>
  );
};

export default Form;
