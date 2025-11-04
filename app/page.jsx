import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<About />
			<ContactUs />
		</main>
	);
}
