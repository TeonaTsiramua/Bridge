import { ContactInfo, Form, Socials } from '../..';
import { contact } from '../../../data/data';
import { animationConfig } from '../../../utils/animations';
import { Collumn, Container, H3, Wrapper } from './styles';

const ContactUs = () => {
  return (
    <Container {...animationConfig}>
      <Wrapper>
        <H3>დაგვიკავშირდით:</H3>
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
