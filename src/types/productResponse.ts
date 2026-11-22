import type { Product } from './product';

export type ProductResponse = {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
};
