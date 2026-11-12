type EmptyStateProps = {
	message: string;
};

export const EmptyState = ({ message }: EmptyStateProps) => {
	return (
		<div className="text-center border-2 border-dashed border-slate-400 rounded-2xl bg-white py-15 mt-4 dark:bg-slate-800">
			<p className="text-xl">🛍️</p>
			<p className="font-bold dark:text-white">No products here yet</p>
			<p className="text-slate-400">{message}</p>
		</div>
	);
};

export default EmptyState;
