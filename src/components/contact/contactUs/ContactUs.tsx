import { Fragment } from 'react/jsx-runtime';
import { ContactInfo, Form, MapComponent, Socials } from '../..';
import { contact } from '../../../data/data';
import { animationConfig } from '../../../utils/animations';
import { Container, H3, Wrapper } from './styles';

const ContactUs = () => {
  return (
    <Container {...animationConfig}>
      <MapComponent />
      <Wrapper>
        <H3>დაგვიკავშირდით:</H3>

        {contact.map((info) => (
          <Fragment key={info.email}>
            <ContactInfo info={info} />
            <Socials info={info} />
          </Fragment>
        ))}
        <Form />
      </Wrapper>
    </Container>
  );
};
export default ContactUs;
