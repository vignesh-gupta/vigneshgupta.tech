import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      data-cy='hero'
      className='flex w-full flex-col justify-center gap-3 pt-5 md:flex-row md:justify-start md:pt-10'
    >
      <div id='hero-img' className='relative flex items-start justify-center'>
        <Image
          src='/radiant-circle.svg'
          alt='Vignesh Gupta'
          className='blur-lg'
          width={300}
          height={300}
        />
        <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
          <Image
            priority
            src='/hero.png'
            alt='Vignesh Gupta'
            width={200}
            height={200}
          />
        </div>
      </div>

      <div id='hero-content' className='flex flex-col justify-evenly'>
        <p className='md:-mb-7'>
          Hello I&apos;m
          <span className='text-accent'> Vignesh Gupta</span>
        </p>

        <div className='md:ml-7'>
          <p>An Engineer who...</p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl'>
            Loves to <br />
            <span className='text-accent'>solve problems</span>...
          </h2>
          <p className='text-sm'>
            Because if there is no problem then what’s there to engineer?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
