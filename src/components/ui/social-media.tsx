import React from "react";
import Github from "../Logos/social-media/github";
import XLogo from "../Logos/social-media/x";
import Instagram from "../Logos/social-media/instagram";
import LinkedIn from "../Logos/social-media/linked-in";

type SocialMediaProps = {
  size?: string;
  spacing?: string;
  direction?: string;
};

const SocialMedia = ({
  size = "size-[24px]",
  spacing = "gap-10",
  direction = "flex-row",
}: SocialMediaProps) => {
  return (
    <div className={`flex ${spacing} ${direction} items-center justify-center`}>
      <a
        href="https://github.com/sebastjanbas"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <Github size={size} />
      </a>
      <a
        href="https://x.com/SebastjanBas"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <XLogo size={size}/>
      </a>
      <a
        href="https://www.instagram.com/sebastjan.bas/"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <Instagram size={size}/>
      </a>
      <a
        href="https://www.linkedin.com/in/sebastjan-bas-604b5b271/"
        target="_blank"
        className="transition-transform duration-200 hover:scale-125"
      >
        <LinkedIn size={size}/>
      </a>
    </div>
  );
};

export default SocialMedia;
