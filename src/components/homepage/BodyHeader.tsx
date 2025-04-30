"use client";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  UploadIcon,
} from "lucide-react";
import { useState } from "react";

export default function BodyHeader() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className='mb-14 flex justify-between items-start'>
      <div className='flex gap-4 items-start flex-col'>
        <h1 className='text-[48px] font-black leading-[64px]'>
          Road to the Football Final
        </h1>
        <div className='flex gap-4 flex-col'>
          <small className='text-2xl text-[#4A4A4A] leading-[22px]'>
            Bashundhara Sports Complex
          </small>
          <small className='text-2xl text-[#4A4A4A] leading-[22px]'>
            Mar 14 from 7:30 PM - 9:30 PM
          </small>
        </div>
      </div>

      <div className='flex gap-4 items-center'>
        {/* upload button */}
        <UploadIcon className='w-[26px] h-[26px] cursor-pointer hover:text-primary transition-colors' />

        <button
          type='button'
          onClick={() => setIsFavorite(!isFavorite)}
          className=' cursor-pointer'
        >
          {isFavorite ? (
            <HeartIcon className='w-[26px] h-[26px] fill-primary text-primary  hover:text-primary transition-colors' />
          ) : (
            <HeartIcon className='w-[26px] h-[26px]  hover:text-primary transition-colors' />
          )}
        </button>
        <EllipsisVerticalIcon className='w-[26px] h-[26px] cursor-pointer hover:text-primary transition-colors' />
      </div>
    </div>
  );
}
