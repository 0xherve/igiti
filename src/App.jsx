import { Element } from "react-scroll";
import { OurTeam, Hero,
PopularProducts, Services, SuperQuality} from "./sections";
import Reviews from "./sections/Reviews";

const App = () =>(
<main className="relative ">
    <Element name="hero" className="padding-x">
      <Hero/></Element>
      <Element name="products" className="px-2 py-12 bg-pale-blue mt-8">
        <PopularProducts/>
      </Element>
      <Element name="about-us" className="padding">
        <SuperQuality/>
      </Element>
      <Element name='services' className="padding-x py-3 mb-8">
        <Services/>
      </Element>
      <Element name="team" className="px-4 py-8 bg-pale-blue">
        <OurTeam/>
      </Element>
      <Element name="review" className="padding-x max-md:px-2.5 py-12 w-full">
        <Reviews/>
      </Element>
      
  </main>
)
export default App;