import About from "./components/sections/About";
import ContactUs from "./components/sections/ContactUs";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials"; 

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
