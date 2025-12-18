"use client";

import React from "react";
import { motion } from "framer-motion";

/* ===========================
   TESTIMONIAL DATA
=========================== */

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Our online presence and conversions significantly improved.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

/* ===========================
   COLUMN COMPONENT (INLINE)
=========================== */

const TestimonialsColumn = ({ testimonials, duration = 12, className = "" }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((loopIndex) => (
          <React.Fragment key={loopIndex}>
            {testimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="w-full max-w-xs rounded-3xl border bg-white p-6 shadow-lg"
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.text}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

/* ===========================
   MAIN TESTIMONIALS SECTION
=========================== */

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-sm text-center space-y-4">
          <span className="inline-block rr px-4 py-1 text-lg font-bold">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            What our users say
          </h2>
          <p className="text-sm text-gray-600">
            See what our customers have to say about us.
          </p>
        </div>

        {/* Columns */}
        <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">

          <TestimonialsColumn testimonials={firstColumn} duration={16} />

          <TestimonialsColumn
            testimonials={secondColumn}
            duration={20}
            className="hidden md:block"
          />

          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={18}
            className="hidden lg:block"
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
