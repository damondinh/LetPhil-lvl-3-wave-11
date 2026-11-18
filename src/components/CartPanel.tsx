import type { CartItem } from '../types/cart';
import type { Product } from '../types/product';
import EmptyState from './EmptyState';

type CartPanelProps = {
	cart: CartItem[];
	isOpen: boolean;
	onClose: () => void;
	onIncrease: (product: Product) => void;
	onDecrease: (productId: number) => void;
	onRemove: (productId: number) => void;
};

export const CartPanel = ({
	cart,
	isOpen,
	onClose,
	onIncrease,
	onDecrease,
	onRemove,
}: CartPanelProps) => {
	const subtotal = cart.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0,
	);
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
	if (!isOpen) {
		return null;
	}
	const formattedSubtotal = subtotal.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<div className="fixed inset-0 z-50">
			{/* Backdrop  */}
			<div
				className="absolute inset-0 bg-black/40"
				onClick={onClose}
				aria-hidden="true"
			/>

			{/* Cart Panel */}
			<aside className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl flex flex-col dark:bg-slate-800 dark:text-white">
				{/* Header */}
				<div className="flex item-center justify-between border-b border-slate-300 p-4">
					<h2 className="font-bold">Your cart ({totalItems})</h2>
					<button type="button" onClick={onClose}>
						x
					</button>
				</div>

				{/* Cart items */}
				<div className="flex-1 overflow-y-auto p-4">
					{cart.length === 0 ? (
						<EmptyState message="Add something to your cart." />
					) : (
						cart.map(({ product, quantity }) => (
							<div
								key={product.id}
								className="flex gap-3 border-b border-slate-200 py-4 dark:border-slate-700">
								{/* Product thumbnail */}
								<img
									src={product.thumbnail}
									alt={product.title}
									className="h-16 w-16 rounded-lg bg-slate-100 object-contain dark:bg-slate-700"
								/>

								{/* Product information */}
								<div className="min-w-0 flex-1">
									<h3 className="text-sm font-semibold">{product.title}</h3>

									<div className="min-w-0 flex flex-row">
										<p className="text-xs text-slate-500 dark:text-slate-400">
											${product.price.toFixed(2)} each
										</p>
										{quantity >= product.stock && (
											<p className="text-xs text-amber-600 font-semibold">
												<span className="text-xs text-slate-500 mx-1 font-normal">
													•
												</span>
												Max reached
											</p>
										)}
									</div>

									{/* Quantity controls */}
									<div className="mt-2 inline-flex items-center rounded-md border border-slate-300">
										<button
											type="button"
											className="px-2 py-1 cursor-pointer"
											onClick={() => onDecrease(product.id)}>
											-
										</button>
										<span className="border-x px-3 py-1 text-sm">
											{quantity}
										</span>
										<button
											type="button"
											className="px-2 py-1 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
											onClick={() => onIncrease(product)}
											disabled={quantity >= product.stock}>
											+
										</button>
									</div>
								</div>

								{/* Item total and remove button */}
								<div className="flex flex-col items-end gap-2">
									<span className="text-sm font-bold">
										${(product.price * quantity).toFixed(2)}
									</span>
									<button
										type="button"
										className="text-xs font-semibold text-red-600 hover:text-red-800"
										onClick={() => onRemove(product.id)}>
										Remove
									</button>
								</div>
							</div>
						))
					)}
				</div>

				{/* Footer */}
				<div
					className="flex justify-between border-t
                border-slate-200 p-4 font-bold
                dark:border-slate-700">
					<span>Subtotal</span>
					<span>{formattedSubtotal}</span>
				</div>
			</aside>
		</div>
	);
};

export default CartPanel;
