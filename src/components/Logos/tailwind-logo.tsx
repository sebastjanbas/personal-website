import { LogoProps } from "@/lib/docs";
import React from "react";

export const TailwindLogo = ({ color, className }: LogoProps) => {
  if (!color) {
    return (
      <svg
        width="53"
        height="32"
        viewBox="0 0 53 32"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-foreground"
          d="M50.5082 9.1496C49.7525 10.5484 48.8246 11.6773 47.7356 12.554C45.7451 14.1564 43.1129 14.9997 39.7503 14.9997C36.6363 14.9997 34.4163 14.2755 32.6761 13.2671C30.9125 12.2451 29.5989 10.9104 28.2915 9.57507L28.2915 9.57498C28.2601 9.54297 28.2287 9.5109 28.1973 9.47879C26.6739 7.92237 25.059 6.27247 22.7687 5.69651C20.8076 5.20329 18.9249 5.32048 17.1602 6.08142C16.6732 6.29145 16.2005 6.54814 15.7418 6.84969C16.4976 5.45101 17.4254 4.32225 18.5144 3.4456C20.5049 1.84328 23.1371 1 26.5 1C29.6136 1 31.8337 1.7242 33.574 2.73262C35.3377 3.75455 36.6515 5.08927 37.9588 6.42459L37.9589 6.42468C37.9903 6.45672 38.0217 6.48881 38.0531 6.52093C39.5764 8.07731 41.1913 9.72718 43.4809 10.3031L43.481 10.3032C45.4424 10.7964 47.3254 10.679 49.09 9.91787C49.577 9.70783 50.0496 9.45113 50.5082 9.1496ZM9.51943 21.6969L9.5192 21.6969C7.55773 21.2033 5.67473 21.3205 3.91003 22.0815C3.42304 22.2915 2.95043 22.5482 2.49181 22.8498C3.24752 21.4509 4.17538 20.3221 5.26442 19.4453C7.25489 17.8429 9.88709 16.9997 13.2497 16.9997C16.3636 16.9997 18.5836 17.724 20.3239 18.7326C22.0875 19.7547 23.4011 21.0895 24.7085 22.4249L24.7087 22.4252C24.7411 22.4583 24.7736 22.4915 24.8061 22.5247C26.3282 24.0792 27.9427 25.7281 30.2316 26.3029C32.1926 26.7964 34.0753 26.6791 35.8398 25.9181C36.3269 25.7081 36.7996 25.4513 37.2583 25.1497C36.5026 26.5486 35.5747 27.6776 34.4856 28.5543C32.4951 30.1567 29.8629 31 26.5 31C23.3864 31 21.1664 30.2757 19.426 29.2671C17.6623 28.245 16.3485 26.9101 15.0412 25.5747L15.041 25.5745C15.0097 25.5426 14.9784 25.5106 14.947 25.4786C13.4235 23.9227 11.8088 22.2736 9.51943 21.6969Z"
          strokeWidth="2"
        />
      </svg>
    );
  }
  return (
    <svg
      width="53"
      height="32"
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50.0002 0.000488281C36.6665 0.000488281 28.3334 6.66548 24.9996 19.9942C30.0002 13.3292 35.8337 10.8308 42.4999 12.4964C46.3039 13.4468 49.0224 16.2065 52.0323 19.2602C56.9341 24.2345 62.6075 29.9917 75.0009 29.9917C88.3334 29.9917 96.6677 23.3267 100 9.99672C95.0009 16.6617 89.1674 19.1614 82.4999 17.4958C78.6973 16.5454 75.9787 13.7856 72.9689 10.732C68.067 5.75764 62.3924 0.000488281 50.0002 0.000488281ZM24.9996 29.9917C11.6671 29.9917 3.33274 36.6567 0.000244141 49.9866C4.99962 43.3217 10.8331 40.822 17.5006 42.4888C21.3032 43.4405 24.0218 46.199 27.0316 49.2514C31.9335 54.2257 37.6081 59.9841 50.0002 59.9841C63.334 59.9841 71.6671 53.3191 75.0009 39.9892C70.0002 46.6542 64.1668 49.1538 57.5006 47.487C53.6966 46.5379 50.9781 43.7768 47.9682 40.7244C43.0664 35.7501 37.393 29.9917 24.9996 29.9917Z"
        fill="#06B6D4"
      />
    </svg>
  );
};
