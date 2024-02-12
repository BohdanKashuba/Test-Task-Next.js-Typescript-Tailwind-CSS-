import Link from "next/dist/client/link";
import Image from "next/image";

import HeroLogo from "../../assets/images/splash.png";

const Hero = () => {
  return (
    <div className="flex mb-6 flex-col items-center">
      <h2 className="italic">Pinapple Store</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Image src={HeroLogo} alt="Give thanks" className="w-[150px] mt-5" />
      <Link href="/thanks">
        <button className="h-10 py-2 px-5 mt-5 border-none text-sm rounded-3xl text-white bg-orange-200 transition-all hover:bg-orange-400 focus:bg-orange-400">
          Give thanks
        </button>
      </Link>
    </div>
  );
};

export default Hero;
