import type { Product } from '../types/product';

type StatsBarProps = {
	products: Product[];
};

export const StatsBar = ({ products }: StatsBarProps) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{/* Units in stock */}
			<div className="rounded-2xl border border-slate-200 bg-white p-4">
				<p className="text-sm text-slate-500 font-bold">UNITS IN STOCK</p>
				<span className="text-3xl font-semibold">
					{products
						.reduce((acc, product) => acc + product.stock, 0)
						.toLocaleString()}
				</span>
			</div>
			{/* Inventory value */}
			<div className="rounded-2xl border border-slate-200 bg-white p-4">
				<p className="text-sm text-slate-500 font-bold">INVENTORY VALUE</p>
				<span className="text-3xl font-semibold">
					$
					{products
						.reduce((acc, product) => acc + product.stock * product.price, 0)
						.toFixed(2)}
				</span>
			</div>
			{/* Average rating */}
			<div className="rounded-2xl border border-slate-200 bg-white p-4">
				<p className="text-sm text-slate-500 font-bold">AVERAGE RATING</p>
				<span className="text-3xl font-semibold">
					{' '}
					★{' '}
					{(
						products.reduce((acc, product) => acc + product.rating, 0) /
						products.length
					).toFixed(1)}
				</span>
			</div>
			{/* Low stock */}
			<div className="rounded-2xl border border-slate-200 bg-white p-4">
				<p className="text-sm text-slate-500 font-bold">LOW STOCK</p>
				<span className="text-3xl font-semibold text-amber-700">
					{products.reduce(
						(acc, product) => (product.stock < 10 ? acc + 1 : acc),
						0,
					)}{' '}
					products
				</span>
			</div>
		</div>
	);
};

export default StatsBar;
