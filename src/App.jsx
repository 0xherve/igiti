import { Element } from "react-scroll";
import { OurTeam, Hero,
PopularProducts, Services, SuperQuality, Sponsors} from "./sections";
import Reviews from "./sections/Reviews";

const App = () =>(
  <main className="relative min-h-screen overflow-x-hidden">
    <Element name="hero">
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
      <Element name="sponsors" className="px-4 py-8 bg-pale-blue">
        <Sponsors/>
      </Element>
      <Element name="review" className="py-12">
        <Reviews/>
      </Element>
  </main>
)
export default App;