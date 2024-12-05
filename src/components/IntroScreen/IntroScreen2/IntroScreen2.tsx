import React from 'react';
import { useNavigate } from 'react-router-dom';
const IntroScreen2: React.FC = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/IntroScreen3'); // Route to the desired destination
  };
  const backClick = () => {
    history('/IntroScreen1');
  };
  return (
    <div className='background'>
      <div className='back-button' onClick={backClick}>
      </div>
      <div className='message-box'>
        <div className='message-desc'>
          Hi , I am Mizo !<br />
          and I love bananas
        </div>
      </div>
      <div className='monkey-pos'>
      </div>
      <button className='next-button' onClick={handleClick}>
        {/* <img src="../../public/start-button.png" alt="" /> */}
      </button>
    </div>
  );
};

export default IntroScreen2;
