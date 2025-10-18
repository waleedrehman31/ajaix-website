import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";

export default function Home() {
	return (
		<div className=" bg-gradient-to-tl from-violet-100 to-blue-100  ">
			<Navbar />
			<main>
				<Hero />
				<Services />
				<About />
				<ContactUs />
				<Footer />
			</main>
		</div>
	);
}
