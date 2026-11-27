import type { Product } from '../types/product';
import type { CartItem } from '../types/cart';
import { SearchBar } from '../components/SearchBar';
import { StatsBar } from '../components/StatsBar';
import { EmptyState } from '../components/EmptyState.tsx';
import { ProductAll } from '../components/ProductAll.tsx';
import { LoadingState } from '../components/LoadingState.tsx';
import { ErrorState } from '../components/ErrorState.tsx';
// import { groupByCategory } from '../utils/groupByCategory';

type HomePageProps = {
	products: Product[];
	favourites: number[];
	cart: CartItem[];
	searchText: string;
	setSearchText: (value: string) => void;
	toggleFavourite: (productId: number) => void;
	addToCart: (product: Product) => void;
	onRetry: () => void;
	error: string | null;
	loading: boolean;
};

export const HomePage = ({
	products,
	favourites,
	cart,
	searchText,
	setSearchText,
	toggleFavourite,
	addToCart,
	onRetry,
	error,
	loading,
}: HomePageProps) => {
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchText.toLowerCase()),
	);
	// const groupedProducts = groupByCategory(products);
	return (
		<div>
			<StatsBar products={products} />
			{/* Search Bar */}
			<SearchBar value={searchText} onChange={setSearchText} />
			<p className="mt-2 text-sm text-slate-500">
				Showing {filteredProducts.length} of {products.length} products
			</p>

			{loading ? (
				<LoadingState />
			) : error ? (
				<ErrorState message={error} onRetry={onRetry} />
			) : searchText === '' ? (
				// Empty Search: -> Default: display all products
				<ProductAll
					products={products}
					favourites={favourites}
					onToggleFavourite={toggleFavourite}
					cart={cart}
					onAddToCart={addToCart}
				/>
			) : // Searching: -> Display search results
			filteredProducts.length === 0 ? (
				<EmptyState message="No products found" />
			) : (
				<ProductAll
					products={filteredProducts}
					favourites={favourites}
					onToggleFavourite={toggleFavourite}
					cart={cart}
					onAddToCart={addToCart}
				/>
			)}
		</div>
	);
};

export default HomePage;
