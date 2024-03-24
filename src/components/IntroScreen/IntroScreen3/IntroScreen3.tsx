import React from 'react';
import { useHistory } from 'react-router-dom';

const IntroScreen3: React.FC = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/IntructionScreeen'); // Route to the desired destination
    };
    return (
        <div className='background'>
            <div className='back-button'>
                <img src="../../../public/back-button.png" alt="" />
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
                <img src="../../public/monkey-image.png" alt="" />
            </div>
            <button className='yes-button' onClick={handleClick}>
                {/* <img src="../../public/start-button.png" alt="" /> */}
            </button>
        </div>
    );
};

export default IntroScreen3;
