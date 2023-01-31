import React from 'react';
import { useAppDispatch } from '@/store';

import { addToCart, removeFromCart } from '@/store/mainSlice';
import { ProductType } from '@/types';
import Counter from '../counter/Counter';
import cl from './addToCartBtn.module.scss';


type PropsType = {
    product: ProductType;
}

const AddToCartBtn: React.FC<PropsType> = (
    { product }
) => {
    const dispatch = useAppDispatch();
    const [isClicked, setIsClicked] = React.useState(false);
    const [count, setCount] = React.useState(1);

    const handleClick = () => {
        if(!isClicked) dispatch(addToCart({product, count}));
        if(isClicked) dispatch(removeFromCart(product.id));
        setIsClicked((flag: boolean) => !flag);
    };

    return (
        <div className={cl.wrapper}>
            <button
                className={
                    isClicked
                    ? [cl.root, cl.root_isClicked].join(' ')
                    : cl.root}
                onClick={handleClick}
            >
                {isClicked ? 'В корзине' : 'В корзину'}
            </button>

            {!isClicked &&
                <Counter
                    count={count}
                    setCount={setCount}
                />}
        </div>

    );
};

export default AddToCartBtn;