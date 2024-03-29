import AboutSection from '@/components/sections/About';
import ExperienceSection from '@/components/sections/Experience';
import HeroSection from '@/components/sections/Hero';
import SkillsSection from '@/components/sections/Skills';

const AboutPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <p className='w-full text-center text-xl md:text-2xl lg:text-3xl'>
        I&apos;m good with
        <span className='text-accent'> these techs</span>
        <span className='block text-base md:text-lg'>
          to build some awesome stuff
        </span>
      </p>
      <SkillsSection />
    </div>
  );
};

export default AboutPage;
