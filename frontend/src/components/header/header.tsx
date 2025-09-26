import Image from "next/image";
import Link from "next/link";
import { NavigationLinks } from "./navigation-links";
import { Contacts } from "./contacts";
import { NavigationLinksMobile } from "./navigation-links-mobile";

export default function Header({ locale }: { locale: string }) {
  return (
    <header className="w-full container h-20 items-center mx-auto flex justify-between py-5 fixed center top-0 left-0 right-0 z-20 bg-background/95">
      <Link href={`/${locale}`} aria-label="Go to homepage" className="block">
        <Image
          src="/logo.png"
          alt="Indevix - IT Services & Web Development Company Logo"
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
