import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { StyledFooter, StLink, Logo, Wrapper, Hr, Ul, P, H3 } from './styles';

import { contact, navData } from '../../../data';
import { ContactInfo, Socials } from '../..';

function Footer() {
  const { t } = useTranslation();
  return contact.map((info) => (
    <StyledFooter key={info.email}>
      <Wrapper>
        <Link to="/">
          <Logo src="/assets/main/logo1.svg" alt="logo" />
        </Link>
        <Ul>
          <H3>{t('nav')}</H3>
          {navData.map((item) => (
            <StLink key={item.path} to={item.path}>
              {t(`nav.${item.text}`)}
            </StLink>
          ))}
        </Ul>

        <Ul>
          <H3>{t('contact')}</H3>
          <ContactInfo info={info} />
        </Ul>
      </Wrapper>

      <Hr />

      <Wrapper>
        <P>
          {'Copyright © '}
          <StLink to="/">Bridge </StLink>
          {new Date().getFullYear()}
        </P>
        <Socials info={info} />
      </Wrapper>
    </StyledFooter>
  ));
}

export default Footer;
