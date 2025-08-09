import Image from "next/image";
import { BurgerMenu } from "../BurgerMenu";
import { archivoBlack } from "@/app/layout";
import { HeaderMobileLogo } from "@/components/HeaderMobileLogo";

export default function HeaderMobile() {
  return (
    <header
      className={`flex justify-between px-4 fixed bg-black w-full items-center top-0 text-white py-2 overscroll-none`}
    >
      <HeaderMobileLogo />
      <div className={""}>
        <BurgerMenu width={40} />
      </div>
    </header>
  );
}
