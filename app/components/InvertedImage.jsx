"use client";

export default function InvertedImage({ src, alt }) {
	return (
		<div className="inverted-wrapper">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{ display: "block", position: "absolute" }}
				width="0"
				height="0"
			>
				<defs>
					<clipPath id="clip" clipPathUnits="objectBoundingBox">
						<path d="M0.0282,0H0.5845A0.0282,0.0229,0,0,1,0.6127,0.0229V0.12A0.0282,0.0229,0,0,0,0.6408,0.1429H0.9718A0.0282,0.0229,0,0,1,1,0.1657V0.9771A0.0282,0.0229,0,0,1,0.9718,1H0.3803A0.0282,0.0229,0,0,1,0.3521,0.9771V0.88A0.0282,0.0229,0,0,0,0.3239,0.8571H0.0282A0.0282,0.0229,0,0,1,0,0.8343V0.0229A0.0282,0.0229,0,0,1,0.0282,0Z" />
					</clipPath>
				</defs>
			</svg>

			<div className="inverted">
				<img src={src} alt={alt} />
			</div>

			<style jsx>{`
				.inverted {
					clip-path: url(#clip);
					overflow: hidden;
					width: 100%;
					height: 700px;
				}
				.inverted img {
					width: 100%;
					height: 700px;
					object-fit: cover;
				}
			`}</style>
		</div>
	);
}
