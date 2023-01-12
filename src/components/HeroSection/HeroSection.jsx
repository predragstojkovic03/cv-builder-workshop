import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='heroWrapper'>
      <div className='heroContent'>
        <h1 className='heroHeading'>
          Get Started With <br />
          Resume Builder
        </h1>
        <Button
          styleClasses='btn btn-primary'
          onClick={() => navigate('/resume-builder')}
        >
          Try Resume Builder Now!
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
