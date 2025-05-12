import { DownloadIcon } from "lucide-react";
import jjwin from "../Images/jjwinbanner.webp";
import Link from "next/link";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 p-5">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-3xl   md:text-5xl leading-tight mb-6 text-[#ffed22] font-semibold">
            JJ Win Game Download New Version - Earn Real Money App
          </h1>
          <p className="text-lg ">
            Do you love playing games and also want to earn real money while
            doing it? If yes, then this Game is perfect for you. It’s a fun and
            easy-to-use mobile app that lets you enjoy exciting games and win
            real cash at the same time. Whether you’re just starting out or
            already a gaming pro, this app is made for everyone. you're not just
            playing for fun you’re playing to win. Ready to turn your game time
            into earnings? Download the JJ Win Game now and get started today!
          </p>
          <a
            href="https://www.jjwin.game/?dl=$blac6z$PKR$2"
            className="inline-flex items-center justify-center bg-[#09f801] hover:bg-[#e1e3e2] text-[#ffffff] text-lg font-semibold px-8 py-3 rounded-2xl shadow-md transition mt-5 gap-2 w-full"
          >
            DOWNLOAD <DownloadIcon />
          </a>
        </div>

        <div className=" flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={jjwin}
              alt="jj win game "
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
