import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
	const handlePlay = () => {
		chooseTrack(track);
	};

	return (
		<div
			className="d-flex m-2 align-items-center track"
			style={{ cursor: "pointer" }}
			onClick={handlePlay}
		>
			<img
				src={track.albumUrl}
				alt={track.name}
				style={{ height: "64px", width: "64px" }}
			/>
			<div className="margin-left">
				<div>{track.title}</div>
				<div className="text-muted">{track.artist}</div>
			</div>
		</div>
	);
}
