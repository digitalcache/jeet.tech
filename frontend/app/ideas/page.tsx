'use client'

import { useState } from "react";
import {
  Token,
  TokenListItem,
} from "@/common/components/molecules";
import Lottie from 'react-lottie';
import { Footer } from '@/common/components/organisms';
import { Loader } from '@/common/components/atoms';
import {
  LayoutGrid,
  LayoutList,
  PiggyBank,
} from "lucide-react";
import { Masonry } from "masonic";
import lang from "@/common/lang";
import Link from "next/link";
import { routes } from "@/common/routes";
import Carousel  from "@/common/components/molecules/carousel";
import { useGetIdeas } from "./useGetIdeas";
import * as animationData from '@/common/lottie/no-ideas.json'

const { ideas: ideasCopy } = lang

const ViewTokens = () => {
  const [isListView, setIsListView] = useState(false)
  const {
    columnCount,
    ideas,
    isLoading,
    categories,
    currentCategory,
    handleCategoryChange,
  } = useGetIdeas()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const carouselItems = categories.map((c) => {
    return (
      <button
        onClick={() => handleCategoryChange(c)}
        key={c.id}
        type="button"
        className={`${c.active ? "bg-gray-700 shadow-sm shadow-teal-deer" : ""} hover:bg-gray-700 group rounded-full transition-all duration-200 ease-in-out px-4 py-1 font-semibold`}
      >
        <span className={`${c.active ? "text-white" : "text-transparent group-hover:text-white bg-clip-text bg-gradient-to-t from-illuminating-emerald to-teal-deer "} whitespace-nowrap `}>
          {c.value}
        </span>
      </button>
    )
  })

  return (
    <>
      <div className="min-h-screen pt-20 md:pt-32 pb-[180px]">
        <div className='container mx-auto flex items-center flex-col w-full relative'>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center text-gray-700">{ideasCopy.currentIdeas}</h2>
          <h1 className="text-center text-neutral-500 text-sm pb-4 max-w-[200px] md:max-w-max">
            {ideasCopy.currentIdeasSubHeading}
          </h1>
          <div className="absolute top-10 right-4 md:right-0">
            <button type="button" onClick={() => setIsListView(!isListView)} className="flex gap-2 text-gray-700 hover:text-illuminating-emerald">
              {isListView ? (
                <LayoutList />
              ) : (
                <LayoutGrid />
              )}
            </button>
          </div>
          <div className="w-[calc(100%-32px)] mx-auto md:w-full h-px bg-black/10 mb-6"></div>
          <div className="w-[calc(100%-32px)] mx-auto md:w-full mb-6 flex justify-center">
            <Carousel items={carouselItems} />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="px-4 md:px-0 w-full">
              {ideas.length ? (
                isListView ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {ideas.map((idea, index) => (
                      <TokenListItem key={index} data={idea} />
                    ))}
                  </div>
                ) : (
                  <Masonry
                    key={currentCategory}
                    columnCount={columnCount}
                    columnGutter={16}
                    rowGutter={16}
                    items={ideas}
                    render={Token}
                  />
                )
              ) : (
                <div className="flex justify-center items-center md:mt-16 mb-16 flex-col">
                  <div className="pointer-events-none">
                    <Lottie options={defaultOptions}
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-gray-700 text-center">{ideasCopy.noIdeasHeading}</div>
                  <div className="text-neutral-500 text-sm  mt-2 mb-6 text-center">{ideasCopy.noIdeasSubHeading}</div>
                  <Link href={routes.newIdeaPath} prefetch={true}
                    className={`flex items-center justify-center text-gray-700 rounded-xl outline-none px-4 py-3 text-base
                    disabled:cursor-not-allowed ease-in-out transition-all gap-2 duration-150 hover:scale-105
                    bg-gradient-to-r from-teal-deer to-illuminating-emerald font-medium`}
                  >
                    {ideasCopy.registerIdea}
                    <PiggyBank strokeWidth={1.5} />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  )
};

export default ViewTokens;
