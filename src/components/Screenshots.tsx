import { useState } from "react";
import type { ScreenshotsProps } from "../types/app";
import DeviceToggle from "./DeviceToggle";

export default function Screenshots({ images }: ScreenshotsProps) {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Screenshots</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div className="relative">
				<div className="screenshots-container overflow-x-auto scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
					<div className="flex gap-6 pb-4">
						{currentImages.map((image, index) => (
							<button
								key={image}
								type="button"
								onClick={() => window.openLightbox?.(index, activeDevice)}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
							>
								<img
									src={image}
									alt={`Screenshot ${index + 1}`}
									className={`rounded-xl border border-white/10 object-cover ${
										activeDevice === "iphone"
											? "aspect-[9/16] w-[260px]"
											: "aspect-[4/3] w-[360px]"
									}`}
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
