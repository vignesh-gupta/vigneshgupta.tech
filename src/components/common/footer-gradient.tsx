import Image from "next/image";

const FooterGradient = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[550px] -z-50">
      <div className="relative h-full w-full overflow-hidden">
        <picture className="absolute bottom-0 left-1/2 block h-[550px] w-full blur-3xl -translate-x-1/2 translate-y-5 select-none">
          <Image src="/footer-gradient.svg" alt="hero gradient" fill />
        </picture>
      </div>
    </div>
  );
};

export default FooterGradient;
