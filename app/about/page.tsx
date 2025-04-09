import AvatarComponent from "@/components/avatar";
import Information from "@/components/information";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full max-w-6xl mx-auto px-4 pt-24">
      <section>
        <AvatarComponent />
      </section>
      <section className="w-full">
        <Information />
      </section>
    </section>
  );
}
