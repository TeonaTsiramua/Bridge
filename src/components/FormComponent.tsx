import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormDiv,
  FormElement,
  FormIcon,
  FormIcons,
  Input,
  Message,
  MessageDiv,
  SendingImg,
  StyledForm,
  SubmitButton,
  TextArea,
} from '../styles/FormStyles';
import { motion } from 'framer-motion';
import SendingIcon from '../assets/order/sending.png';
import ReceivedIcon from '../assets/order/received.png';
import PersonIcon from '../assets/form/user.png';
import EmailIcon from '../assets/form/email.png';
import PhoneIcon from '../assets/form/phone-call.png';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  description?: string;
}

const FormComponent: React.FC = () => {
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
          <FormElement
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <label htmlFor='name'>Name *</label>
            <FormIcons>
              <FormIcon src={PersonIcon} alt='' />
            </FormIcons>
            <Input
              type='text'
              id='name'
              placeholder='Your name...'
              {...register('name', { required: true })}
              onBlur={() => trigger('name')}
            />
            {errors.name && <span>This field is required</span>}
          </FormElement>

          <FormElement
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <label htmlFor='email'>Email </label>
            <FormIcons>
              <FormIcon src={EmailIcon} alt='' />
            </FormIcons>
            <Input
              type='email'
              id='email'
              placeholder='Email...'
              {...register('email')}
              onBlur={() => trigger('email')}
            />
          </FormElement>

          <FormElement
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <label htmlFor='phone'>Phone *</label>
            <FormIcons>
              <FormIcon src={PhoneIcon} alt='' />
            </FormIcons>
            <Input
              type='tel'
              id='phone'
              placeholder='Phone number...'
              {...register('phone', { required: true })}
              onBlur={() => trigger('phone')}
            />
            {errors.phone && <span>This field is required</span>}
          </FormElement>

          <FormElement
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <label htmlFor='description'>Description</label>
            <TextArea
              id='description'
              placeholder='Describe product...'
              {...register('description')}
              onBlur={() => trigger('description')}
            />
          </FormElement>

          <SubmitButton
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            type='submit'
          >
            Submit
          </SubmitButton>
        </StyledForm>
      ) : !sending ? (
        <MessageDiv>
          <Message>
            <p>Order Received!</p>
            <SendingImg
              src={ReceivedIcon}
              alt='recieved'
              as={motion.img}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 20 }}
              transition={{ duration: 0.5 }}
            />
          </Message>
          <SubmitButton onClick={resetForm}>Order Another</SubmitButton>
        </MessageDiv>
      ) : (
        <SendingImg
          src={SendingIcon}
          alt='sending'
          as={motion.img}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 80 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      )}
    </FormDiv>
  );
};

export default FormComponent;
