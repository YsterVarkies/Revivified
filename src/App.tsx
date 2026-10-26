import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Intro from '@/sections/Intro';
import TreatmentMenu from '@/sections/TreatmentMenu';
import Academy from '@/sections/Academy';
import Boutique from '@/sections/Boutique';
import Retail from '@/sections/Retail';
import Reviews from '@/sections/Reviews';
import Visit from '@/sections/Visit';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <TreatmentMenu />
        <Academy />
        <Boutique />
        <Retail />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
