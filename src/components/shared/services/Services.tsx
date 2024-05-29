import { services } from '../../../data/data';
import { animationConfig } from '../../../utils/animations';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, H2 } from './styles';

const Services = () => {
  return (
    <Container {...animationConfig}>
      <H2>ჩვენს მიერ შეთავაზებული სერვისები</H2>
      {services.map((service) => (
        <Accordion
          key={service.title}
          sx={{
            background: 'transparent',
            border: '1px solid hsl(var(--clr-light),0.3)',
            boxShadow: 'none',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: 'hsl(var(--clr-light))' }} />
            }
            aria-controls='panel-content'
            id='panel-header'
            sx={{ color: 'hsl(var(--clr-light))' }}
          >
            {service.title}
          </AccordionSummary>

          <AccordionDetails
            sx={{ color: 'hsl(var(--clr-light))', fontWeight: '300' }}
          >
            {service.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
export default Services;
