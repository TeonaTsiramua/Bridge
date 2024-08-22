import { motion } from 'framer-motion';
import { opacityAnimation } from '../../../utils/animations';
import { Description, Container, Title, Wrapper, Img } from './styles';

const About = () => {
  return (
    <Container {...opacityAnimation()}>
      <Title>ჩვენს შესახებ</Title>

      <Wrapper>
        <Description
          as={motion.div}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, bounce: 0.4 }}>
          <p>
            ბრიჯი არის კომერციული ავტომობილების, სპეც ტექნიკის, სამაცივრე
            დანადგარებისა და სათადარიგო ნაწილების იმპორტიორი კომპანია. ახალი
            სახელით კომპანია 2024 წელს დაარსდა, თუმცა მისი ისტორია 10 წლის წინ
            იწყება, ამ პერიოდის განმავლობაში მიღებულმა გამოცდილებამ, ქართული
            ბაზრის ტენდეციებზე დაკვირვებამ წარმოშვა იმპორტიორი კომპანიის შექმნის
            იდეა და შესაძლებლობა.
          </p>

          <p>
            ბრიჯის საქმიანობა მოიცავს როგორც ამიერკავკასიის ასევე თურქეთის,
            ცენტრალური და აღმოსავლეთ ევროპისა და ჩინეთის ბაზრებს. ჩვენ
            მომხმარებელს ვთავაზობთ ნებისმიერი ტიპის და დანიშნულების მსუბუქი
            კომერციული ტრანსპორტის, სატვირთო ავტომობილების, ზამთრისა და ზაფხულის
            ტექნიკის, სამშენებლო და სხვა სპეციალიზებული ტექნიკის იმპორტს,
            უმოკლეს ვადებში, განვადებით და სრული გარანტიით.
          </p>
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
          transition={{ duration: 1, bounce: 0.4 }}>
          <p>
            ბრიჯი არის კომერციული და სატვირთო ავტომობილების სათადარიგო ნაწილების
            იმპორტიორი საქართველოში. მიმდინარე წელს გავაფორმეთ ექსკლუზიური
            ხელშეკრულება სამაცივრე დანადგარების მწარმოებელ ერთ-ერთ უმსხვილეს,
            ჩინურ კომპანიასთან „Guchen Thermo” რაც შესაძლებლობას გვაძლევს,
            ინდივიდუალურად ტემპერატურული რეჟიმის მოთხოვნის მიხედვით შევარჩიოთ და
            გარანტიით დავამონტაჟოთ სამაცივრე აგრეგატები ნებისმიერი ტიპის
            სატვირთო თუ მსუბუქ კომერციულ ტრანსპორტზე.
          </p>

          <p>
            ჩვენი მოღვაწეობა ეფუძნება ჩვენი საქმიანობის მანძილზე დამყარებული
            ურთიერთობებით და გამოცდილებით შევქმნათ მომსახურების უმაღლესი
            სტანდარტი, რომელიც კლიენტებთან, პარტნიორებთან და პერსონალთან
            გრძელვადიანი თანამშრომლობის პრინციპებზე იქნება დამყარებული.
          </p>
        </Description>
      </Wrapper>
    </Container>
  );
};
export default About;
