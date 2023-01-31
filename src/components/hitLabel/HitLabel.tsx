import React from 'react';
import cl from './hitLabel.module.scss';


type PropsType = {
    mainColor?: string;
    backgroundColor?: string;
    text?: string;
    textColor?: string;
}

const HitLabel: React.FC<PropsType> = (
    {
        mainColor = '#D9362B',
        backgroundColor = '#FFFFFF',
        text = 'Хит',
        textColor = '#FFFFFF',
    }
) => {
    return (
        <div
            style={{background: `${mainColor}`}}
            className={cl.root}
        >
            <div
                style={{
                    background: `${backgroundColor}`,
                    color: `${textColor}`
                }}
                className={cl.root_before}></div>
                {text}
            <div
                style={{background: `${backgroundColor}`}}
                className={cl.root_after}></div>
        </div>
    );
};

export default HitLabel;