"use client";
import React from "react";
import { SearchContainer } from "../../app/navbar/navbar-desktop";
import RecommendedEvents from "../RecommendedEvents";
import { Button } from "../ui/button";
import BodyHeader from "./BodyHeader";
import HeroGallery from "./HeroGallery";
import InfoSection from "./InfoSection";
import PaymentMethodDialog from "./PaymentMethodDialog";

export default function Hero() {
  const [open, setOpen] = React.useState(false);
  const handleContinue = () => {
    setOpen(false);
  };
  return (
    <div className=' min-h-full bg-[#F7F7F7]'>
      <div className='md:hidden my-4 mx-auto w-full'>
        <SearchContainer />
      </div>
      <HeroGallery />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto pt-12 '>
        <div className='col-span-2 px-2 '>
          <BodyHeader />
          <InfoSection />
        </div>
        <div className='col-span-1'>
          <div className='bg-white rounded-2xl p-6 border-[.5px] border-[#E5E5E5] flex flex-col gap-6'>
            <div className='bg-white rounded-2xl px-4 py-5 border-[.5px] border-[#E5E5E5]'>
              <div className='flex justify-between items-center py'>
                <span>6 spots left</span>
                <span>
                  320tk /player <span>(both)</span>
                </span>
              </div>
            </div>
            <Button
              variant={"default"}
              className='w-full mt-4 text-black font-bold'
              onClick={() => setOpen(true)}
            >
              Join event
            </Button>
          </div>
        </div>
      </div>
      <PaymentMethodDialog
        open={open}
        onOpenChange={setOpen}
        onContinue={handleContinue}
      />
      <RecommendedEvents />
    </div>
  );
}
