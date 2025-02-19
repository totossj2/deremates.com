import { useEffect, useRef } from "react";

interface ScreenshotsProps {
	images: string[];
}

export default function Screenshots({ images }: ScreenshotsProps) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		const progressBar = progressBarRef.current;

		if (!scrollContainer || !progressBar) return;

		const updateProgress = () => {
			const scrollWidth =
				scrollContainer.scrollWidth - scrollContainer.clientWidth;
			const scrolled = (scrollContainer.scrollLeft / scrollWidth) * 100;
			progressBar.style.setProperty("--scroll-width", `${scrolled}%`);
		};

		scrollContainer.addEventListener("scroll", updateProgress);
		return () => scrollContainer.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<div className="mb-24">
			{" "}
			<div className="relative">
				<div
					ref={scrollContainerRef}
					className="screenshots-scroll flex gap-6 overflow-x-auto px-1 pb-6"
				>
					{images.map((image) => (
						<button
							key={image}
							type="button"
							onClick={() => window.openLightbox?.(images.indexOf(image))}
							className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
						>
							<img
								src={image}
								alt={`Screenshot ${images.indexOf(image) + 1}`}
								className="aspect-[9/16] w-[260px] rounded-xl border border-white/10 object-cover"
								loading="lazy"
							/>
						</button>
					))}
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-white/5">
					<div
						ref={progressBarRef}
						className="scroll-progress h-full rounded-full bg-white/20"
					/>
				</div>
			</div>
		</div>
	);
}
