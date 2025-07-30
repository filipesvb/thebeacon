const TheBeacon = () => {
  return (
    <svg
      className={""}
      viewBox="0 0 100 20"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="knockout-text-2">
          <rect width="100%" height="100%" fill="#fff" />
          <text
            x="3.8"
            y="20"
            fill="#000"
            fontSize="21.3"
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
        fill="#181e25"
        mask="url(#knockout-text-2)"
      />
      <text
        x="-2"
        y="19.2"
        fill="#FFF"
        fontSize="7"
        fontFamily="Archivo Black"
        textAnchor="start"
        letterSpacing="-0.5"
        transform="rotate(-90, 2, 16)"
      >
        THE
      </text>
    </svg>
  );
};

export default TheBeacon;
