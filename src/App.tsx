// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from './data/products';
import { ProductSection } from './components/ProductSection.tsx';
import { Navbar } from './components/Navbar.tsx';
import type { NavLink } from './types/navLink';
import { Footer } from './components/Footer.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { groupByCategory } from './utils/groupByCategory';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar.tsx';
import { ProductGrid } from './components/ProductGrid.tsx';
import { EmptyState } from './components/EmptyState.tsx';

const navLinks: NavLink[] = [
	{ label: 'Shop', href: '/' },
	{ label: 'Favourites', href: '/favourites' },
	{ label: 'Cart', href: '/cart' },
];
const company = 'SummitGear';
const groupedProducts = groupByCategory(products);

function App() {
	const [searchText, setSearchText] = useState('');
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchText.toLowerCase()),
	);

	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Navbar navLinks={navLinks} />
			<main className="flex-grow p-8">
				<div>
					<SearchBar value={searchText} onChange={setSearchText} />
					<p className="mt-2 text-sm text-slate-500">
						Showing {filteredProducts.length} of {products.length} products
					</p>
					{filteredProducts.length === 0 ? (
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
