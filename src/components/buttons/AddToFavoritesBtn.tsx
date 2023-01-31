import React from 'react';
import { useAppDispatch } from '@/store';

import { addToFavorites, removeFromFavorites } from '@/store/mainSlice';
import { ProductType } from '@/types';
import cl from './addToFavoritesBtn.module.scss';


type PropsType = {
    product: ProductType;
}

const AddToFavoritesBtn: React.FC<PropsType> = (
    { product }
) => {
    const dispatch = useAppDispatch();
    const [isClicked, setIsClicked] = React.useState(false);
    const handleClick = () => {
        if(!isClicked) dispatch(addToFavorites(product));
        if(isClicked) dispatch(removeFromFavorites(product.id));
        setIsClicked((flag: boolean) => !flag)
    };

    return (
        <button
            className={
                isClicked 
                ? [cl.root, cl.isClicked].join(' ')
                : cl.root}
            onClick={handleClick}
        >
            <i className="fa-regular fa-heart"></i>
        </button>
    );
};

export default AddToFavoritesBtn;