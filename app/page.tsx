import { Hero } from "@/components/ui/hero";
import { About } from "@/components/sections/about";
import { Research } from "@/components/sections/research";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Research />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
