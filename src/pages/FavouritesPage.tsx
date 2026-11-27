import type { Product } from '../types/product';
import type { CartItem } from '../types/cart';
import { ProductAll } from '../components/ProductAll.tsx';
import { EmptyState } from '../components/EmptyState.tsx';

type FavouritesPageProps = {
	products: Product[];
	favourites: number[];
	cart: CartItem[];
	toggleFavourite: (productId: number) => void;
	addToCart: (product: Product) => void;
};

export const FavouritesPage = ({
	products,
	favourites,
	cart,
	toggleFavourite,
	addToCart,
}: FavouritesPageProps) => {
	const favouriteProducts = products.filter((product) =>
		favourites.includes(product.id),
	);

	return (
		<div>
			<h1 className="text-xl font-bold mt-6 dark:text-white">
				Your favourites
				<span className="text-sm text-slate-400"> ({products.length})</span>
			</h1>

			{favouriteProducts.length === 0 ? (
				<EmptyState message="Save products by clicking the heart button." />
			) : (
				<ProductAll
					products={favouriteProducts}
					favourites={favourites}
					onToggleFavourite={toggleFavourite}
					cart={cart}
					onAddToCart={addToCart}
				/>
			)}
		</div>
	);
};
export default FavouritesPage;
