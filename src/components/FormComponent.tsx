import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormDiv,
  FormElement,
  Input,
  StyledForm,
  TextArea,
} from '../styles/FormStyles';

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

  const onSubmit = (data: FormData) => {
    console.log(data);

    setSubmitted(true);
  };

  const resetForm = () => {
    reset();
    setSubmitted(false);
  };

  return (
    <FormDiv>
      {!submitted ? (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormElement>
            <label htmlFor='name'>Name</label>
            <Input
              type='text'
              id='name'
              {...register('name', { required: true })}
              onBlur={() => trigger('name')}
            />
            {errors.name && <span>This field is required</span>}
          </FormElement>

          <FormElement>
            <label htmlFor='email'>Email</label>
            <Input
              type='email'
              id='email'
              {...register('email', { required: true })}
              onBlur={() => trigger('email')}
            />
            {errors.email && <span>This field is required</span>}
          </FormElement>

          <FormElement>
            <label htmlFor='phone'>Phone</label>
            <Input
              type='tel'
              id='phone'
              {...register('phone')}
              onBlur={() => trigger('phone')}
            />
          </FormElement>

          <FormElement>
            <label htmlFor='description'>Description</label>
            <TextArea
              id='description'
              {...register('description')}
              onBlur={() => trigger('description')}
            />
          </FormElement>

          <button type='submit'>Submit</button>
        </StyledForm>
      ) : (
        <div>
          <p>Order Received!</p>
          <button onClick={resetForm}>Order Another</button>
        </div>
      )}
    </FormDiv>
  );
};

export default FormComponent;
