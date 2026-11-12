// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { useState } from 'react';
import { products } from './data/products';
import type { NavLink } from './types/navLink';
import type { Theme } from './types/theme';
import { ProductSection } from './components/ProductSection.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { SearchBar } from './components/SearchBar.tsx';
import { ProductGrid } from './components/ProductGrid.tsx';
import { EmptyState } from './components/EmptyState.tsx';
import { groupByCategory } from './utils/groupByCategory';

function App() {
	// Use state variables
	const [searchText, setSearchText] = useState('');
	const [theme, setTheme] = useState<Theme>('light');

	// Other variables
	const navLinks: NavLink[] = [
		{ label: 'Shop', href: '/' },
		{ label: 'Favourites', href: '/favourites' },
		{ label: 'Cart', href: '/cart' },
	];
	const company = 'SummitGear';
	const groupedProducts = groupByCategory(products);
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchText.toLowerCase()),
	);

	// Toggle Light/Dark theme
	const toggleTheme = () => {
		//setTheme(theme === 'light' ? 'dark' : 'light');
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<div
			className={`${theme === 'dark' ? 'dark' : ''} flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900`}>
			{/* Nav Bar */}
			<Navbar navLinks={navLinks} theme={theme} toggleTheme={toggleTheme} />

			<main className="flex-grow px-8 py-6">
				<div>
					{/* Display Stats Bar */}
					<StatsBar products={products} />

					{/* Search Bar */}
					<SearchBar value={searchText} onChange={setSearchText} />
					<p className="mt-2 text-sm text-slate-500">
						Showing {filteredProducts.length} of {products.length} products
					</p>

					{/* Display Search Results*/}
					{searchText === '' ? (
						// Empty Search: -> Default: display categories
						<div>
							<h1 className="text-3xl font-bold mt-4 dark:text-white">
								Shop by category
							</h1>
							{Object.entries(groupedProducts).map(
								([category, categoryProducts]) => (
									<ProductSection
										key={category}
										title={category[0].toUpperCase() + category.slice(1)}
										products={categoryProducts}
									/>
								),
							)}
						</div>
					) : // Display search results
					filteredProducts.length === 0 ? (
						<EmptyState message="No products found" />
					) : (
						<ProductGrid products={filteredProducts} />
					)}
				</div>
			</main>
			<Footer company={company} />
		</div>
	);
}

export default App;
