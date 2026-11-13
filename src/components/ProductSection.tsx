import type { Product } from '../types/product';
import { ProductGrid } from '../components/ProductGrid.tsx';

type ProductSectionProps = {
	title: string;
	products: Product[];
	favourites: number[];
	onToggleFavourite: (productId: number) => void;
};

export const ProductSection = ({
	title,
	products,
	favourites,
	onToggleFavourite,
}: ProductSectionProps) => {
	return (
		<div>
			<h1 className="text-xl font-bold mt-6 dark:text-white">
				{title}
				<span className="text-sm text-slate-400"> ({products.length})</span>
			</h1>
			<ProductGrid
				products={products}
				favourites={favourites}
				onToggleFavourite={onToggleFavourite}
			/>
		</div>
	);
};

export default ProductSection;
