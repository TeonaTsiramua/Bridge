import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BackButton,
  ErrorContainer,
  ErrorDescription,
  ErrorMessage,
} from './styles';

const ErrorPage: React.FC = () => {
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
        Oops! Page Not Found
      </ErrorMessage>
      <ErrorDescription
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Sorry, the page you are looking for does not exist.
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

export default ErrorPage;
