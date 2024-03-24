import React from 'react';
import { useHistory } from 'react-router-dom';

const ActivityScreen: React.FC = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/FinalRewardScreen'); // Route to the desired destination
    };
    return (
        <div className='background'>
            <div className='back-button'>
                <img src="../../../public/back-button.png" alt="" />
            </div>
            <div className='bananas-collected'>
            </div>
            <div className='banana-icon'></div>
            <div className='select-a-card'>
                <p>Select a Card</p>
            </div>
            <div className='cards-selection'>
                <div className='pink-card-selection'>
                    {/* <img src="../../../public/pink-card.png" alt="" width={173} height={220} /> */}
                    <div className='pink-card'></div>
                    <div className='pink-card'></div>
                    <div className='pink-card'></div>
                    <div className='pink-card'></div>
                    <div className='pink-card'></div>
                    <div className='pink-card'></div>
                </div>
                <div className='blue-card-selection'>
                    <div className='blue-card'></div>
                    <div className='blue-card'></div>
                    <div className='blue-card'></div>
                    <div className='blue-card'></div>
                    <div className='blue-card'></div>
                    <div className='blue-card'></div>
                </div>
            </div>
            <button className='next-button' onClick={handleClick}></button>
        </div>
    );
};

export default ActivityScreen;
