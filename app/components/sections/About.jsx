"use client";

import React from "react";
import Image from "next/image";
import {
  Briefcase,
  Users,
  Clock,
  BadgeCheck,
} from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#E8E9FE] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">
            Thank You For Your Interest In Us!
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Passionate About Building Excellence
          </h1>

          <p className="text-gray-600 leading-relaxed">
            We're a team of dedicated software engineers, designers, and
            consultants committed to transforming businesses through innovative
            technology solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Crafting Digital Solutions That Drive Success
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2016, Ajaix has evolved from a small startup into a
              global tech company. We specialize in creating scalable,
              intuitive, and high-performance applications that empower
              businesses to thrive in the digital age.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team combines deep technical expertise with design innovation
              to build products that not only look great but also deliver
              measurable results.
            </p>

           
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <Image
              src="/about-pic.svg"
              alt="Web Development Illustration"
              width={450}
              height={350}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
  
  {/* Card 1 */}
  <div className="group bg-blue-100 rounded-xl p-6 text-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600 transition">
      <Briefcase className="text-blue-600 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-gray-900">Projects</h3>
    <p className="text-gray-600">65+</p>
  </div>

  {/* Card 2 */}
  <div className="group bg-blue-100 rounded-xl p-6 text-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600 transition">
      <Users className="text-blue-600 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-gray-900">Clients</h3>
    <p className="text-gray-600">30+</p>
  </div>

  {/* Card 3 */}
  <div className="group bg-blue-100 rounded-xl p-6 text-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600 transition">
      <Clock className="text-blue-600 group-hover:text-white" />
    </div>
    <h3 className="font-semibold text-gray-900">Experience</h3>
    <p className="text-gray-600">7+ Years</p>
  </div>

  {/* Card 4 */}
	<div className="group bg-blue-100 rounded-xl p-6 text-center transition-all duration-300 			hover:-translate-y-1 hover:shadow-lg">
		<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-100 	group-hover:bg-blue-600 transition">
			<BadgeCheck className="text-blue-600 group-hover:text-white" />
		</div>
		<h3 className="font-semibold text-gray-900">
				99%
		</h3>
			<p className="text-gray-600">
				Client Satisfaction
		</p>
	</div>

</div>


      </div>
    </section>
  );
};

export default About;
