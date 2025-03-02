import { LogoProps } from "@/lib/docs";
import React from "react";

const Git = ({ color }: LogoProps) => {
  if (!color) {
    return (
      <svg
        width="55"
        height="55"
        viewBox="0 0 123 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-foreground"
          d="M120.208 55.9534L66.7144 2.46404C65.9817 1.73078 65.1116 1.14911 64.1539 0.752249C63.1962 0.355389 62.1697 0.151123 61.1331 0.151123C60.0965 0.151123 59.07 0.355389 58.1123 0.752249C57.1546 1.14911 56.2846 1.73078 55.5518 2.46404L44.4478 13.5734L58.5358 27.6614C60.1921 27.0989 61.9727 27.0111 63.6763 27.4079C65.3799 27.8047 66.9385 28.6702 68.1758 29.9067C69.4199 31.1521 70.2884 32.7226 70.682 34.4384C71.0755 36.1543 70.9782 37.9462 70.4011 39.6094L83.9838 53.188C85.6473 52.6102 87.44 52.5129 89.1564 52.9072C90.8727 53.3015 92.4432 54.1715 93.6878 55.4174C94.5596 56.289 95.2512 57.3239 95.723 58.4628C96.1948 59.6018 96.4377 60.8225 96.4377 62.0554C96.4377 63.2882 96.1948 64.5089 95.723 65.6479C95.2512 66.7869 94.5596 67.8217 93.6878 68.6934C91.9252 70.4541 89.5358 71.4431 87.0444 71.4431C84.5531 71.4431 82.1637 70.4541 80.4011 68.6934C79.0918 67.3819 78.1997 65.7124 77.8371 63.895C77.4746 62.0776 77.6578 60.1935 78.3638 58.48L65.6971 45.8174V79.1467C67.0341 79.8071 68.1944 80.7766 69.0821 81.9748C69.9698 83.1729 70.5592 84.5654 70.8016 86.0367C71.044 87.508 70.9324 89.016 70.476 90.4356C70.0196 91.8552 69.2315 93.1456 68.1771 94.2C67.3054 95.0719 66.2706 95.7634 65.1316 96.2353C63.9927 96.7071 62.7719 96.95 61.5391 96.95C60.3063 96.95 59.0855 96.7071 57.9466 96.2353C56.8076 95.7634 55.7728 95.0719 54.9011 94.2C54.0291 93.3284 53.3373 92.2934 52.8654 91.1543C52.3934 90.0153 52.1505 88.7944 52.1505 87.5614C52.1505 86.3284 52.3934 85.1075 52.8654 83.9684C53.3373 82.8293 54.0291 81.7944 54.9011 80.9227C55.7795 80.0425 56.8236 79.3451 57.9731 78.8707V45.2347C56.8283 44.7632 55.788 44.0701 54.9119 43.1953C54.0357 42.3205 53.3411 41.2812 52.8678 40.1372C52.3945 38.9931 52.1519 37.7668 52.154 36.5288C52.156 35.2907 52.4027 34.0652 52.8798 32.9227L38.9891 19.0294L2.30643 55.7027C0.828242 57.1838 -0.00195312 59.1908 -0.00195312 61.2834C-0.00195313 63.3759 0.828242 65.3829 2.30643 66.864L55.8024 120.36C57.2835 121.838 59.2902 122.668 61.3824 122.668C63.4746 122.668 65.4814 121.838 66.9624 120.36L120.208 67.1147C121.686 65.6336 122.516 63.6266 122.516 61.534C122.516 59.4415 121.686 57.4345 120.208 55.9534Z"
        />
      </svg>
    );
  }
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M98.1141 45.5449L54.4531 1.88633C51.9402 -0.628125 47.8621 -0.628125 45.3461 1.88633L36.2797 10.9527L47.7809 22.4539C50.4535 21.5508 53.5184 22.1566 55.6488 24.2871C57.7894 26.4312 58.391 29.5223 57.466 32.2035L68.55 43.2879C71.2316 42.3641 74.3258 42.9617 76.4676 45.107C79.4609 48.0992 79.4609 52.9488 76.4676 55.943C73.4734 58.9375 68.6238 58.9375 65.6281 55.943C63.3766 53.6891 62.8203 50.3824 63.9602 47.6086L53.6234 37.2719L53.6223 64.4738C54.3716 64.8443 55.056 65.3337 55.6488 65.923C58.6422 68.9152 58.6422 73.7652 55.6488 76.7617C52.6547 79.7547 47.8027 79.7547 44.8129 76.7617C41.8195 73.7652 41.8195 68.9156 44.8129 65.9234C45.5302 65.2057 46.3827 64.6374 47.3211 64.2512V36.7957C46.3814 36.4121 45.5284 35.8434 44.8129 35.1234C42.5449 32.8586 41.9996 29.5309 43.1617 26.7461L31.8242 15.4074L1.88672 45.343C-0.628906 47.8598 -0.628906 51.9383 1.88672 54.4531L45.5484 98.1125C48.0621 100.627 52.1395 100.627 54.6562 98.1125L98.1137 54.6559C100.629 52.1402 100.629 48.0594 98.1141 45.5449Z"
        fill="#DE4C36"
      />
    </svg>
  );
};

export default Git;
