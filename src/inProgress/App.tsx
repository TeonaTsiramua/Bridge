import bridgeLogo from '/assets/main/logo2.svg';
import './App.css';
import './index.css';
import { IconButton, Stack } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

function App() {
  return (
    <>
      <div className="container">
        <img src={bridgeLogo} className="logo" alt="Bridge logo" />

        <div className="gears" id="two-gears">
          <div className="gears-container">
            <div className="gear-rotate"></div>
            <div className="gear-rotate-left"></div>
          </div>
        </div>
        <h1>საიტი მუშავდება...</h1>

        <p>დაგვიკავშირდით:</p>
        <div className="card">
          <a href="mailto:info@bridgetrade.ge">
            <MailIcon sx={{ alignSelf: 'center' }} />
            info@bridgetrade.ge
          </a>
          <a href="tel:+995510000165">
            <PhoneIcon sx={{ alignSelf: 'center' }} />
            +995 510 00 01 65
          </a>
        </div>

        <Stack
          direction="row"
          justifyContent="left"
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            href="https://www.facebook.com/profile.php?id=61557375880995"
            aria-label="Facebook"
            sx={{ alignSelf: 'center', color: '#1877F2' }}
          >
            <FacebookIcon sx={{ fontSize: 42 }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/bridgetrade99/"
            aria-label="Instagram"
            sx={{ alignSelf: 'center', color: '#833AB4' }}
          >
            <InstagramIcon sx={{ fontSize: 42 }} />
          </IconButton>
          <IconButton
            href="https://wa.me/+995510000165"
            aria-label="WhatsApp"
            sx={{ alignSelf: 'center', color: '#25D366' }}
          >
            <WhatsAppIcon sx={{ fontSize: 42 }} />
          </IconButton>
        </Stack>
      </div>
    </>
  );
}

export default App;
