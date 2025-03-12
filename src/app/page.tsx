// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Donate from "./donate";
import Involved from "./involved";
import Overview from "./overview";
import Privacy from "./privacy";
import Services from "./services";
import GetHelp from "./gethelp";
import AboutUs from "./about";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Overview />
      <Privacy />
      <Services id="services"/>
      <GetHelp id="help"/>
      <AboutUs id="about"/>
      <Involved/>
      <Donate/>
      <ContactForm id="contact" />
      <Footer />
    </>
  );
}
