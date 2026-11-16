import type { Product } from './product.tsx';

export type CartItem = {
	product: Product;
	quantity: number;
};
