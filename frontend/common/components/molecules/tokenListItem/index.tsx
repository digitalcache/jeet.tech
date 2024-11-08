import {
  useMemo,
} from "react";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import lang from '@/common/lang';
import { SubdomainType } from "@/middleware";
import { routes } from '@/common/routes';
import { ethers } from "ethers";
import Link from "next/link";
import { IdeaTypeWithDomain } from "@/common/types";

const {
  ideas: {
    ideaCard: ideaCardCopy,
  },
} = lang

export const TokenListItem = ({
  data,
}: {
  data: IdeaTypeWithDomain;
}) => {

  const {
    idea,
    subdomains,
  } = data

  const fundingRaised = idea ? parseFloat(ethers.formatUnits(idea.fundingRaised, 'ether'))  : 0;

  const tokenLink = useMemo(() => {
    if (subdomains?.length) {
      const subdomainData = subdomains.find((d: SubdomainType) => d.address.toLowerCase() === idea.tokenAddress.toLowerCase())
      if (subdomainData) {
        return routes.projectDetailPath.replace('%subdomain%', subdomainData.subdomain)
      }
    }
    return ''
  }, [subdomains, idea])
  return (
    <Link
      href={tokenLink}
      prefetch={true}
      className={cn(
        "rounded-3xl animate-animateIn opacity-0 group h-auto w-full translate-y-2 relative overflow-hidden hover:shadow-xl transition duration-200 text-left justify-between flex flex-col",
      )}
    >
      <div className={`transition duration-200 px-4 py-4 z-10 relative w-full`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl overflow-hidden from-illuminating-emerald to-teal-deer -z-30"></div>
        <div className="flex justify-between items-center">
          <Image
            src={idea.tokenImageUrl}
            alt={idea.symbol}
            width={400}
            height={200}
            quality={40}
            className={`h-8 w-auto`}
          />
          <div className="bg-white rounded-full text-xs px-2 py-1/2 font-semibold">
            <span className="bg-gradient-to-b from-illuminating-emerald to-teal-deer text-transparent bg-clip-text whitespace-nowrap">
              {idea.symbol}
            </span>
          </div>
        </div>
        <div className="flex justify-between flex-1 items-center mt-2">
          <div className="flex text-neutral-700 justify-between w-full items-center">
            <div className="font-semibold mr-1 text-xl">
              {idea.name}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex flex-col w-max">
            <span className="text-sm text-neutral-600">{ideaCardCopy.raised}</span>
            <span className="text-sm text-neutral-800 font-medium">{fundingRaised ? fundingRaised.toFixed(3).replace(/[.,]000$/, "") : 0} {process.env.NEXT_PUBLIC_CURRENCY || ''}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
