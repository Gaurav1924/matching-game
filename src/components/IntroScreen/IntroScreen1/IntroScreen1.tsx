import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroScreen1: React.FC = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/IntroScreen2'); // Route to the desired destination
  };
  return (
    <div className='background'>
      <div className='message-box'>
        <div className='message-desc'>Welcome Kiddo!</div>
      </div>
      <div>
        <img src="../../public/back-button.png" alt="" />
      </div>
      <div className='monkey-pos'>
        <img src="../../public/monkey-image.png" alt="" />
      </div>
      <button className='next-button' onClick={handleClick}>
        {/* <img src="../../public/start-button.png" alt="" /> */}
      </button>
    </div>
  );
};

export default IntroScreen1;
