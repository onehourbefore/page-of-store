import Image from 'next/image';

import { ProductType } from '@/types';
import HitLabel from '../hitLabel/HitLabel';
import Rating from '../rating/Rating';
import AddToCartBtn from '../buttons/AddToCartBtn';
import AddToFavoritesBtn from '../buttons/AddToFavoritesBtn';

import cl from '@/components/card/card.module.scss';


type PropsType = {
    product: ProductType;
}

const Card: React.FC<PropsType> = (
    { product }
) => {

    return (
        <div className={cl.root}>
            {product.rating.count > 300
                && <HitLabel />}
            <div className={cl.root_picture}>
                <Image
                    src={product.image}
                    alt="Good"
                    width={180}
                    height={180}
                    priority={true}
                />
            </div>
            <div className={cl.root_info}>
                <div className={cl.root_categoryAndRating}>
                    <span className={cl.root_categoryAndRating_category}>
                        {product.category}
                    </span>
                    <Rating
                        rate={Math.round(product.rating.rate)}
                        reviews={Math.round(product.rating.count / 100)}
                    />
                </div>
                <div className={cl.root_description}>
                    {product.description.slice(0, 100)}...
                </div>
            </div>
            <div className={cl.root_priceAndBtns}>
                <div className={cl.root_price}>
                    <span>{Math.round(product.price * 70)} &#8381; </span>
                    <span>/шт.</span>
                </div>
                <div className={cl.root_btns}>
                    <AddToCartBtn product={product} />
                    <AddToFavoritesBtn product={product} />
                </div>
            </div>
        </div>
    );
};

export default Card;