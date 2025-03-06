import React from 'react'
import TechStackBackground from '../ui/techstack-background'

const TechStackSection = () => {
  return (
      <section className="relative overflow-hidden h-fit w-screen bg-gradient-to-b from-[#D4EAF6] to-white mb-[15px] flex flex-col md:flex-row">
        <div className="p-5 md:p-10 lg:p-20">
          <h1 className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[120px] lg:text-[138px] xl:text-[160px] 2xl:text-[180px] text-start text-transparent pb-2 font-semibold tracking-tight font-bebasNeue">
            Tech stack
          </h1>
          <h2 className="text-lg font-robotoFont font-normal text-start md:translate-x-5 pb-4">
            Velit in, dui,u bibendum.
          </h2>
          <p className="text-sm text-start md:translate-x-5 font-robotoFont font-normal pb-10">
            Aliquet vestibulum urna ante ac quisque vestibulum odio facilisis
            neque. Ultrices tellus, dictumst, eu iaculis pretium purus ultrices
            dolor imperdiet. Convallis dui suspendisse dictumst aliquam
          </p>
        </div>
        <div className="relative flex h-[200px] md:h-fit w-full">
          <TechStackBackground
            height="h-screen"
            rotate="rotate-[30deg]"
            gap="gap-12 md:gap-10"
            logoGap="gap-10"
            scale="scale-[0.6] sm:scale-[0.8] md:scale-100"
            translateX="-translate-x-32 md:-tranlate-x-20"
            translateY="-translate-y-[400px] md:-translate-y-20"
          />
        </div>
      </section>
  )
}

export default TechStackSection
