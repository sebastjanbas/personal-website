import { Footer } from "@/components/content/footer";
import Navbar from "@/components/content/navbar";
import React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center">{children}</main>;
      <Footer />
    </>
  );
};

export default ContentLayout;
