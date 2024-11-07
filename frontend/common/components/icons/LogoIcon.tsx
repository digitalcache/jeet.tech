import { IconProps } from "./types";

export const LogoIcon = (props: IconProps) => {
  const { 
    isScrolled, ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={28}
      fill="none"
      {...rest}
    >
      <path
        fill="url(#a_logo)"
        d="M24.771.018a3.536 3.536 0 0 0-3.406 2.673h-3.622a3.535 3.535 0 1 0 0 1.725h3.622A3.536 3.536 0 1 0 24.771.018ZM14.337 5.321a1.81 1.81 0 1 1 0-3.621 1.81 1.81 0 0 1 0 3.621Zm10.434 0a1.81 1.81 0 1 1 0-3.621 1.81 1.81 0 0 1 0 3.621Z"
      />
      <path
        fill="url(#b_logo)"
        d="M3.903 20.93a3.536 3.536 0 1 0 0 7.071 3.536 3.536 0 0 0 0-7.072Zm0 5.302a1.81 1.81 0 1 1 0-3.621 1.81 1.81 0 0 1 0 3.621Z"
      />
      <path
        fill="url(#c_logo)"
        d="M24.775 10.28a3.493 3.493 0 0 0-2.371 6.122l-5.562 5.605a3.536 3.536 0 0 0-1.638-.992v-3.794a3.536 3.536 0 1 0-1.725 0v3.794a3.536 3.536 0 1 0 4.268 2.5l6.295-6.25.733.085a3.536 3.536 0 1 0 0-7.028v-.043ZM12.53 13.814a1.81 1.81 0 1 1 3.622 0 1.81 1.81 0 0 1-3.622 0Zm1.811 12.417a1.81 1.81 0 1 1 0-3.621 1.81 1.81 0 0 1 0 3.621Zm10.434-10.606a1.81 1.81 0 1 1 0-3.622 1.81 1.81 0 0 1 0 3.622Z"
      />
      <path
        fill="url(#d_logo)"
        d="M24.772 20.93a3.536 3.536 0 1 0 0 7.071 3.536 3.536 0 0 0 0-7.072Zm0 5.302a1.81 1.81 0 1 1 0-3.621 1.81 1.81 0 0 1 0 3.621Z"
      />
      <path
        fill="url(#e_logo)"
        d="M7.397 3.554a3.535 3.535 0 1 0-4.225 3.449v3.708a3.535 3.535 0 1 0 1.724.086v-3.88a3.535 3.535 0 0 0 2.501-3.363Zm-5.303 0a1.81 1.81 0 1 1 3.622 0 1.81 1.81 0 0 1-3.622 0ZM5.672 14.16a1.81 1.81 0 1 1-3.62 0 1.81 1.81 0 0 1 3.62 0Z"
      />
      <defs>
        <linearGradient
          id="a_logo"
          x1={11.862}
          x2={15.969}
          y1={0.184}
          y2={10.85}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={isScrolled ? "white" : "#1D976C"} />
          <stop offset={1} stopColor={isScrolled ? "white" : "#93F9B9"} />
        </linearGradient>
        <linearGradient
          id="b_logo"
          x1={0.803}
          x2={6.921}
          y1={21.095}
          y2={27.496}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={isScrolled ? "white" : "#1D976C"} />
          <stop offset={1} stopColor={isScrolled ? "white" : "#93F9B9"} />
        </linearGradient>
        <linearGradient
          id="c_logo"
          x1={11.905}
          x2={27.231}
          y1={10.673}
          y2={26.868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={isScrolled ? "white" : "#1D976C"} />
          <stop offset={1} stopColor={isScrolled ? "white" : "#93F9B9"} />
        </linearGradient>
        <linearGradient
          id="d_logo"
          x1={21.672}
          x2={27.79}
          y1={21.095}
          y2={27.496}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={isScrolled ? "white" : "#1D976C"} />
          <stop offset={1} stopColor={isScrolled ? "white" : "#93F9B9"} />
        </linearGradient>
        <linearGradient
          id="e_logo"
          x1={0.762}
          x2={11.675}
          y1={0.416}
          y2={4.974}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={isScrolled ? "white" : "#1D976C"} />
          <stop offset={1} stopColor={isScrolled ? "white" : "#93F9B9"} />
        </linearGradient>
      </defs>
    </svg>
  )
}