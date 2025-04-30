"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Calendar1Icon,
  CircleUser,
  Menu,
  Search,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";

export default function Navbar() {
  return (
    <nav className='px-10 py-4 justify-between container'>
      {/* logo | select data field | search input and button | leaderboard button | login/signup button | hamburger menu and profile icon */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src='/logo.svg' alt='logo' width={25} height={34} />
        </div>
        {/* search container   */}
        <SearchContainer />

        {/* right side of navbar */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center'>
              <Button type='button' variant='secondary'>
                <Image
                  src='/icons/leaderboard.svg'
                  alt='leaderboard'
                  width={14}
                  height={19}
                />
                Leaderboard
              </Button>
            </div>
            <div className='flex items-center'>
              <Button type='button' variant='outline'>
                Login / Sign up
              </Button>
            </div>
          </div>

          <Button
            type='button'
            variant='outline'
            className='flex items-center border-muted text-foreground'
          >
            <Menu className='size-5' />
            <CircleUser className='size-5' />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function SearchContainer() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-2'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='w-max min-w-[180px] justify-between text-left font-normal rounded-full px-4 py-2 min-h-[54px] shadow-md bg-white flex items-center cursor-pointer gap-2'
              aria-label={
                date
                  ? `Selected date: ${format(date, "PPP")}`
                  : "Pick a date"
              }
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <span
                className='cursor-pointer bg-primary p-2 rounded-full'
                aria-hidden='true'
              >
                <Calendar1Icon className='size-5' />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div className='relative'>
          <Input
            type='text'
            placeholder='Search'
            className='pl-10 pr-3'
            aria-label='Search'
          />
          <button
            type='button'
            className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground  cursor-pointer bg-muted p-2 rounded-full'
            aria-label='Search'
          >
            <Search className='' />
          </button>
        </div>
      </div>
    </div>
  );
}
