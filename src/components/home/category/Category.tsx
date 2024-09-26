import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { animationConfig, clickAnimation } from '../../../utils/animations';
import { category } from '../../../data';
import { CategoryUl, Container, H2, Img, Li, P } from './styles';

export default function Category() {
  const { t } = useTranslation();

  return (
    <Container {...animationConfig}>
      <H2>
        {t('home.categories')}{' '}
        <span>
          <Link to='/products'>{t('home.seeAll')} →</Link>
        </span>
      </H2>

      <CategoryUl>
        {category.map((i) => (
          <Li key={i.title} to={i.link || ''} {...clickAnimation}>
            <Img src={i.img} alt={i.title} />
            <P>{t(`category.${i.title}`)}</P>
          </Li>
        ))}
      </CategoryUl>
    </Container>
  );
}
