import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { github, wa } from "./assets";

const App = () => {
  return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="fixed bottom-10 left-10">
					<a href="https://www.github.com/jopaleti">
						<img src={github} alt="img.jpg" className="w-16 h-16" />
					</a>
				</div>
				<div className="fixed bottom-10 right-10">
					<a href=" https://wa.me/08108603111">
						<img src={wa} alt="img.jpg" className="w-16 h-16" />
					</a>
				</div>
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
