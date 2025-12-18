import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
	<>
	<div className="min-h-screen bg-[#E8E9FE] flex flex-col items-center justify-center px-4 ">
		<div className="w-full flex items-center justify-center mt-20 md:mt-40">
  <div
    className="w-full md:w-[300px] md:h-[200px] bg-no-repeat bg-center bg-cover opacity-80 hidden md:block"
    style={{ backgroundImage: "url('/Globe.svg')" }}
  />
</div>


		<div className="absolute inset-0 flex flex-col items-center justify-center -mt-40 md:mt-0 md:-top-32	 z-20 px-4 sm:px-0">
			<Image
            src="/Subtract.svg"
            alt="Underline ellipse"
            width={500}
            height={100}
            className="absolute top-1/2 left-1/2 -translate-x-[200px] -translate-y-1/4 z-10 hidden md:block"
          />

		  <h1 className="relative z-20 text-3xl sm:text-3xl md:text-[32px] font-extrabold text-center leading-snug text-[#0F172A]">
            Welcome To <span className="text-[#5380EA]">AJAIX</span>
            <br />
            Technologies
           </h1>
		</div>

		<div className="flex flex-col items-center justify-center w-full max-w-[850px] mt-24 md:mt-6 px-2 sm:px-0 py-6">
			<p className="text-center text-base sm:text-lg font-medium">
				We specialize in creating cutting-edge <span className="font-bold">web applications</span>, <span className="font-bold">mobile apps</span>, and <span className="font-bold">custom software solutions</span>  
				<br  className="hidden md:block"/> that drive business growth and innovation.
        	 </p>

			<Link href="/#">
				<button className="bg-[#0A0F2D] text-white px-6 py-2 my-6 rounded-md hover:bg-[#1C2541] transition-colors duration-300 text-sm sm:text-base">
					Get Started
				</button>
	     	</Link>

			 <Image
				src="/Vector.svg"
				alt="mouse"
				width={30}
				height={30}
				className="md:mb-12 "
			/>
		</div>

	</div>
	</>
  );
};

export default Hero;
