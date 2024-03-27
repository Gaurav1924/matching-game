import React from 'react';
import { useNavigate } from 'react-router-dom';
import pinkCard from '../../assets/pink-card.png';
import blueCard from '../../assets/blue-card.png';
import bothCards from '../../assets/bothCards.png';
const IntructionScreen: React.FC = () => {
    const history = useNavigate();

    const handleClick = () => {
        history('/ActivityScreen'); // Route to the desired destination
    };
    const backClick = () => {
        history('/IntroScreen3');
    };
    return (
        <div className='background'>
            <div className='back-button' onClick={backClick}>
                <img src="../../../public/back-button.png" alt="" />
            </div>
            <div className='bananas-collected'>
            </div>
            <div className='banana-icon'></div>
            <div className='instructions'>
                <div className='instruction'>
                    <img src={pinkCard} alt="" width='150px' height="200px" />
                    <div className='step'>Select a <br /> pink card</div>
                    <p className='what-it-has'>It has images</p>
                </div>
                <div className='instruction'>
                    <img src={blueCard} alt="" width='150px' height="200px" />
                    <div className='step'>Select a <br /> blue card</div>
                    <p className='what-it-has'>It has Alphabets</p>
                </div>
                <div className='instruction'>
                    <img src={bothCards} alt="" width='150px' height="200px" />
                    <p className='what-it-has'>If they are same</p>
                    <div className='step'>Its a match!</div>
                    <p className='what-it-has'>Otherwise retry :</p>
                </div>
            </div>
            <button className='yes-button' onClick={handleClick}>
                {/* <img src="../../public/start-button.png" alt="" /> */}
            </button>
        </div>
    );
};

export default IntructionScreen;
