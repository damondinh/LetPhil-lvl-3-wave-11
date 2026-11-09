// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from './data/products';
import { ProductGrid } from './components/ProductGrid.tsx';
import { Navbar } from './components/Navbar.tsx';
import type { NavLink } from './types/navLink';
import { Footer } from './components/Footer.tsx';

const navLinks: NavLink[] = [
	{ label: 'Shop', href: '/' },
	{ label: 'Favourites', href: '/favourites' },
	{ label: 'Cart', href: '/cart' },
];
const company = 'SummitGear';

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar navLinks={navLinks} />
			<main className="p-8">
				<ProductGrid products={products} />
			</main>
			<Footer company={company} />
		</div>
	);
}

export default App;
