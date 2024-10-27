import Link from "next/link";
import HeroImage from "./hero-image";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-3 py-32">
      <div className="flex flex-col gap-y-10 lg:text-left text-center lg:col-span-2 ">
        <div>
          <span className="text-lg md:text-xl lg:text-2xl text-muted font-semibold">
            Hey there 👋
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted">
            I&apos;m <span className="text-primary">Vignesh Gupta</span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted text-pretty">
          A Self-taught Developer, functioning in the industry for 2+ years now.
          I&apos;m a passionate learner who&apos;s always willing to learn and
          work across technologies and domains. I love to explore new
          technologies and leverage them to solve real-life problems.
        </p>
        <div className="flex items-center gap-x-3 md:flex-row flex-col ">
          <Link
            href={"/"}
            className="cursor-pointer rounded-lg flex justify-center items-center bg-gradient min-h-[60px] px-8 py-4 primary-button hover:translate-y-[-1px] dark:text-muted text-white hover:text-white active:translate-y-[1px] font-medium transition duration-300 w-full lg:w-fit"
          >
            See my resume
          </Link>
          <Link
            href={"/"}
            className="cursor-pointer rounded-lg flex justify-center items-center bg-onyx min-h-[60px] px-8 py-4  hover:translate-y-[-1px] dark:text-muted text-white hover:text-white active:translate-y-[1px] font-medium transition duration-300 w-full lg:w-fit"
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className="hidden lg:block h-full">
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;