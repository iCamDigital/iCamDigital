import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <Image
        src="/images/logo/logo.png"
        height={70}
        width={70}
        alt="logo"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
