import type { CartItem } from '../types/cart';
import type { Product } from '../types/product';
import EmptyState from '../components/EmptyState';

type CartPageProps = {
	cart: CartItem[];
	onIncrease: (product: Product) => void;
	onDecrease: (productId: number) => void;
	onRemove: (productId: number) => void;
};

export const CartPage = ({
	cart,
	onIncrease,
	onDecrease,
	onRemove,
}: CartPageProps) => {
	const subtotal = cart.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0,
	);
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
	const formattedSubtotal = subtotal.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<div>
			<h1 className="text-3xl font-bold dark:text-white">Your cart</h1>

			<p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
				{totalItems} items
			</p>

			{cart.length === 0 ? (
				<EmptyState message="Add something you love from the shop." />
			) : (
				<div className="grid gap-6 lg:grid-cols-3">
					{/* Cart items */}
					<div className="rounded-xl border border-slate-200 bg-white px-4 lg:col-span-2 dark:bg-slate-800 dark:border-none">
						{cart.map(({ product, quantity }) => (
							<div
								key={product.id}
								className="flex items-center gap-4 border-b border-slate-200 py-4 last:border-none dark:border-slate-500">
								<img
									src={product.thumbnail}
									alt={product.title}
									className="h-16 w-16 rounded-lg bg-slate-100 object-contain"
								/>

								<div className="flex-1">
									<h2 className="font-semibold dark:text-white">
										{product.title}
									</h2>

									<p className="text-sm text-slate-500 dark:text-slate-400">
										${product.price.toFixed(2)} each
									</p>

									<div className="mt-2 flex items-center gap-3 dark:text-white">
										<button
											className="cursor-pointer"
											onClick={() => onDecrease(product.id)}>
											−
										</button>

										<span>{quantity}</span>

										<button
											disabled={quantity >= product.stock}
											onClick={() => onIncrease(product)}
											className="disabled:opacity-40 cursor-pointer">
											+
										</button>
									</div>
								</div>

								<div className="text-right">
									<p className="font-semibold dark:text-white">
										${(product.price * quantity).toFixed(2)}
									</p>

									<button
										onClick={() => onRemove(product.id)}
										className="text-sm text-red-600">
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Cart summary */}
					<div className="h-fit rounded-xl border border-slate-200 bg-white p-4 dark:bg-slate-800 dark:border-none">
						<div className="flex justify-between font-bold">
							<span className="dark:text-white">Subtotal</span>
							<span className="dark:text-white">{formattedSubtotal}</span>
						</div>

						<p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
							Shipping & taxes calculated at checkout
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartPage;
