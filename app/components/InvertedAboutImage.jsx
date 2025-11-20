"use client";

const InvertedAboutImage = ({ src, alt }) => {
	return (
		<div className="inverted-wrapper">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{ display: "block", position: "absolute" }}
				width="0"
				height="0"
			>
				<defs>
					<clipPath id="about-clip" clipPathUnits="objectBoundingBox">
						<path d="M0.0283,0H0.9717A0.0283,0.0308,0,0,1,1,0.0308V0.7692A0.0177,0.0192,0,0,1,0.9823,0.7885H0.6466A0.0177,0.0192,0,0,0,0.629,0.8077V0.9808A0.0177,0.0192,0,0,1,0.6113,1H0.0283A0.0283,0.0308,0,0,1,0,0.9692V0.0308A0.0283,0.0308,0,0,1,0.0283,0Z" />
					</clipPath>
				</defs>
			</svg>

			<div className="about-inverted">
				<img src={src} alt={alt} />
			</div>

			<style jsx>{`
				.about-inverted {
					clip-path: url(#about-clip);
					overflow: hidden;
					width: 100%;
					height: 520px;
				}
				.about-inverted img {
					width: 100%;
					height: 520px;
					object-fit: cover;
				}
			`}</style>
		</div>
	);
};

export default InvertedAboutImage;
