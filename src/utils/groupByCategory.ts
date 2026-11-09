import type { Product } from '../types/product';

export const groupByCategory = (
	products: Product[],
): Record<string, Product[]> => {
	return products.reduce(
		(acc, product) => {
			const category = product.category;

			// 1. Add category if doesnt exist
			if (!acc[category]) {
				acc[category] = [];
			}

			// 2. Push product into the write category group
			acc[category].push(product);

			// 3. Return accumulator
			return acc;
		},
		{} as Record<string, Product[]>, // start with empty record
	);
};
