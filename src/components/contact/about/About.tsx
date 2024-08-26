import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { opacityAnimation } from '../../../utils/animations';
import { Description, Container, Title, Wrapper, Img } from './styles';

const About = () => {
  const { t } = useTranslation();
  return (
    <Container {...opacityAnimation()}>
      <Title>{t('about')}</Title>

      <Wrapper>
        <Description
          as={motion.div}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, bounce: 0.4 }}
        >
          <p>{t('about.description1')}</p>
          <p>{t('about.description2')}</p>
        </Description>
        <Img
          as={motion.img}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, bounce: 0.4 }}
          src="/assets/posts/post1.jpg"
          alt="post"
        />
      </Wrapper>

      <Wrapper>
        <Img
          as={motion.img}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, bounce: 0.4 }}
          src="/assets/posts/post2.jpg"
          alt="post"
        />
        <Description
          as={motion.div}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, bounce: 0.4 }}
        >
          <p>{t('about.description3')}</p>
          <p>{t('about.description4')}</p>
        </Description>
      </Wrapper>
    </Container>
  );
};
export default About;
