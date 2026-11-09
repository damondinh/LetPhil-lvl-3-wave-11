// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from './data/products';
import { ProductSection } from './components/ProductSection.tsx';
import { Navbar } from './components/Navbar.tsx';
import type { NavLink } from './types/navLink';
import { Footer } from './components/Footer.tsx';
import { StatsBar } from './components/StatsBar.tsx';

const navLinks: NavLink[] = [
	{ label: 'Shop', href: '/' },
	{ label: 'Favourites', href: '/favourites' },
	{ label: 'Cart', href: '/cart' },
];
const company = 'SummitGear';

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Navbar navLinks={navLinks} />
			<main className="flex-grow p-8">
				<StatsBar products={products} />
				<ProductSection
					title="Deals under $20"
					products={products.filter((product) => product.price < 20)}
				/>
				<ProductSection
					title="Top rated"
					products={products.filter((product) => product.rating >= 4)}
				/>
				<ProductSection
					title="Furniture"
					products={products.filter(
						(product) => product.category === 'furniture',
					)}
				/>
				<ProductSection
					title="Luxury (over $5000)"
					products={products.filter((product) => product.price > 5000)}
				/>
			</main>
			<Footer company={company} />
		</div>
	);
}

export default App;
