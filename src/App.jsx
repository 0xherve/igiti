import Navbar from "./components/Navbar";
import { OurTeam,Footer, Hero,
PopularProducts, Services, SuperQuality, Contact} from "./sections";

const App = () =>(
<main className="relative mx-3">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/></section>
      <section className="padding bg-pale-blue max-xl:mt-16">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding bg-pale-blue">
        <OurTeam/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Contact/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer/>
      </section>
  </main>
)
export default App;