import Image from "next/image";
import { ServicesTitle } from "@/components/ServicesTitle";

export const Services = () => {
  return (
    <section className="relative h-full">
      <video
        src="/mar.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 z-0"
      ></video>
      <div className="relative w-full h-100">
        <ServicesTitle />
        <div className="flex justify-end z-2   border-x-black border-x-10 border-y-5 border-y-black">
          <div className="w-2/3 bg-black pl-2">
            <h2 className="text-white text-2xl">
              PROFISSIONAIS QUE ESTÃO COMEÇANDO UM NEGOCIO.
            </h2>
          </div>
        </div>
        <div className="bg-black px-2 py-4 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor sapien libero, eget tincidunt mi porta vitae. Mauris
            vestibulum, eros quis dictum finibus, nisi leo faucibus neque, sit
            amet cursus enim purus vitae augue. Nunc fermentum nulla quis arcu
            malesuada, nec convallis felis sodales.
          </p>
        </div>
        <div className="flex justify-start z-2   border-x-black border-x-10 border-b-black border-b-10">
          <div className="w-2/3 bg-white pt-10 pl-2">
            <h2 className="text-black text-2xl">MEU PERFIL! QUERO SABER +</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
