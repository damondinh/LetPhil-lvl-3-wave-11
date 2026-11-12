import type { NavLink } from '../types/navLink';
import type { Theme } from '../types/theme';

type NavbarProps = {
	navLinks: NavLink[];
	theme: Theme;
	toggleTheme: () => void;
};

export const Navbar = ({ navLinks, theme, toggleTheme }: NavbarProps) => {
	return (
		<nav className="flex item-center justify-between bg-white px-6 py-4 dark:bg-slate-800">
			{/* Shop Name */}
			<div className="flex gap-2">
				<a href="/" className="text-xl">
					🛍️
				</a>
				<h1 className="font-bold text-emerald-800 dark:text-emerald-400">
					SummitGear Market
				</h1>
			</div>

			{/* Nav Links */}
			<div className="flex gap-6">
				{navLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="text-sm text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400">
						{link.label}
					</a>
				))}
				<button
					className="text-sm border border-slate-300 rounded px-2 py-1 dark:border-slate-500 dark:bg-slate-700"
					onClick={toggleTheme}>
					{theme === 'light' ? '🌙' : '☀️'}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
