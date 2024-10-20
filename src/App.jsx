import { Element } from "react-scroll";
import { OurTeam, Hero,
PopularProducts, Services, SuperQuality} from "./sections";
import Reviews from "./sections/Reviews";

const App = () =>(
<main className="relative mx-1">
    <Element name="hero" className="xl:padding-l wide:padding-r padding-b">
      <Hero/></Element>
      <Element name="products" className="padding bg-pale-blue mt-12">
        <PopularProducts/>
      </Element>
      <Element name="about-us" className="padding">
        <SuperQuality/>
      </Element>
      <Element name='services' className="padding-x py-3 mb-8">
        <Services/>
      </Element>
      <Element name="team" className="padding bg-pale-blue">
        <OurTeam/>
      </Element>
      <Element name="review" className="padding-x max-md:px-2.5 py-12 w-full">
        <Reviews/>
      </Element>
      
  </main>
)
export default App;