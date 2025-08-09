import Image from "next/image";
import logo from "./mobileHeaderLogo.svg";

export const HeaderMobileLogo = () => {
  return (
    <div className="flex  z-1">
      <div className=" relative overscroll-none w-full h-12">
        <video
          src="/nuvens.mp4"
          // height={100}
          // width={100}
          muted
          autoPlay
          loop
          className="absolute bottom-0 left-0 z-0 w-full h-full object-cover"
        ></video>
        <div className="relative flex w-full bottom-0">
          <div className="border-r-10 border-black relative bottom-0 h-full">
            <Image
              src={"/beacon.png"}
              width="120"
              height="120"
              className="relative object-cover object-right h-auto w-auto"
              alt="Beacon header logo"
            />
          </div>
          {/* <div className=" w-40">
            <svg
              className={"h-full"}
              viewBox="0 0 100 34"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <mask id="knockout-text-3">
                  <rect width="100%" height="100%" fill="#fff" />
                  <text
                    x="0"
                    y="20"
                    fill="#000"
                    fontSize="21.7"
                    fontFamily="Archivo Black"
                    textAnchor="start"
                    letterSpacing="-0.5"
                  >
                    BEACON
                  </text>
                </mask>
              </defs>
              <rect
                className="knockout-text-bg"
                width="100%"
                height="100%"
                fill="#000"
                mask="url(#knockout-text-3)"
              />
              <text
                x="1"
                y="29.2"
                fill="#FFF"
                fontSize="7"
                fontFamily="Archivo Black"
                textAnchor="start"
                letterSpacing="-0.5"
              >
                THE
              </text>
              <text
                x="98"
                y="27.2"
                fill="#FFF"
                fontSize="7"
                fontFamily="Archivo Black"
                textAnchor="end"
                letterSpacing="-0.5"
              >
                STUDIO
              </text>
            </svg>
          </div> */}
          <Image src={logo} alt="Logo text" />
        </div>
      </div>
    </div>
  );
};
