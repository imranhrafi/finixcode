"use client";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

// Tag list constant
const TAGS = [
  { name: "Football", color: "bg-green-100" },
  { name: "Relay", color: "bg-blue-100" },
  { name: "Female", color: "bg-red-100" },
  { name: "Age:Below 25", color: "bg-yellow-100" },
];

const HIGHLIGHTS = [
  { label: "mon, 2 Dec", icon: CalendarIcon },
  { label: "7.30 AM - 8.30 AM", icon: ClockIcon },
  { label: "Arrive 15 min before start", icon: TimerIcon },
  { label: "Venue", icon: MapPinIcon },
];

const REFUND_POLICIES = [
  { label: "Full refund if host cancels the game" },
  { label: "Full refund if you cancel 24+ hours in advance " },
  { label: "Full refund if game is cancelled due to low attendance" },
];

function TagList() {
  return (
    <div className='flex flex-wrap gap-2'>
      {TAGS.map((tag) => (
        <Badge
          key={tag.name}
          className={`${tag.color} rounded-full px-4 py-2`}
          variant='outline'
        >
          {tag.name}
        </Badge>
      ))}
    </div>
  );
}

function HighlightsList() {
  return (
    <ul className='flex flex-col gap-2'>
      {HIGHLIGHTS.map((item) => (
        <li key={item.label} className='flex items-center gap-2'>
          <item.icon className='w-4 h-4' />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function RefundPolicyList() {
  return (
    <ul className='flex flex-col gap-2'>
      {REFUND_POLICIES.map((item) => (
        <li key={item.label} className='flex items-center gap-2'>
          <CheckIcon className='w-4 h-4' />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function HostInfo() {
  return (
    <div className='flex flex-col md:flex-row gap-4 py-7 px-4 md:px-6 bg-[#4E566B] rounded-lg justify-between'>
      <div className='flex gap-4 md:gap-6 items-center'>
        <Image
          src={"https://picsum.photos/200/300"}
          alt='host'
          width={100}
          height={100}
          className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover'
        />
        <div className='flex flex-col text-white'>
          <h3 className='text-lg md:text-2xl font-bold mb-1 md:mb-2'>
            John Doe
          </h3>
          <p className='text-sm md:text-base'>23 activities hosted</p>
          <p className='text-sm md:text-base'>4.5 host rating </p>
        </div>
      </div>
      <div className='flex gap-2 mt-3 md:mt-0'>
        <Button
          variant='default'
          className='bg-[#FDE8CD] text-[#4E566B] px-4 md:px-6'
        >
          Message
        </Button>
        <Button
          variant='ghost'
          className='border border-[#FDE8CD] text-[#FDE8CD] px-4 md:px-5'
        >
          View Profile
        </Button>
      </div>
    </div>
  );
}

export default function InfoTabsContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='my-10 w-full'>
      {/* Tag & Beginner Row */}
      <div className='flex flex-col sm:flex-row justify-between border-b border-muted py-6 gap-3 sm:gap-0'>
        <TagList />
        <div className='flex gap-2 items-center mt-2 sm:mt-0'>
          <Image
            src='/icons/network.svg'
            alt='share'
            width={20}
            height={20}
            className='w-5 h-5'
          />
          <p className='text-sm'>Beginner</p>
        </div>
      </div>

      {/* About Event */}
      <div className='flex flex-col py-6 border-b border-muted'>
        <h2 className='text-xl md:text-2xl font-bold mt-4 mb-3'>
          About this event
        </h2>
        <div className='flex flex-col gap-2 items-start'>
          <p
            className={`${
              !isExpanded
                ? "line-clamp-3 text-[#171717] text-base"
                : "text-[#171717] text-base"
            }`}
          >
            Join us for an exhilarating football tournament at the
            heart of Bashundhara Sports Complex! Experience the thrill
            of competitive football as talented teams battle it out on
            the pristine pitch. This beginner-friendly event features
            skilled players under 25, including a dedicated
            women&apos;s division, showcasing the diverse talent in
            our local football community. Whether you&apos;re a player
            or a passionate spectator, immerse yourself in the
            electric atmosphere of live football action. Don&apos;t
            miss this opportunity to witness emerging stars and be
            part of an unforgettable sporting celebration that brings
            together football enthusiasts from all walks of life.
          </p>
          <button
            type='button'
            onClick={() => setIsExpanded(!isExpanded)}
            className='text-primary hover:underline mt-2 text-sm font-medium'
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </div>
      </div>

      {/* Location */}
      <div className='border-b border-muted pb-6'>
        <h1 className='text-xl md:text-2xl font-bold mt-4 mb-3'>
          Location
        </h1>
        <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-0'>
          <div>
            <h2 className='text-[#4E566B] text-base md:text-lg'>
              NDE Field
            </h2>
            <p className='text-[#4A4A4A] text-sm md:text-base'>
              Jean Baptiste Point du Sable Lake Shore Drive, Chicago,
              Illinois
            </p>
          </div>
          <Button
            variant='outline'
            className='mt-2 sm:mt-0 w-full sm:w-auto'
          >
            Open Maps
          </Button>
        </div>
      </div>

      {/* Good to Know */}
      <div className='flex flex-col pb-6 border-b border-muted'>
        <h1 className='text-xl md:text-2xl font-bold mt-4 mb-3'>
          Good to Know
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='flex flex-col gap-4 bg-[#DA6049] p-6 md:p-10 rounded-lg text-white md:col-span-1'>
            <h2 className='text-base md:text-lg font-bold'>
              Highlights
            </h2>
            <HighlightsList />
          </div>
          <div className='flex flex-col gap-4 md:col-span-2 bg-[#34735F] text-white p-4 md:p-6 rounded-lg'>
            <h2 className='text-base md:text-lg font-bold'>
              Refund & cancellation policy
            </h2>
            <RefundPolicyList />
            <p className='text-xs md:text-sm self-end mt-2 md:mt-4 cursor-pointer hover:text-primary'>
              Learn more
            </p>
          </div>
        </div>
      </div>

      {/* Hosted by */}
      <div className='flex flex-col gap-4 border-b border-muted pb-6 justify-center'>
        <h1 className='text-xl md:text-2xl font-bold mt-4 mb-3'>
          Hosted by
        </h1>
        <HostInfo />
      </div>
    </div>
  );
}
