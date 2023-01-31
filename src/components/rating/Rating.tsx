import React from 'react';
import cl from './rating.module.scss';


type PropsType = {
    rate: number;
    reviews: number;
}

const Rating: React.FC<PropsType> = (
    {
        rate,
        reviews,
    }
) => {
    const arr = [1, 2, 3, 4, 5];

    const reviewsStr = () => {
        if(reviews === 1) return 'отзыв';
        if(reviews === 2 || reviews === 3 || reviews === 4) return 'отзыва';
        if(reviews >= 5) return 'отзывов';
    }

    return (
        <span className={cl.root}>
            {arr.map((item: number) => (
                <i
                    key={item}
                    className={item <= rate 
                    ? ["fa-solid fa-star", cl.root_redStar].join(' ')
                    : ["fa-solid fa-star", cl.root_grayStar].join(' ')
                }></i>
            ))}
            <a href="#">{reviews} {reviewsStr()}</a>
        </span>
    );
};

export default Rating;