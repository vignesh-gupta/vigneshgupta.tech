import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';

type ProjectProps = {
  title: string;
  isEven: boolean;
  description: string;
  imgUrl: string;
  projectLink: string;
  codeLink: string;
  isFeatured: boolean;
};

const Project = ({
  isEven,
  title,
  description,
  imgUrl,
  codeLink,
  projectLink,
  isFeatured,
}: ProjectProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-1',
        isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
    >
      <div
        className={clsx(
          'flex w-full shrink flex-col items-stretch md:basis-[85%] lg:basis-[90%] lg:py-12',
          isEven && 'lg:items-end'
        )}
      >
        <p className={clsx('font-bold text-accent', !isFeatured && 'hidden')}>
          Featured Project
        </p>
        <h4 className='text-secondary-text text-3xl'>{title}</h4>

        <div
          className={clsx(
            ' z-10 flex w-full flex-col gap-3 self-start rounded-md  bg-blue-300 bg-opacity-10 p-6 backdrop-blur-lg backdrop-filter lg:w-[calc(100%+3rem)] ',
            isEven ? 'lg:-ml-12' : 'lg:-mr-12'
          )}
        >
          <p>{description}</p>
          <div
            className={clsx(
              'flex items-center gap-3',
              isEven && 'lg:justify-end'
            )}
          >
            <Link
              href={projectLink}
              target='_blank'
              className='my-1 flex w-fit gap-2 rounded-lg border-4 border-[#693B93] bg-secondary px-4 py-2  text-xs'
            >
              <BsBoxArrowUpRight /> Live site
            </Link>

            <Link
              href={codeLink}
              target='_blank'
              className='my-1 flex w-fit gap-2 rounded-lg border-4 border-[#693B93] bg-secondary px-4 py-2  text-xs'
            >
              <BsGithub /> GitHub Repo
            </Link>
          </div>
        </div>
      </div>

      <div className='relative w-full  flex-grow basis-auto rounded-lg bg-secondary p-6 lg:p-10'>
        {/* <div
          className={clsx(
            'radial-gradient absolute top-0 hidden h-full w-full rounded-full blur-sm brightness-50 lg:block',
            isEven ? '-left-1/3 ' : 'left-1/3'
          )}
        /> */}
        <Image
          src={imgUrl}
          className='h-full w-full transform rounded-lg object-cover shadow-xl'
          alt='project name'
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Project;
