import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const DownloadAndRegister = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12  text-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          How to Download and Register on JJ Win
        </h2>
      </div>

      <div className="space-y-5">
        <div className="border-[#059e19] border p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Download the App</h3>
          <p className="text-sm md:text-base leading-relaxed">
            For Android, search{" "}
            <a href="jjwingame.download" className="underline text-blue-600">
              jjwin game download
            </a>{" "}
            on Google get the safe method app download from the official
            website. For iOS, visit the same site. Always use trusted sources to
            stay safe.
          </p>
        </div>

        <div className="border-[#059e19] border p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Create an account with your email, phone number, or social media. It
            only takes a minute!
          </p>
        </div>

        <div className="border-[#059e19] border p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Add Security</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Turn on two-factor authentication (2FA) to keep your account extra
            safe.
          </p>
        </div>

        <div className="border-[#059e19] border p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center text-center">
          <p className="text-sm md:text-base leading-relaxed">
            After signing up, you can try free casino games or claim a welcome
            bonus. So, download{" "}
            <Link href={"https://www.jjwin.game/?dl=$blac6z$PKR$2"}>JJWin</Link>{" "}
            now and start playing in Pakistan!
          </p>
        </div>
        <Link
          href={"https://www.jjwin.game/?dl=$blac6z$PKR$2"}
          className="w-full"
        >
          <button className="cursor-pointer w-full mt-5  gap-2 bg-green-600 text-white px-4 py-2 rounded-lg  transition duration-300 flex items-center justify-center">
            Register Nnow <DownloadIcon />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DownloadAndRegister;
