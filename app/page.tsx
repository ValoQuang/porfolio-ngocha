import { Nav } from "@/components/Nav";
import { Utilities } from "@/components/Utilities";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Experience } from "@/components/sections/Experience";
import { Bootcamp } from "@/components/sections/Bootcamp";
import { Skills } from "@/components/sections/Skills";
import { Voices } from "@/components/sections/Voices";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <Utilities />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Experience />
        <Bootcamp />
        <Skills />
        <Voices />
        <Contact />
      </main>
    </>
  );
}
