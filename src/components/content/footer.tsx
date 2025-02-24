import React from "react";
import SocialMedia from "../ui/social-media";
import { navigation } from "@/lib/docs";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-fit w-screen p-20">
      <div className="flex flex-row justify-start items-center">
        <h1 className="text-[150px] font-bebasNeue font-bold leading-[180px] uppercase">
          Les&apos;s work <br />
          <strong className="text-[300px] tracking-normal">together</strong>
        </h1>
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
          <span className="-translate-x-24">
            <svg
              width="231"
              height="204"
              viewBox="0 0 231 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M164.5 47.4996L162.696 49.2305L164.5 47.4996ZM210.232 202.768C211.209 203.744 212.792 203.744 213.768 202.768L229.678 186.858C230.654 185.881 230.654 184.299 229.678 183.322C228.702 182.346 227.119 182.346 226.142 183.322L212 197.464L197.858 183.322C196.882 182.346 195.299 182.346 194.323 183.322C193.346 184.299 193.346 185.881 194.323 186.858L210.232 202.768ZM1.00022 2.99993C1.10788 5.49761 1.10778 5.49762 1.10812 5.4976C1.10883 5.49757 1.10961 5.49754 1.11101 5.49748C1.11382 5.49736 1.11837 5.49717 1.12468 5.49691C1.13729 5.49639 1.15688 5.49559 1.18337 5.49454C1.23635 5.49244 1.31691 5.48935 1.42434 5.48548C1.6392 5.47775 1.96155 5.46693 2.38575 5.45485C3.23419 5.43067 4.48994 5.40141 6.10803 5.38157C9.34446 5.34186 14.029 5.33982 19.8019 5.4912C31.3518 5.7941 47.2375 6.71068 64.5879 9.16267C99.457 14.0904 139.574 25.1345 162.696 49.2305L166.304 45.7686C141.927 20.3647 100.294 9.15895 65.2876 4.21186C47.7005 1.72643 31.6174 0.799344 19.9329 0.492926C14.0887 0.33966 9.33957 0.341546 6.0467 0.381941C4.40014 0.402141 3.11732 0.431971 2.24334 0.456874C1.80634 0.469326 1.47153 0.480543 1.24452 0.488713C1.13102 0.492801 1.04447 0.49612 0.985574 0.498451C0.956124 0.499618 0.933589 0.500537 0.918059 0.501176C0.910289 0.501502 0.904276 0.50175 0.90002 0.501931C0.89789 0.502024 0.896022 0.502103 0.894957 0.502149C0.893535 0.502206 0.892547 0.502252 1.00022 2.99993ZM162.696 49.2305C185.918 73.4304 197.687 111.19 203.604 143.266C206.552 159.246 208.027 173.697 208.764 184.152C209.133 189.378 209.317 193.602 209.409 196.513C209.455 197.969 209.477 199.097 209.489 199.857C209.495 200.238 209.497 200.526 209.499 200.718C209.5 200.814 209.5 200.886 209.5 200.933C209.5 200.957 209.5 200.974 209.5 200.985C209.5 200.991 209.5 200.995 209.5 200.997C209.5 200.999 209.5 200.999 209.5 201C209.5 201 209.5 201 212 201C214.5 201 214.5 200.999 214.5 200.998C214.5 200.997 214.5 200.995 214.5 200.993C214.5 200.989 214.5 200.984 214.5 200.976C214.5 200.962 214.5 200.942 214.5 200.915C214.5 200.862 214.499 200.784 214.499 200.682C214.497 200.477 214.494 200.176 214.488 199.782C214.477 198.996 214.453 197.84 214.406 196.356C214.313 193.386 214.125 189.098 213.752 183.801C213.005 173.209 211.511 158.566 208.521 142.359C202.563 110.059 190.582 71.0688 166.304 45.7686L162.696 49.2305Z"
                className="fill-foreground"
              />
            </svg>
          </span>
          <h2 className="text-6xl font-bebasNeue text-foreground ">
            <span
              className="
       duration-200 ease-out 
      after:block after:h-[1px] after:origin-left after:scale-x-0 after:bg-foreground 
      after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100"
              style={{
                transform: "translate3d(0,0,0)", // Forces GPU acceleration
                WebkitFontSmoothing: "antialiased", // Improves text rendering
              }}
            >
              <a href={navigation[1].href}>
            Contact me
              </a>
            </span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[1px]">
        <div className="w-full h-full bg-foreground"></div>
      </div>
      <div className="flex flex-row justify-between pt-20 items-start w-full h-full">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-bebasNeue text-4xl leading-[20px] text-foreground">
            Sebastjan
          </h3>
          <span className="text-foreground text-md">
            <a>sebastjan.bas@gmail.com</a>
          </span>
        </div>
        <div className="text-foreground font-bebasNeue text-4xl">
          <ul className="flex flex-row justify-center items-center gap-10">
            {navigation.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-4xl text-foreground 
       duration-200 ease-out 
      after:block after:h-[1px] after:origin-left after:scale-x-0 after:bg-foreground 
      after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100"
                  style={{
                    transform: "translate3d(0,0,0)", // Forces GPU acceleration
                    WebkitFontSmoothing: "antialiased", // Improves text rendering
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
