type SearchBarProps = {
	value: string;
	onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
	return (
		<input
			type="serach"
			placeholder="Search products..."
			value={value}
			onChange={(event) => onChange(event.target.value)} // event.target.value contains the text currently entered duringn input change event
			className="w-full rounded-lg border border-slate-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-slate-800 dark:text-white dark:border-emerald-600"
			aria-label="Search products"
		/>
	);
};

export default SearchBar;
