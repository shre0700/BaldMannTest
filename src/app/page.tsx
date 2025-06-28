"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";

const Home: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-section",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: "power2.out" }
    );

    gsap.to(".hero-image", {
      scale: 1.1,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>BaldMann | Welcome to Baldmann.in</title>
        <meta
          name="description"
          content="BaldMann is moving to Baldmann.in. Join the bold, bald revolution!"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          async
        />
      </Head>
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[#eacbedcc] transform -rotate-12 md:-rotate-15 origin-bottom-left"></div>
          <div className="absolute w-full h-full bg-[#FFD700] drop-shadow-2xl transform rotate-12 md:rotate-15 origin-top-right"></div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-12 xl:p-16 w-full">
          <div className="hero-section text-center md:text-left max-w-lg z-10 mb-8 md:mb-0 md:mr-12 xl:mr-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              <span className="line-through text-black">baldmann.xyz</span>
            </h1>
            <p className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold mb-6 line-clamp-none">
              baldmann.in
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl whitespace-nowrap mb-6">
              WE HAVE SHIFTED OUR DOMAIN
            </p>
            <a
              href="https://baldmann.in"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-[#eacbedcc] drop-shadow-lg text-black font-bold rounded-full hover:bg-gold-100 transition-all transform hover:scale-105"
            >
              Take Me There
            </a>
          </div>

          <div className="hero-image flex-none w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[600px] xl:h-[600px] relative mt-8 md:mt-0 md:ml-12 xl:ml-20 z-10">
            <Image
              src="/brain.png"
              alt="Baldmann.in Domain Illustration"
              fill
              className="rounded-lg"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <footer className="absolute bottom-4 text-xs sm:text-sm md:text-base text-center text-black opacity-75 w-full z-10">
          <p>© 2025 BaldMann. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
