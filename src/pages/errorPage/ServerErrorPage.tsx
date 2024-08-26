import { Error } from '../../components';

const ServerErrorPage = () => {
  return (
    <Error
      message="Oops! Something went wrong"
      description="Failed to load products. Please try again later."
    />
  );
};
export default ServerErrorPage;
