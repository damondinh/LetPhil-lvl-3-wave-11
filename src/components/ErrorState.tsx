type ErrorStateProps = {
	message: string;
	onRetry: () => void;
};

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
	return (
		<div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/30">
			<div className="mb-3 text-3xl">⚠️</div>

			<h2 className="font-bold text-red-700 dark:text-red-400">
				We couldn't load products
			</h2>

			<p className="mt-2 text-sm text-red-600 dark:text-red-300">{message}</p>

			<button
				type="button"
				onClick={onRetry}
				className="mt-4 rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
				Try again
			</button>
		</div>
	);
};

export default ErrorState;
