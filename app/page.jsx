import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<About />
			<Portfolio />
			<Testimonials />
			<ContactUs />
		</main>
	);
}
