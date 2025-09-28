"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Code, Briefcase, Users } from "lucide-react";

export default function NotFoundPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/en");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden py-15">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/10 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-32 w-48 h-48 border border-white/5 rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-32 h-32 border border-white/15 rounded-full animate-pulse animation-delay-2000" />

        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="text-center z-10 max-w-3xl mx-auto">
        <div className="mb-12 animate-bounce">
          <Link href="/en" className="inline-block">
            <Image
              src="/logo.png"
              alt="Indevix Logo"
              width={300}
              height={300}
              className="w-auto h-16 md:h-20 mx-auto opacity-90 hover:opacity-100 transition-all duration-500 filter brightness-0 invert"
              priority
            />
          </Link>
        </div>

        <div className="mb-12 relative">
          <h1 className="font-tektur text-8xl md:text-9xl lg:text-[14rem] font-black text-white leading-none tracking-tight animate-fadeInScale">
            404
          </h1>
          <div className="absolute inset-0 font-tektur text-8xl md:text-9xl lg:text-[14rem] font-black text-white/5 animate-pulse leading-none tracking-tight translate-x-2 translate-y-2">
            404
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-white/30 animate-expand" />
        </div>

        <div className="mb-16 space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white animate-fadeInUp">
            PAGE NOT FOUND
          </h2>
          <div className="w-24 h-px bg-white mx-auto animate-fadeInUp animation-delay-300" />
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed animate-fadeInUp animation-delay-500">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to another location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animation-delay-700">
          <button
            onClick={handleGoBack}
            className="group px-8 py-4 bg-white text-black font-semibold rounded-none border-2 border-white hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/20 min-w-[160px]"
          >
            <div className="flex items-center justify-center gap-3">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              GO BACK
            </div>
          </button>

          <Link
            href="/en"
            className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-none hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/20 min-w-[160px]"
          >
            <div className="flex items-center justify-center gap-3">
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              HOME
            </div>
          </Link>
        </div>

        <div className="mt-20 animate-fadeInUp animation-delay-1000">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
            EXPLORE OUR SERVICES
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/en#services"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Code className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm uppercase tracking-wide">
                Development
              </span>
            </Link>
            <Link
              href="/en#projects"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm uppercase tracking-wide">Projects</span>
            </Link>
            <Link
              href="/en#team"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm uppercase tracking-wide">Team</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
