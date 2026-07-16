import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGroups from "@/components/ProductGroups";
import Application from "@/components/Application";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductGroups />
        <Application />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
