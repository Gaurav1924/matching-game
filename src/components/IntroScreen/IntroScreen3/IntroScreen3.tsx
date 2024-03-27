import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroScreen3: React.FC = () => {
    const history = useNavigate();

    const handleClick = () => {
        history('/IntructionScreen'); // Route to the desired destination
    };
    const backClick = () => {
        history('/IntroScreen2');
    };
    return (
        <div className='background'>
            <div className='back-button' onClick={backClick}>
            </div>
            <div className='bananas-collected'>
            </div>
            <div className='banana-icon'></div>
            <div className='message-box'>
                <div className='message-desc'>
                    Can you help me get some ?
                </div>
            </div>
            <div className='monkey-pos'>
            </div>
            <button className='yes-button' onClick={handleClick}>
                {/* <img src="../../public/start-button.png" alt="" /> */}
            </button>
        </div>
    );
};

export default IntroScreen3;
