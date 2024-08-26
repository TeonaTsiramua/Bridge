import { useTranslation } from 'react-i18next';
import { handleMarkerClick } from '../../../utils/index';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { A, Wrapper } from './styles';
import { Props } from '../../../interfaces';

const ContactInfo = ({ info }: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <A href={`mailto:${info.email}`}>
        <MailIcon sx={{ alignSelf: 'center', fontSize: '20px' }} /> {info.email}
      </A>
      <A href={`tel:${info.phone}`}>
        <PhoneIcon sx={{ alignSelf: 'center', fontSize: '20px' }} />
        {info.phone}
      </A>
      <A onClick={handleMarkerClick}>
        <LocationOnIcon sx={{ alignSelf: 'center', fontSize: '20px' }} />
        {t(`${info.address}`)}
      </A>
    </Wrapper>
  );
};
export default ContactInfo;
