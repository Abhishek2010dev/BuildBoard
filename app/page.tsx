import Hero from "@/components/hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <section>
        <div className="hidden md:block">
          <BackgroundBeams />
        </div>
        <Hero />
      </section>
    </>
  );
}
