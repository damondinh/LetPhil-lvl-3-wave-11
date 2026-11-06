import type { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard.tsx';

type ProductGridProps = {
	products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{products.map((product) => (
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
	);
};

export default ProductGrid;
