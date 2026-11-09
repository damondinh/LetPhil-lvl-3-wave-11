import type { Product } from '../types/product';
import { ProductGrid } from '../components/ProductGrid.tsx';

type ProductSectionProps = {
	title: string;
	products: Product[];
};

export const ProductSection = ({ title, products }: ProductSectionProps) => {
	return (
		<div>
			<h1 className="text-xl font-bold">{title}</h1>
			<ProductGrid products={products} />
		</div>
	);
};
