import type { Product } from '../types/product';

export const ProductCard = (props: Product) => {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-md mt-4">
			{/* Image */}
			<div className="flex h-80 items-center justify-center bg-slate-100 p-8">
				<img src={props.thumbnail} alt={props.brand} />
			</div>

			{/* Product Description */}
			<div className="p-5">
				{props.brand && (
					<p className="text-sm font-semibold uppercase text-slate-500">
						{props.brand}
					</p>
				)}
				<h3 className="font-bold">{props.title}</h3>

				{/* Price and Rating */}
				<div className="mt-4 flex items-center justify-between">
					<span className="text-xl font-bold text-emerald-800">
						${props.price.toFixed(2)}
					</span>
					<span className="text-sm text-slate-500"> ★ {props.rating}</span>
				</div>

				{/* Low stock badge */}
				{props.stock < 10 && (
					<div className="">
						<span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
							Low stock
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
