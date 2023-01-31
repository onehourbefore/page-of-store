import React from 'react';
import cl from './counter.module.scss';


type PropsType = {
    count: number;
    setCount: (count: number) => void;
}

const Counter: React.FC<PropsType> = (
    {
        count,
        setCount
    }
) => {
    const handleClick = (e: any) => {
        switch (e.target.id) {
            case 'add':
                setCount(count + 1);
                break;
            case 'remove': 
                if(count === 1) break;
                setCount(count - 1);
                break;
            default: break;
        }
    };

    return (
        <div
            className={cl.root}
            onClick={handleClick}
        >
            <button id="remove">-</button>
            <div className={cl.root_value}>{count}</div>
            <button id="add">+</button>
        </div>
    );
};

export default Counter;