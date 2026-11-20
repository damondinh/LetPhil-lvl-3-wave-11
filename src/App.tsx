// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { useState } from 'react';
import { products } from './data/products';
import type { NavLink } from './types/navLink';
import type { Theme } from './types/theme';
import type { CartItem } from './types/cart';
import type { Product } from './types/product.ts';
import { ProductSection } from './components/ProductSection.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { SearchBar } from './components/SearchBar.tsx';
import { ProductGrid } from './components/ProductGrid.tsx';
import { EmptyState } from './components/EmptyState.tsx';
import { ProductAll } from './components/ProductAll.tsx';
import { CartPanel } from './components/CartPanel.tsx';
import { SuggestProductForm } from './components/SuggestProductForm.tsx';
import { groupByCategory } from './utils/groupByCategory';

function App() {
	// Use state variables
	const [searchText, setSearchText] = useState('');
	const [theme, setTheme] = useState<Theme>('light');
	const [favourites, setFavourites] = useState<number[]>([]);
	const [cart, setCart] = useState<CartItem[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	// Toggle Light/Dark theme
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	// Toggle Favourites
	/* avoid pushing and splice bc it mutates the original array */
	const toggleFavourite = (productId: number) => {
		setFavourites((currentFavourites) => {
			// 1. Check product exists in favourites: Remove it from favourites
			if (currentFavourites.includes(productId)) {
				return currentFavourites.filter((id) => id !== productId); // filter the id out of the favourites state
			}

			// 2. Product doesn't exist in favourites: Add it to favourites
			return [...currentFavourites, productId]; // spread operator creates copy of array and add new product id
		});
	};

	// Add to Cart
	const addToCart = (product: Product) => {
		setCart((currentCart) => {
			// 1. Find product exists in cart
			const existingItem = currentCart.find(
				(item) => item.product.id === product.id,
			);

			// 2. if item exists, prevent adding more than available stock
			if ((existingItem?.quantity ?? 0) >= product.stock) {
				return currentCart;
			}

			// 3. Increase qty if product exists
			if (existingItem) {
				return currentCart.map((item) =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}

			// 4. Add new product to the cart
			return [...currentCart, { product, quantity: 1 }];
		});
	};

	// Open & Close Cart
	const openCart = () => {
		setIsCartOpen(true);
	};
	const closeCart = () => {
		setIsCartOpen(false);
	};

	// Decrease quantity in Cart
	const decreaseQuantity = (productId: number) => {
		setCart((currentCart) =>
			currentCart
				.map((item) =>
					item.product.id === productId
						? { ...item, quantity: item.quantity - 1 }
						: item,
				)
				.filter((item) => item.quantity > 0),
		);
	};

	// Remove from Cart
	const removeFromCart = (productId: number) => {
		setCart((currentCart) =>
			currentCart.filter((item) => item.product.id !== productId),
		);
	};

	// Other variables
	const navLinks: NavLink[] = [
		{ label: 'Shop', href: '/' },
		{ label: 'Favourites', href: '/favourites', count: favourites.length },
		{
			label: 'Cart',
			href: '/cart',
			count: cart.reduce((total, item) => total + item.quantity, 0),
			onClick: openCart,
		},
	];
	const company = 'SummitGear';
	const groupedProducts = groupByCategory(products);
	const categories = Object.keys(groupedProducts);
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchText.toLowerCase()),
	);

	return (
		<div
			className={`${theme === 'dark' ? 'dark' : ''} flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900`}>
			{/* Nav Bar */}
			<Navbar navLinks={navLinks} theme={theme} toggleTheme={toggleTheme} />

			<main className="flex-grow px-8 py-6">
				<div>
					{/* Search Bar */}
					<SearchBar value={searchText} onChange={setSearchText} />
					<p className="mt-2 text-sm text-slate-500">
						Showing {filteredProducts.length} of {products.length} products
					</p>

					{/* Display Search Results*/}
					{searchText === '' ? (
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

				{/* Suggest Product Form */}
				<SuggestProductForm categories={categories} />
			</main>
			<Footer company={company} />

			<CartPanel
				cart={cart}
				isOpen={isCartOpen}
				onClose={closeCart}
				onIncrease={addToCart}
				onDecrease={decreaseQuantity}
				onRemove={removeFromCart}
			/>
		</div>
	);
}

export default App;
