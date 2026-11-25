import { useEffect, useState } from 'react';

const messages = [
	'🚚 Free shipping on orders over $50',
	'🎉 Discover our latest deals',
	'⭐ Shop our top-rated products',
];

export const PromoBanner = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (!isVisible) return;

		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
		}, 4000);

		return () => {
			clearInterval(intervalId);
			console.log('Interval stopped:', intervalId);
		};
	}, [isVisible]);

	return (
		<div>
			{isVisible && (
				<div className="relative bg-emerald-800 text-white px-6 py-2 text-center">
					<p className="font-semibold">{messages[currentIndex]}</p>

					<button
						type="button"
						onClick={() => setIsVisible(false)}
						className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
						✕
					</button>
				</div>
			)}
		</div>
	);
};
