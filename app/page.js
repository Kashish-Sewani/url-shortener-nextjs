import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold text-center ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-24 text-center">
            Our focus is on user-friendly, private, and secure link shortening. Many URL shorteners require you to sign up or sacrifice privacy, but we keep things simple, so you can shorten links without worry.
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-600 rounded-lg p-3 font-bold py-2 text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-600 rounded-lg p-3 font-bold py-2 text-white'>GitHub</button></Link>
          </div>

        </div>
        <div className="flex justify-start relative ">
          <Image alt="Vector Image" src={"/vector.jpg"} fill={true} className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
