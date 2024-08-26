import { useTranslation } from 'react-i18next';
import { ContactInfo, Form, Socials } from '../..';
import { contact } from '../../../data';
import { animationConfig } from '../../../utils/animations';
import { Collumn, Container, H3, Wrapper } from './styles';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Container {...animationConfig}>
      <Wrapper>
        <H3>{t('contact')}:</H3>
        {contact.map((info) => (
          <Collumn key={info.email}>
            <ContactInfo info={info} />
            <Socials info={info} />
          </Collumn>
        ))}
      </Wrapper>
      <Form />
    </Container>
  );
};
export default ContactUs;
