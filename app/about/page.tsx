import AvatarComponent from "@/components/avatar";
import Information from "@/components/information";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start w-full max-w-6xl mx-auto px-4 pt-24">
      <AvatarComponent />
      <Information />
    </div>
  );
}
