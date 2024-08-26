import { useNavigate } from 'react-router-dom';
import {
  BackButton,
  ErrorContainer,
  ErrorDescription,
  ErrorMessage,
} from './styles';

const Error = ({
  message,
  description,
}: {
  message: string;
  description: string;
}) => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <ErrorContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ErrorMessage
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </ErrorMessage>
      <ErrorDescription
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </ErrorDescription>
      <BackButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBackHome}
      >
        Back to Home
      </BackButton>
    </ErrorContainer>
  );
};

export default Error;
