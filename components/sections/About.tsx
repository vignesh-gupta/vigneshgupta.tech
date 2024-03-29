'use client';

const AboutSection = () => {
  return (
    <section data-cy='about' className='mt-10' id='aboutMe'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl'>
        I&apos;m a <span className='text-accent'>Full Stack Developer</span>
      </h1>
      <p>
        Currently, I&apos;m a Software Engineer at
        <span className='text-accent'> HCLTECH</span>.
      </p>

      <p className='mt-10 md:w-5/6'>
        A Self-taught Developer, functioning in the industry for 2+ years now.
        I&apos;m a passionate learner who&apos;s always willing to learn and
        work across technologies and domains. I love to explore new technologies
        and leverage them to solve real-life problems.
      </p>
    </section>
  );
};

export default AboutSection;
