'use client'
import { TypewriterEffect } from "@/common/components/atoms";
import Lottie from 'react-lottie';
import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";
import { heroWords } from "@/common/constants";
import lang from "@/common/lang";
import { CreateProject } from "./createProject";
import * as animationData from '@/common/lottie/hero-animation.json'

const { homePage: homePageCopy } = lang

export const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const {
    windowSize,
  } = useWindowDimensions()

  return (
    <header className="pt-24 px-4 max-w-[100vw] relative pb-12">
      <div className='container text-gray-500 mx-auto flex items-center w-full justify-between md:py-40'>
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <h2 className='font-medium'>{homePageCopy.subHeading}</h2>
          <TypewriterEffect words={heroWords} className="font-semibold text-4xl md:text-5xl mt-4 min-h-20 md:min-h-12" />
          <h1 className='sr-only'>
            {homePageCopy.h1}
          </h1>
          <h2 className='text-sm text-gray-700 mt-4 md:mt-8 max-w-[700px]'>
            {homePageCopy.subHeading1}
            <br />
            <br />
            {homePageCopy.subHeading2}
            <br />
            <br />
            {homePageCopy.subHeading3}
          </h2>
          <div className='mt-16 flex gap-4 lg:items-center flex-col lg:flex-row'>
            <CreateProject />
          </div>
        </div>
        <div className="pointer-events-none hidden md:block">
          {windowSize !== "mobile" ? (
            <Lottie options={defaultOptions}
              height={400}
              width={400}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
};
