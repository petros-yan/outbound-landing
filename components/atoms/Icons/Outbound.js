export const Outbound = () => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.798889"
        y="0.5"
        width="30"
        height="30"
        rx="8"
        fill="url(#paint0_linear)"
      />
      <rect
        x="0.798889"
        y="0.5"
        width="30"
        height="30"
        rx="8"
        fill="url(#paint1_linear)"
      />
      <g filter="url(#filter0_b)">
        <ellipse
          cx="15.7987"
          cy="15.6166"
          rx="11.183"
          ry="12.3832"
          fill="white"
          fillOpacity="0.25"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7987 25.5231C20.7397 25.5231 24.7451 21.0878 24.7451 15.6166C24.7451 10.1453 20.7397 5.70996 15.7987 5.70996C10.8578 5.70996 6.85236 10.1453 6.85236 15.6166C6.85236 21.0878 10.8578 25.5231 15.7987 25.5231ZM15.7983 21.5608C18.7629 21.5608 21.1661 18.8996 21.1661 15.6168C21.1661 12.3341 18.7629 9.67285 15.7983 9.67285C12.8337 9.67285 10.4305 12.3341 10.4305 15.6168C10.4305 18.8996 12.8337 21.5608 15.7983 21.5608Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b"
          x="0.615784"
          y="-0.766602"
          width="30.3659"
          height="32.7665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="2.45426"
          y1="2.09076"
          x2="37.3622"
          y2="21.4405"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#504CAD" />
          <stop offset="1" stopColor="#8BC34A" stopOpacity="0.81" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="15.7989"
          y1="15.5"
          x2="-1.263"
          y2="34.1015"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#504CAD" stopOpacity="0" />
          <stop offset="1" stopColor="#E91E63" />
        </linearGradient>
      </defs>
    </svg>
  );
};
