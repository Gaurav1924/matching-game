import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityScreen: React.FC = () => {
    const [leftCard, setLeftCard] = useState([
        {
            value: "Apple",
            imageUrl: "",
        },
        {
            value: "Grapes",
            imageUrl: "",
        },
        {
            value: "Mango",
            imageUrl: "",
        },
        {
            value: "PineApple",
            imageUrl: "",
        }
    ])
    const [rightCard, setRightCard] = useState([
        {
            value: "M",
            imageUrl: "",
        },
        {
            value: "P",
            imageUrl: "",
        },
        {
            value: "A",
            imageUrl: "",
        },
        {
            value: "G",
            imageUrl: "",
        },

    ])
    const [selectionTurn, setSelectionTurn] = useState(0);// 0 for left & 1 for Right
    const [leftSelected, setLeftSelected] = useState(-1);// initially no left card is selected hence -1 
    const history = useNavigate();

    const handleClick = () => {
        history('/FinalRewardScreen'); // Route to the desired destination
    };

    const hanldeLeftSection = (index: number) => {
        setLeftSelected(index);
    }

    const hanldeRightSelected = (index: number) => {
        let object = rightCard[index];
        console.log(object.value, leftCard[leftSelected].value[0])
        if (object.value === leftCard[leftSelected].value[0]) {
            console.log("Its a match")
        } else {
            console.log("Its not a match");
        }
    }

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
                    {leftCard.map(({ value }, index) => {
                        return (
                            <div className='pink-card' onClick={() => {
                                if (selectionTurn !== 0) return;
                                hanldeLeftSection(index)
                                setSelectionTurn(1);
                            }}>
                                {
                                    leftSelected === index ? "This is selcted index" : value
                                }
                            </div>

                        )

                    })}
                </div>
                <div className='blue-card-selection'>
                    {rightCard.map(({ value }, index) => {
                        return (
                            <div className='blue-card' onClick={() => {
                                if (selectionTurn !== 1) return;
                                hanldeRightSelected(index);
                                setSelectionTurn(0);
                            }}>
                                {value}
                            </div>

                        )

                    })}

                </div>
            </div>
            <button className='next-button' onClick={handleClick}></button>
        </div>
    );
};

export default ActivityScreen;
