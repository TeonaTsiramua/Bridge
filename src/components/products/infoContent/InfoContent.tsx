import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../../hooks';
import { Product } from '../../../interfaces';
import { Switch } from '../..';
import { H3, InfoContainer, Info } from './styles';

const InfoContent = ({ product }: { product: Product }) => {
  const { t } = useTranslation();
  const { exchangeRate, currency, setCurrency, loading } = useCurrency();
  const handleSwitchChange = () => {
    setCurrency(currency === 'USD' ? 'GEL' : 'USD');
  };

  const convertedPrice =
    currency === 'USD'
      ? product.price
      : (product.price * exchangeRate).toFixed(0);

  return (
    <>
      <InfoContainer>
        <H3>ძირითადი მახასიათებლები</H3>
        <Info>
          <p>{t('filter.price')}: </p>{' '}
          {loading
            ? '...'
            : currency === 'USD'
            ? `${product.price} $`
            : `${convertedPrice} ₾`}
          <Switch checked={currency === 'GEL'} onChange={handleSwitchChange} />
        </Info>
        <Info>
          <p>{t('filter.brand')}: </p>
          {product.brand}
        </Info>
        <Info>
          <p>{t('filter.model')}: </p>
          {product.model}
        </Info>
        <Info>
          <p>{t('filter.category')}: </p>
          {t(`category.${product.category}`)}
        </Info>
        <Info>
          <p>{t('filter.year')}: </p>
          {product.year || '-'}
        </Info>
        <Info>
          <p>{t('filter.mileage')}: </p>
          {product.mileage ? `${product.mileage} km` : '-'}
        </Info>
        <Info>
          <p>{t('filter.fuel')}: </p>
          {t(`${product?.fuel_type || '-'}`)}
        </Info>
        <Info>
          <p>{t('filter.displacement')}: </p>
          {product.displacement ? `${product.displacement} cm³ ` : '-'}
        </Info>
        <Info>
          <p>{t('filter.engineOutput')}: </p>
          {product.engine_output ? `${product.engine_output} hp ` : '-'}
        </Info>
        <Info>
          <p>{t('filter.cylinders')}: </p>
          {product?.cylinders || '-'}
        </Info>
        <Info>
          <p>{t('filter.transmission')}: </p>
          {t(`${product?.transmission || '-'}`)}
        </Info>
        <Info>
          <p>{t('filter.wheel')}: </p>
          {product.wheel_diameter ? `${product.wheel_diameter} inch ` : '-'}
        </Info>
        <Info>
          <p>{t('filter.gross')}: </p>
          {product.gross ? `${product.gross} kg ` : '-'}
        </Info>
        <Info>
          <p>{t('filter.load')}: </p>
          {product.load_capacity ? `${product.load_capacity} kg ` : '-'}
        </Info>
        <Info>
          <p>{t('filter.emission')}: </p>
          {product?.emission_class || '-'}
        </Info>
        <Info>
          <p>{t('filter.axle')}: </p>
          {product?.axle_configuration || '-'}
        </Info>
      </InfoContainer>
      <div>{/* <p>{product.description}</p> */}</div>
    </>
  );
};
export default InfoContent;
