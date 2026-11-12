type FooterProps = {
	company: string;
};

export const Footer = ({ company }: FooterProps) => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="flex item-center justify-between bg-white px-6 py-4 dark:bg-slate-800">
			<span className="text-sm text-slate-600 dark:text-slate-400">
				© {currentYear} {company}
			</span>
			<span className="text-sm text-slate-600 dark:text-slate-400">
				Prices in USD
			</span>
		</footer>
	);
};

export default Footer;
