export const ServicesTitle = () => {
  return (
    <svg
      className={""}
      viewBox="0 0 100 34"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="knockout-text-services">
          <rect width="50%" height="100%" fill="#fff" />
          <text
            x="2"
            y="29"
            fill="#000"
            fontSize="18"
            fontFamily="Archivo Black"
            textAnchor="start"
            letterSpacing="-0.5"
          >
            ÇOS
          </text>
        </mask>
        <mask id="knockout-text-services-2">
          <rect width="100%" height="100%" fill="#fff" />
          <text
            x="50"
            y="28"
            fill="#000"
            fontSize="7"
            fontFamily="Archivo Black"
            textAnchor="start"
            letterSpacing="-0.5"
          >
            PARA QUEM?
          </text>
        </mask>
      </defs>
      <rect
        y="16"
        className="knockout-text-bg"
        width="100%"
        height="100%"
        fill="#000"
        mask="url(#knockout-text-services)"
      />
      <rect
        x="45"
        y="16"
        width="100%"
        height="100%"
        fill="white"
        mask="url(#knockout-text-services-2)"
      />
      <text
        x="2"
        y="15"
        fill="#fff"
        fontSize="18"
        fontFamily="Archivo Black"
        textAnchor="start"
        letterSpacing="-0.5"
      >
        SERVI
      </text>
    </svg>
  );
};
