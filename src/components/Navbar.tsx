import type { NavLink } from '../types/navLink';

type NavbarProps = {
	navLinks: NavLink[];
};

export const Navbar = ({ navLinks }: NavbarProps) => {
	return (
		<nav className="flex item-center justify-between bg-white px-6 py-4">
			{/* Shop Name */}
			<div className="flex gap-2">
				<a href="/" className="text-xl">
					🛍️
				</a>
				<h1 className="font-bold text-emerald-800">SummitGear Market</h1>
			</div>

			{/* Nav Links */}
			<div className="flex gap-6">
				{navLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="text-sm text-slate-600 hover:text-emerald-700">
						{link.label}
					</a>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
