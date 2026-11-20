import type { ChangeEvent, SubmitEvent } from 'react';
import type { Suggestion } from '../types/suggestion';
import { useState } from 'react';

type SuggestProductFormProps = {
	categories: string[];
};

export const SuggestProductForm = ({ categories }: SuggestProductFormProps) => {
	const [formData, setFormData] = useState<Suggestion>({
		name: '',
		category: categories[0] ?? '',
		reason: '',
	});
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const [error, setError] = useState('');

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
	) => {
		// 1. Set form data
		const { name, value } = e.target;
		setFormData((currentForm) => ({ ...currentForm, [name]: value }));

		// 2. Clear error
		if (error) {
			setError('');
		}
	};

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		// 1. Validate required fields
		if (!formData.name.trim || !formData.reason.trim()) {
			setError(
				'Please fill out the product name and reason before submitting.',
			);
			return;
		}

		// 2. Add suggestions to the list
		setSuggestions((currentSuggestions) => [...currentSuggestions, formData]);

		// 3. Clear the form
		setFormData({ name: '', category: categories[0] ?? '', reason: '' });

		// 4. Clear validation error
		setError('');
	};
	return (
		<section className="mx-auto max-w-2xl my-6">
			{/* Form */}
			<form
				onSubmit={handleSubmit}
				className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
				{/* Header */}
				<div>
					<h2 className="text-xl font-bold">Suggest a product</h2>
					<p className="text-sm text-slate-500">
						Tell us what you'd like to see in the store.
					</p>
				</div>
				{/* Error message */}
				{error && (
					<div
						role="alert"
						className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
						{error}
					</div>
				)}

				{/* Product Name  */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label htmlFor="name" className="text-sm font-semibold">
							Product name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							placeholder="e.g. Stove"
							className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
						/>
					</div>
					{/* Category */}
					<div>
						<label htmlFor="categotry" className="text-sm font-semibold">
							Category
						</label>
						<select
							id="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							className="mt-1 w-full rounded-lg border
                       border-slate-300 px-3 py-2 text-sm
                       dark:border-slate-600 dark:bg-slate-700">
							{categories.map((category) => (
								<option key={category} value={category}>
									{category[0].toUpperCase() + category.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>
				{/* Reason */}
				<div>
					<label htmlFor="reason" className="text-sm font-semibold">
						Why should we carry it?
					</label>

					<textarea
						id="reason"
						name="reason"
						value={formData.reason}
						onChange={handleChange}
						maxLength={200}
						rows={4}
						className="mt-1 w-full rounded-lg border
               border-slate-300 px-3 py-2 text-sm
               focus:outline-none focus:ring-2
               focus:ring-emerald-600"
					/>

					<p className="text-right text-xs text-slate-500">
						{formData.reason.length} / 200
					</p>
				</div>
				{/* Submit button */}
				<button
					type="submit"
					className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
					Submit suggestion
				</button>
			</form>

			{/* Suggestions */}
			<div className="mt-6 space-y-3">
				<h3 className="font-bold dark:text-white">
					Suggestions ({suggestions.length})
				</h3>
				{suggestions.map((suggestion, index) => (
					<div
						key={index}
						className="rounded-xl border border-slate-200
                 bg-white p-4 dark:border-slate-700
                 dark:bg-slate-800 dark:text-slate-100">
						<div className="flex items-center gap-2">
							<h4 className="font-semibold">{suggestion.name}</h4>
							<span
								className="rounded-full bg-slate-100
                         px-2 py-1 text-xs font-medium
                         text-slate-600 dark:bg-slate-700
                         dark:text-slate-300">
								{suggestion.category}
							</span>
						</div>

						<p className="mt-1 text-sm text-slate-500">{suggestion.reason}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SuggestProductForm;
