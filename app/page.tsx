import { Nav } from "@/components/Nav";
import { Utilities } from "@/components/Utilities";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Bootcamp } from "@/components/sections/Bootcamp";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <Utilities />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Bootcamp />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
