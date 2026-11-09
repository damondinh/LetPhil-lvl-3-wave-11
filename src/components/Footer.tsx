type FooterProps = {
	company: string;
};

export const Footer = ({ company }: FooterProps) => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="flex item-center justify-between bg-white px-6 py-4">
			<span className="text-sm text-slate-600">
				© {currentYear} {company}
			</span>
			<span className="text-sm text-slate-600">Prices in USD</span>
		</footer>
	);
};

export default Footer;
