import Image from "next/image";
import { NavigationLinks } from "./navigation-links";
import { Contacts } from "./contacts";

export function Header() {
  return (
    <header className="container mx-auto flex justify-between py-5">
      <Image
        src="/logo.png"
        alt="My Website Logo"
        height={200}
        width={200}
        className="w-auto h-[30px] md:h-[45px] my-auto mx-[20px]"
      />
      <NavigationLinks />
      <Contacts />
    </header>
  );
}
