import { Error } from '../../components';

const ErrorPage = () => {
  return (
    <Error
      message="Oops! Page Not Found"
      description="Sorry, the page you are looking for does not exist."
    />
  );
};
export default ErrorPage;
