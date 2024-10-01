import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DownArrow, Switch } from '../..';
import { useCurrency } from '../../../hooks';
import { Product } from '../../../interfaces';
import { clickAnimation } from '../../../utils/animations';
import { Btn, Container, Div, P, Title, Wrapper } from './styles';

const MainSpecifications = ({ product }: { product: Product }) => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();
  const { exchangeRate, currency, setCurrency, loading } = useCurrency();
  const elementRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    setShowMore(true);
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowLess = () => {
    setShowMore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchChange = () => {
    setCurrency(currency === 'USD' ? 'GEL' : 'USD');
  };

  const convertedPrice =
    currency === 'USD'
      ? product.price
      : (product.price * exchangeRate).toFixed(0);

  return (
    <Container>
      <Title>ძირითადი მახასიათებლები</Title>
      <Wrapper>
        <Div>
          <P>{t('filter.price')}</P>{' '}
          <div>
            {loading
              ? '...'
              : currency === 'USD'
              ? `${product.price} $`
              : `${convertedPrice} ₾`}
            <Switch
              checked={currency === 'GEL'}
              onChange={handleSwitchChange}
            />
          </div>
        </Div>
        <Div>
          <P>{t('filter.category')}</P>
          {t(`category.${product.category}`)}
        </Div>
        <Div>
          <P>{t('filter.brand')}</P>
          {product.brand}
        </Div>
        <Div ref={elementRef}>
          <P>{t('filter.model')}</P>
          {product.model}
        </Div>

        <Div>
          <P>{t('filter.year')}</P>
          {product.year || '-'}
        </Div>
        <Div>
          <P>{t('filter.mileage')}</P>
          {product.mileage ? `${product.mileage} km` : '-'}
        </Div>
        <Div>
          <P>{t('filter.fuel')}</P>
          {t(`${product?.fuel_type || '-'}`)}
        </Div>
        <Div>
          <P>{t('filter.transmission')}</P>
          {t(`${product?.transmission || '-'}`)}
        </Div>
        <Div>
          <P>{t('filter.axle')}</P>
          {product?.axle_configuration || '-'}
        </Div>
        <Div>
          <P>{t('filter.displacement')}: </P>
          {product.displacement ? `${product.displacement} cm³ ` : '-'}
        </Div>

        {showMore && (
          <>
            <Div>
              <P>{t('filter.engineOutput')}: </P>
              {product.engine_output ? `${product.engine_output} hp ` : '-'}
            </Div>
            <Div>
              <P>{t('filter.cylinders')}: </P>
              {product?.cylinders || '-'}
            </Div>
            <Div>
              <P>{t('filter.wheel')}: </P>
              {product.wheel_diameter ? `${product.wheel_diameter} inch ` : '-'}
            </Div>
            <Div>
              <P>{t('filter.gross')}: </P>
              {product.gross ? `${product.gross} kg ` : '-'}
            </Div>
            <Div>
              <P>{t('filter.load')}: </P>
              {product.load_capacity ? `${product.load_capacity} kg ` : '-'}
            </Div>
            <Div>
              <P>{t('filter.emission')}: </P>
              {product?.emission_class || '-'}
            </Div>
          </>
        )}
      </Wrapper>
      {!showMore ? (
        <Btn onClick={handleShowMore} {...clickAnimation}>
          სრულად ნახვა <DownArrow showSection={showMore} />
        </Btn>
      ) : (
        <Btn onClick={handleShowLess} {...clickAnimation}>
          დახურვა <DownArrow showSection={showMore} />
        </Btn>
      )}
    </Container>
  );
};
export default MainSpecifications;
