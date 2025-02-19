interface ScreenshotsProps {
	images: string[];
}

export default function Screenshots({ images }: ScreenshotsProps) {
	return (
		<div className="mb-16">
			<div className="relative">
				<div className="screenshots-container overflow-x-auto">
					<div className="flex gap-6 pb-4">
						{images.map((image, index) => (
							<button
								key={image}
								type="button"
								onClick={() => window.openLightbox?.(index)}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
							>
								<img
									src={image}
									alt={`Screenshot ${index + 1}`}
									className="aspect-[9/16] w-[260px] rounded-xl border border-white/10 object-cover"
									loading="lazy"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
