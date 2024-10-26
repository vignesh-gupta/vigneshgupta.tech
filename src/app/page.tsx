import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/hero.svg" alt="hero" width={500} height={500} />
    </div>
  );
}
