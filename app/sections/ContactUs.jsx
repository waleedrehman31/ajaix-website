import React from "react";
import SectionBadge from "../components/SectionBadge";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const contacts = [
	{
		icon: <Mail className="w-6 h-6 text-blue-600 " />,
		title: "Email",
		value: "info@ajaix.com",
		description: "We'll respond within 24 hours",
	},
	{
		icon: <Phone className="w-6 h-6 text-blue-600 " />,
		title: "Call Us",
		value: "+92 336 0441222",
		description: "Monday to Friday, 9AM - 6PM EST",
	},
	{
		icon: <MapPin className="w-6 h-6 text-blue-600 " />,
		title: "Visit Us",
		value: "Office No 1, 3rd Floor Rehman Plaza",
		description: "Abbottabad Road, Mansehra, Pakistan",
	},
	{
		icon: <Clock className="w-6 h-6 text-blue-600 " />,
		title: "Business Hours",
		value: "Monday - Saturday: 9AM - 6PM",
		description: "Friday: 10AM - 4PM EST",
	},
];

const ContactUs = () => {
	return (
		<section id="contact-us">
			<div className="overflow-hidden  py-20 md:py-10 ">
				<div className="max-w-7xl mx-auto px-6 md:px-12 content-center items-center gap-12  relative z-10">
					<div className="text-center mb-16">
						<SectionBadge content="📞 Get In Touch" />
						<h2
							className="text-3xl md:text-4xl font-bold text-gray-900 mb-4
            "
						>
							Ready to Start Your Project?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Let's discuss your ideas and turn them into reality. Get in touch
							with our team for a free consultation and project estimate.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						<div className="lg:col-span-2">
							<div className="bg-white flex flex-col gap-6 rounded-xl border-0 shadow-xl">
								<div className="grid auto-rows-min grid-rows-auto items-start gap-1.5 px-6 pt-6 ">
									<h4 className="text-2xl font-bold text-gray-900 flex items-center">
										<MessageCircle className="h-6 w-6 mr-2 text-blue-600" />
										Send Us a Message
									</h4>
								</div>
								<div className="px-6 [&:last-child]:pb-6">
									<form action="" className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<label
													htmlFor="full_name"
													className="block text-sm font-medium text-gray-700 mb-2"
												>
													Full Name <span className="text-red-900">*</span>
												</label>
												<input
													id="full_name"
													name="full_name"
													type="text"
													placeholder="Your Full Name"
													required
													className=" placeholder:text-muted selection:bg-primary selection:text-primary-foreground  border-none flex h-9 min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none  md:text-sm focus-visible:border-ring focus-visible:ring-gray-300 focus-visible:ring-[3px] w-full"
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700 mb-2"
												>
													Email <span className="text-red-900">*</span>
												</label>
												<input
													id="email"
													name="email"
													type="email"
													placeholder="your@email.com"
													required
													className=" placeholder:text-muted selection:bg-primary selection:text-primary-foreground  border-none flex h-9 min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none  md:text-sm focus-visible:border-ring focus-visible:ring-gray-300 focus-visible:ring-[3px] w-full"
												/>
											</div>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<label
													htmlFor="company_name"
													className="block text-sm font-medium text-gray-700 mb-2"
												>
													Company Name
												</label>
												<input
													id="company_name"
													name="company_name"
													type="text"
													placeholder="Your Company Name"
													className=" placeholder:text-muted selection:bg-primary selection:text-primary-foreground  border-none flex h-9 min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none  md:text-sm focus-visible:border-ring focus-visible:ring-gray-300 focus-visible:ring-[3px] w-full"
												/>
											</div>
											<div>
												<label
													htmlFor="services_needed"
													className="block text-sm font-medium text-gray-700 mb-2"
												>
													Service Needed <span className="text-red-900">*</span>
												</label>
												<select
													name="services_needed"
													id="services_needed"
													placeholder="Your Company Name"
													required
													className="placeholder:text-muted selection:bg-primary selection:text-primary-foreground  border-none flex h-9 min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none  md:text-sm focus-visible:border-ring focus-visible:ring-gray-300 focus-visible:ring-[3px] w-full"
												>
													<option value="Web Development">
														Web Development
													</option>
													<option value="mobile-apps">
														Mobile App Development
													</option>
													<option value="consulting">
														Software Consulting
													</option>
													<option value="ui-ux">UI/UX Design</option>
													<option value="cloud-devops">
														Cloud &amp; DevOps
													</option>
													<option value="data-analytics">Data Analytics</option>
													<option value="other">Other</option>
												</select>
											</div>
										</div>
										<div>
											<label
												htmlFor="project_budget"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Project Budget
											</label>
											<select
												name="project_budget"
												id="project_budget"
												placeholder="Project Budget"
												required
												className="placeholder:text-muted selection:bg-primary selection:text-primary-foreground  border-none flex h-9 min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none  md:text-sm focus-visible:border-ring focus-visible:ring-gray-300 focus-visible:ring-[3px] w-full"
											>
												<option value=""></option>
												<option value="5k-10k">$5,000 - $10,000</option>
												<option value="10k-25k">$10,000 - $25,000</option>
												<option value="50k-100k">$50,000 - $100,000</option>
												<option value="100k+">$100,000+</option>
												<option value="discuss">Let's Discuss</option>
											</select>
										</div>
										<div>
											<label
												htmlFor="project_detail"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Project Details <span className="text-red-900">*</span>
											</label>
											<textarea
												name="project_detail"
												id="project_detail"
												placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
												required
												className="placeholder:text-muted selection:bg-primary selection:text-primary-foreground  border-none flex min-w-0 rounded-md border px-3 py-1 text-base bg-gray-100 transition-[color,box-shadow] outline-none  md:text-sm focus-visible:border-ring focus-visible:ring-gray-300 focus-visible:ring-[3px] w-full h-32 resize-none"
											></textarea>
										</div>
										<button className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all outline-none h-10 rounded-md px-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
											Send Message
											<Send className="w-5 h-5 ml-2" />
										</button>
										<p className="text-sm text-gray-500 text-center">
											By submitting this form, you agree to our privacy policy
											and terms of service.
										</p>
									</form>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							{contacts.map((contact, index) => (
								<div
									className="bg-white flex flex-col gap-6 rounded-xl border-0 shadow-md hover:shadow-lg transition-shadow"
									key={index}
								>
									<div className="p-6">
										<div className="flex  space-x-4">
											<div className="flex-shrink-0">
												<div className="flex w-12 h-12 bg-blue-100 rounded-lg items-center justify-center">
													{contact.icon}
												</div>
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													{contact.title}
												</h3>
												<p className="text-gray-900 mb-1">{contact.value}</p>
												<p className="text-gray-500 text-sm">
													{contact.description}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
