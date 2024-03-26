import React from 'react';
import { useNavigate } from 'react-router-dom';
const IntructionScreen: React.FC = () => {
    const history = useNavigate();

    const handleClick = () => {
        history('/ActivityScreen'); // Route to the desired destination
    };
    return (
        <div className='background'>
            <div className='back-button'>
                <img src="../../../public/back-button.png" alt="" />
            </div>
            <div className='bananas-collected'>
            </div>
            <div className='banana-icon'></div>
            <div className='instructions'>
                <div className='instruction'>
                    <img src="../../../public/pink-card.png" alt="" width='250px' height="338px" />
                    <div className='step'>Select a <br /> pink card</div>
                    <p className='what-it-has'>It has images</p>
                </div>
                <div className='instruction'>
                    <img src="../../../public/pink-card.png" alt="" width='250px' height="338px" />
                    <div className='step'>Select a <br /> blue card</div>
                    <p className='what-it-has'>It has Alphabets</p>
                </div>
                <div className='instruction'></div>
            </div>
            <button className='yes-button' onClick={handleClick}>
                {/* <img src="../../public/start-button.png" alt="" /> */}
            </button>
        </div>
    );
};

export default IntructionScreen;
