import Image from "next/image";
import { NavigationLinks } from "./navigation-links";
import { Contacts } from "./contacts";
import Link from "next/link";
import { NavigationLinksMobile } from "./navigation-links-mobile";

export function Header({ locale }: { locale: string }) {
  return (
    <header className="w-full max-w-[2000px] h-25 items-center mx-auto flex justify-between py-5">
      <Link href={`/${locale}`} aria-label="Go to homepage" className="block">
        <Image
          src="/logo.png"
          alt="Indevix Logo"
          width={200}
          height={200}
          className="h-[30px] md:h-[45px] w-auto my-auto mx-[20px]"
          priority
        />
      </Link>
      <NavigationLinks />
      <div className="flex items-center">
        <Contacts />
        <NavigationLinksMobile />
      </div>
    </header>
  );
}
