import { useTranslation } from 'react-i18next';
import { ContactInfo, Form, MapComponent, Socials } from '../..';
import { contact } from '../../../data';
import { animationConfig } from '../../../utils/animations';
import { Collumn, Container, Div, H3, Wrapper } from './styles';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Container {...animationConfig}>
      <Wrapper>
        <MapComponent />
        <Div>
          <H3>{t('contact')}:</H3>
          {contact.map((info) => (
            <Collumn key={info.email}>
              <ContactInfo info={info} />
              <Socials info={info} />
            </Collumn>
          ))}
          <Form />
        </Div>
      </Wrapper>
    </Container>
  );
};
export default ContactUs;
