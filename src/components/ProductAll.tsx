import type { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard.tsx';
import { EmptyState } from '../components/EmptyState.tsx';
import type { CartItem } from '../types/cart';

type ProductAllProps = {
	products: Product[];
	favourites: number[];
	onToggleFavourite: (productId: number) => void;
	cart: CartItem[];
	onAddToCart: (product: Product) => void;
};

export const ProductAll = ({
	products,
	favourites,
	onToggleFavourite,
	cart,
	onAddToCart,
}: ProductAllProps) => {
	let content;
	if (products.length === 0) {
		content = (
			<EmptyState message="Nothing matches this section. Check back soon" />
		);
	} else {
		content = (
			<div>
				<h1 className="text-xl font-bold mt-6 dark:text-white">
					All Products
					<span className="text-sm text-slate-400"> ({products.length})</span>
				</h1>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							isFavourite={favourites.includes(product.id)}
							onToggleFavourite={onToggleFavourite}
							cartQuantity={
								cart.find((item) => item.product.id === product.id)?.quantity ??
								0
							}
							onAddToCart={() => onAddToCart(product)}
						/>
					))}
				</div>
			</div>
		);
	}
	return content;
};

export default ProductAll;
