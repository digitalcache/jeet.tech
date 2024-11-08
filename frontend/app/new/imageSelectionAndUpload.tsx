'use client'
import {
  useRef, useState,
} from "react";
import {
  acceptedImageMimeTypes,
  FILE_SIZE_FIVE_MB,
} from "@/common/constants";
import { CircularSpinner } from "@/common/components/atoms";
import { UploadIcon } from "@/common/components/icons";
import toast from "react-hot-toast";
import Image from "next/image";
import { Edit } from "lucide-react";
import {
  UseFormSetValue, UseFormTrigger,
} from "react-hook-form";
import { pinataUploadUrl } from "@/common/utils/network/endpoints";
import { blurDataUrl } from "@/common/utils/blurDataUrl";
import lang from "@/common/lang";
import { TokenDTO } from "./types";

const { createIdea: { imageUpload: imageUploadCopy } } = lang

export const ImageSelectionAndUpload = ({
  errorField,
  id,
  errorMessage,
  setValue,
  value,
  trigger,
} : {
  errorField: boolean;
  errorMessage?: string;
  setValue: UseFormSetValue<TokenDTO>;
  value: string;
  id: string;
  trigger: UseFormTrigger<TokenDTO>;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const [uploadInProgress, setUploadInProgress] = useState(false)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setValue('imageUrl', '')
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      if (file.size > FILE_SIZE_FIVE_MB) {
        setError(imageUploadCopy.imageSizeError)
        return;
      }
      if (!acceptedImageMimeTypes.includes(file.type)) {
        setError(imageUploadCopy.imageType);
        return;
      }
      try {
        setUploadInProgress(true)
        const data = new FormData();
        data.set("file", file);
        const uploadRequest = await fetch(pinataUploadUrl, {
          method: "POST",
          body: data,
        });
        const IPFS_URL = await uploadRequest.json();
        setValue('imageUrl', IPFS_URL)
        setUploadInProgress(false)
        setError('')
      } catch (e) {
        setUploadInProgress(false)
        setError(imageUploadCopy.uploadError)
        toast.error(imageUploadCopy.uploadError)
      } finally {
        trigger(['imageUrl'])
      }
    }
  }

  const handleUploadFile = () => {
    fileInputRef.current?.click();
  }

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  }
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-left w-max text-white font-medium text-sm"
      >
        {imageUploadCopy.title}
      </label>
      <input
        type="file"
        name="file"
        accept={acceptedImageMimeTypes.join(', ')}
        id={id}
        ref={fileInputRef}
        className="opacity-0 -z-10 absolute overflow-hidden"
        onChange={handleFileChange}
        onClick={handleInputClick}
      />
      {value ? (
        <div className="w-full h-auto rounded-xl overflow-hidden mt-2 bg-white/50 relative">
          <Image
            src={value}
            alt="pinata"
            width={400}
            height={200}
            className="w-full h-auto"
            quality={50}
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
          <button
            disabled={uploadInProgress}
            onClick={handleUploadFile}
            type="button"
            className="shadow-sm absolute top-3 right-3 p-2 rounded-lg bg-gray-700 hover:bg-opacity-80 text-white"
          >
            <Edit width={20} height={20} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="bg-white mt-2 group uploadIconWithGradient disabled:pointer-events-none transition-transform duration-200 px-4 py-8 rounded-xl flex flex-col gap-1 items-center"
          disabled={uploadInProgress}
          onClick={handleUploadFile}
        >
          {uploadInProgress ? <CircularSpinner /> : <UploadIcon />}
          <span className="text-gray-400 text-sm font-medium group-hover:bg-gradient-to-b from-illuminating-emerald to-teal-deer group-hover:text-transparent group-hover:bg-clip-text">
            {uploadInProgress ? imageUploadCopy.uploading : imageUploadCopy.uploadLabel}
          </span>
        </button>
      )}
      {(error || errorField) && (
        <p className="mt-0.5 text-sm text-red-500">
          {errorMessage || error || ''}
        </p>
      )}
    </div>
  )
}
