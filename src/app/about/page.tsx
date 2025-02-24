import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="w-screen h-screen">
        <div className="flex w-full h-full justify-center items-start pt-20">
          <div className="flex flex-row gap-x-10 justify-between items-center">
            <h1 className="text-7xl tracking-tight text-foreground font-bebasNeue">
              Hi! my name is <br />
              <strong className="text-9xl text-foreground font-bebasNeue">
                Sebastjan Bas
              </strong>
            </h1>
            <Image
              width={600}
              height={400}
              src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
              alt="Photo of Sebastjan Bas"
            />
          </div>
        </div>
      </section>
      <section className="w-screen h-screen">
        <div className="flex justify-center items-center">
          <h1 className="text-[200px] text-foreground font-bebasNeue">Who am I</h1>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
