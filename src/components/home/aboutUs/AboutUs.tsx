import { animationConfig } from '../../../utils/animations';
import { AboutContainer, Div, H2, Img, P } from './styles';

export default function AboutUs() {
  return (
    <AboutContainer {...animationConfig}>
      <Img
        src='https://dryeffect.com/wp-content/uploads/2021/09/iStock-858309414-scaled.jpg'
        alt=''
      />
      <Div>
        <H2>ჩვენს შესახებ</H2>
        <P>
          ბრიჯი არის კომერციული ავტომობილების, სპეც ტექნიკის, სამაცივრე
          დანადგარებისა და სათადარიგო ნაწილების იმპორტიორი კომპანია. ახალი
          სახელით კომპანია 2024 წელს დაარსდა, თუმცა მისი ისტორია 10 წლის წინ
          იწყება, ამ პერიოდის განმავლობაში მიღებულმა გამოცდილებამ, ქართული
          ბაზრის ტენდეციებზე დაკვირვებამ წარმოშვა იმპორტიორი კომპანიის შექმნის
          იდეა და შესაძლებლობა.
        </P>
      </Div>
    </AboutContainer>
  );
}
