import React from 'react';
import { GetStaticProps } from 'next/types';
import axios from 'axios';

import { ProductType } from '@/types';
import Banner from '@/components/banner/Banner';
import Card from '@/components/card/Card';
import cl from '@/styles/Main.module.scss';


export const getStaticProps: GetStaticProps = async() => {
	try {
		const { data } = await axios.get(`https://fakestoreapi.com/products?limit=9`);
		return {
			props: { products: data }
		}
	} catch(e: any) {
		return {
			props: { products: null }
		}
	}
}

type PropsType = {
	products: ProductType[];
}

const Main: React.FC<PropsType> = (
	{ products }
) => {

	return (
		<div className={cl.root}>
			<Banner />
			{products.map((product: ProductType) => (
				<Card
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Main;