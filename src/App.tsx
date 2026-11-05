// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from './data/products';
import { ProductCard } from './components/ProductCard.tsx';

function App() {
	return (
		<main className="min-h-screen bg-gray-50 p-8">
			<h1 className="text-3xl font-bold">SummitGear Market</h1>
			<p className="text-gray-600">Open the tickets folder to get started.</p>
			<ProductCard
				id={products[0].id}
				title={products[0].title}
				description={products[0].description}
				category={products[0].category}
				price={products[0].price}
				rating={products[0].rating}
				stock={products[0].stock}
				brand={products[0].brand}
				thumbnail={products[0].thumbnail}
			/>
		</main>
	);
}

export default App;
