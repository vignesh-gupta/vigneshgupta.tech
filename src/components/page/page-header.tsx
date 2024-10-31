type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ subtitle, title }: PageHeaderProps) => {
  return (
    <>
      <div className="py-16 pt-32 px-4 container max-w-[1024px] mx-auto">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
          {title}
        </h1>
        <p className="my-4 text-base text-muted/60 md:text-2xl">
          {subtitle}
        </p>
      </div>
      <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
    </>
  );
};

export default PageHeader;
