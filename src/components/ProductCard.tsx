import type { Product } from '../types/product';

type ProductCardProps = {
	product: Product;
	isFavourite: boolean;
	onToggleFavourite: (productId: number) => void;
};

export const ProductCard = ({
	product,
	isFavourite,
	onToggleFavourite,
}: ProductCardProps) => {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white shadow-md mt-4 dark:bg-slate-800 dark:border-none">
			{/* Image */}
			<div className="relative rounded-t-2xl flex h-80 items-center justify-center bg-slate-100 p-8 dark:bg-slate-700">
				{/* Favourites button */}
				<button
					type="button"
					onClick={() => onToggleFavourite(product.id)}
					className="text-sm absolute top-4 right-4 bg-white rounded-full border border-slate-300 px-2 py-1 text-red-500">
					{isFavourite ? '♥' : '♡'}
				</button>

				{/* Low stock badge */}
				{product.stock < 10 && (
					<div className="">
						<span className="absolute bottom-2 left-2 rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
							Low stock
						</span>
					</div>
				)}

				{/* Image */}
				<img src={product.thumbnail} alt={product.brand} />
			</div>

			{/* Product Description */}
			<div className="p-5">
				{product.brand && (
					<p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">
						{product.brand}
					</p>
				)}
				<h3 className="font-bold dark:text-white">{product.title}</h3>

				{/* Price and Rating */}
				<div className="mt-4 flex items-center justify-between">
					<span className="text-xl font-bold text-emerald-800 dark:text-emerald-600">
						${product.price.toFixed(2)}
					</span>
					<span className="text-sm text-slate-500 dark:text-slate-400">
						{' '}
						★ {product.rating}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
