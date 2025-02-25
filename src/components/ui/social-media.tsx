import Image from "next/image";
import React from "react";

type SocialMediaProps = {
  size: string;
  spacing?: string;
  direction?: string;
};

const SocialMedia = ({
  size,
  spacing = "10",
  direction = "row",
}: SocialMediaProps) => {
  const spacingClass = `gap-${spacing}`;
  const directionClass = `flex-${direction}`;

  return (
    <div
      className={`flex ${spacingClass} ${directionClass} items-center justify-center`}
    >
      <a
        href="https://github.com/sebastjanbas"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <Image
          className={size}
          height={32}
          width={32}
          src="/github-logo.svg"
          alt="Git Hub logo"
        />
      </a>
      <a
        href="https://x.com/SebastjanBas"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <Image
          className={size}
          height={32}
          width={32}
          src="/x-logo.svg"
          alt="X logo"
        />
      </a>
      <a
        href="https://www.instagram.com/sebastjan.bas/"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <Image
          className={size}
          height={32}
          width={32}
          src="/instagram-logo.svg"
          alt="Instagram logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sebastjan-bas-604b5b271/"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <Image
          className={size}
          height={32}
          width={32}
          src="/linkedin-logo.svg"
          alt="Linked In logo"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
