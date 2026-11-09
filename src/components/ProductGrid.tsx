import type { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard.tsx';
import { EmptyState } from './EmptyState.tsx';

type ProductGridProps = {
	products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
	const visibleProducts = products.slice(0, 4);
	const remainingProducts = products.length - visibleProducts.length;
	let content;

	if (products.length === 0) {
		content = (
			<EmptyState message="Nothing matches this section. Check back soon" />
		);
	} else {
		content = (
			<div>
				{/* Product Grid */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
					{visibleProducts.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.title}
							description={product.description}
							category={product.category}
							price={product.price}
							rating={product.rating}
							stock={product.stock}
							brand={product.brand}
							thumbnail={product.thumbnail}
						/>
					))}
				</div>

				{/* Product Count */}
				<p className="mt-4 text-center text-sm italic text-slate-400 border-dashed border-t border-slate-400 pt-2">
					...{remainingProducts} more products continue in this list
				</p>
			</div>
		);
	}
	return content;
};

export default ProductGrid;
