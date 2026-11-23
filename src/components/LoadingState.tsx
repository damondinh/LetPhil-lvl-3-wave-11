export const LoadingState = () => {
	return (
		<div className="space-y-4">
			<p className="text-sm text-slate-500 dark:text-slate-400">
				Loading products...
			</p>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 8 }).map((_, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
						{/* Product image placeholder */}
						<div className="h-64 animate-pulse bg-slate-200 dark:bg-slate-700" />

						{/* Product information placeholders */}
						<div className="space-y-3 p-4">
							<div className="h-3 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
							<div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
							<div className="h-5 w-16 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
							<div className="h-8 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LoadingState;
