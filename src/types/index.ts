export type ProductType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: { rate: number, count: number },
    image: string;
}

export type ProductInCart = {
    product: ProductType,
    count: number
}

export type MainStateType = {
    cart: ProductInCart[];
    favorites: ProductType[];
}