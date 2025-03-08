import { LogoProps } from "@/lib/docs";
import React from "react";

export const SupabaseLogo = ({ color, className }: LogoProps) => {
  if (!color) {
    return (
      <svg
        width="45"
        height="48"
        viewBox="0 0 45 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          className="stroke-foreground"
          d="M24.3041 45.8638C24.3041 45.8638 24.304 45.8638 24.304 45.8638C23.6875 46.6401 22.4378 46.2146 22.4229 45.2236L22.0151 18H39.9876C42.5899 18 44.0414 21.0058 42.4231 23.0439L24.3041 45.8638Z"
          strokeWidth="2"
        />
        <path
          className="stroke-foreground"
          d="M21.8611 29.2665H4.1177C1.51523 29.2665 0.063799 26.2608 1.68208 24.2226L19.8012 1.40277L19.0181 0.780943L19.8012 1.40277C20.4169 0.627387 21.6645 1.05076 21.6823 2.03936L21.8611 29.2665Z"
          strokeWidth="2"
        />
      </svg>
    );
  }
  return (
    <svg
      width="45"
      height="48"
      viewBox="0 0 98 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56.8941 98.3382C54.3395 101.555 49.1596 99.7927 49.0981 95.6848L48.198 35.6028H88.5971C95.9144 35.6028 99.9955 44.0544 95.4454 49.7852L56.8941 98.3382Z"
        fill="url(#paint0_linear_301_3161)"
      />
      <path
        d="M56.8941 98.3382C54.3395 101.555 49.1596 99.7927 49.0981 95.6848L48.198 35.6028H88.5971C95.9144 35.6028 99.9955 44.0544 95.4454 49.7852L56.8941 98.3382Z"
        fill="url(#paint1_linear_301_3161)"
        fillOpacity="0.2"
      />
      <path
        d="M40.464 1.66122C43.0187 -1.55626 48.1986 0.206684 48.2601 4.31457L48.6546 64.3965H8.76106C1.44348 64.3965 -2.63767 55.9449 1.91262 50.2141L40.464 1.66122Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_301_3161"
          x1="48.198"
          y1="48.9245"
          x2="84.1033"
          y2="63.9831"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_301_3161"
          x1="32.2795"
          y1="27.1292"
          x2="48.6542"
          y2="57.9537"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
