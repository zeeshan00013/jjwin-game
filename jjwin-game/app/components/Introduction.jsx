import { DownloadIcon } from "lucide-react";
import jjwin from "../Images/jjwin.webp";
import Link from "next/link";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-10 text-center text-white flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">
        JJWin: The Most Trusted App to Earn Real Money While Gaming!
      </h1>
      <p className="text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
        Do you dream of winning real money while playing exciting games? JJ Win
        makes it happen! Finding a safe gaming app can be hard because many apps
        aren’t trustworthy. But JJ Win is different. It’s a fun, secure real
        money casino app where you can play top online casino games like slots
        and card games. Plus, you get daily rewards, fast cashouts, and strong
        safety features. So, why wait? Let’s explore how JJ Win helps you have
        fun and win big in Pakistan! Start your online casino Pakistan adventure
        today.
      </p>
      <Link
        href={"https://www.jjwin.game/?dl=$blac6z$PKR$2"}
        className="w-full"
      >
        <button className="cursor-pointer w-full mt-5  gap-2 bg-green-600 text-white px-4 py-2 rounded-lg  transition duration-300 flex items-center justify-center">
          Download Now <DownloadIcon />
        </button>
      </Link>
      <div className="relative w-full h-96 md:h-128 lg:h-160 mt-6">
        <Image
          src={jjwin}
          alt="JJWin"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Introduction;
