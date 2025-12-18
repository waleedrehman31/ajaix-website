"use client";

import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-[#E8E9FE] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="./Assistantbot.svg"
              alt="Register Interest Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Form Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

              {/* Title */}
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                Register interest
              </h2>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Use the form below to contact us. Please be as detailed and
                precise as possible. Include your industry and specific
                requests. To help us get to know and serve you better, you
                can also give us a good description of who you are, your first
                name and a valid email or send us a WhatsApp to make an
                appointment.
              </p>

              {/* Form */}
              <form className="space-y-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message here"
                    className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-2 rounded-full bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  Submit
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
