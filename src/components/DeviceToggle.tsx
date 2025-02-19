interface DeviceToggleProps {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}

export default function DeviceToggle({
	activeDevice,
	onToggle,
}: DeviceToggleProps) {
	return (
		<div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-1">
			<button
				type="button"
				onClick={() => onToggle("iphone")}
				className={`rounded-md px-3.5 py-1.5 text-sm transition-colors ${
					activeDevice === "iphone"
						? "bg-white/10 text-white"
						: "text-white/60 hover:text-white"
				}`}
			>
				iPhone
			</button>
			<button
				type="button"
				onClick={() => onToggle("ipad")}
				className={`rounded-md px-3.5 py-1.5 text-sm transition-colors ${
					activeDevice === "ipad"
						? "bg-white/10 text-white"
						: "text-white/60 hover:text-white"
				}`}
			>
				iPad
			</button>
		</div>
	);
}
