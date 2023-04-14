import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import './HeroSection.css';

import logo from '../../images/fonislogo-beli.png.3c742637402fce886aa9.webp';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='heroWrapper'>
      <div className='heroContent'>
        <img src={logo} className='homepageLogo' alt='FONIS logo' />
        <h1 className='heroHeading'>Resume Builder</h1>
        <Button
          styleClasses='btn btn-primary'
          onClick={() => navigate('/resume-builder')}
        >
          Isprobajte resume builder!
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
