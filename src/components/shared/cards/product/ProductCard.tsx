import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product } from '../../../../interfaces';
import { useCurrency } from '../../../../hooks';
import { Image, Switch } from '../../..';
import { Container, Div, P, Price, RowDiv, SP, Title, Wrapper } from './styles';

const ProductCard = ({
  product,
  primary = true,
}: {
  product: Product;
  primary?: boolean;
}) => {
  const navigate = useNavigate();
  const { exchangeRate, currency, setCurrency, loading } = useCurrency();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/products/product/${product.id}`);
  };

  const handleSwitchChange = () => {
    setCurrency(currency === 'USD' ? 'GEL' : 'USD');
  };

  const convertedPrice =
    currency === 'USD'
      ? product.price
      : (product.price * exchangeRate).toFixed(0);

  return (
    <Container $primary={primary}>
      <Wrapper onClick={handleClick} $primary={primary}>
        <Image src={product.images[0]} alt={product.title} />
      </Wrapper>
      <Div onClick={handleClick}>
        <Title>
          {product.brand} - {product.model}
        </Title>

        <Div>
          <P>
            {t('filter.category')}: {t(`category.${product.category}`)}
          </P>
          <P>
            {t('filter.year')}: {product?.year}
          </P>
          <P>
            {t('filter.mileage')}: {product?.mileage} km
          </P>
        </Div>

        <RowDiv>
          {product?.axle_configuration && (
            <SP>{product?.axle_configuration}</SP>
          )}
          {product?.fuel_type && <SP>{t(`${product?.fuel_type}`)}</SP>}
        </RowDiv>
      </Div>
      <Price $primary={primary}>
        {loading
          ? '...'
          : currency === 'USD'
          ? `${product.price} $`
          : `${convertedPrice} ₾`}

        <Switch checked={currency === 'GEL'} onChange={handleSwitchChange} />
      </Price>
    </Container>
  );
};

export default ProductCard;
