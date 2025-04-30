"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleUser, Menu, Search } from "lucide-react";
import Image from "next/image";

export default function NavbarMobile() {
  return (
    <nav className='flex items-center justify-between px-4 py-3 bg-white shadow-md md:hidden'>
      {/* Left: Hamburger menu with Drawer */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            aria-label='Open menu'
          >
            <Menu className='size-6' />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className='sr-only'>Menu</DrawerTitle>
          </DrawerHeader>
          <div className='p-4 flex flex-col gap-4'>
            <Button variant='ghost' className='justify-start'>
              Home
            </Button>
            <Button variant='ghost' className='justify-start'>
              Leaderboard
            </Button>
            <Button variant='ghost' className='justify-start'>
              Login / Sign up
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
      {/* Center: Logo */}
      <Image src='/logo.svg' alt='logo' width={25} height={34} />
      {/* Right: Profile & Search */}
      <div className='flex items-center gap-2'>
        <Button
          type='button'
          variant='ghost'
          size='icon'
          aria-label='Search'
        >
          <Search className='size-5' />
        </Button>
        <Button
          type='button'
          variant='ghost'
          size='icon'
          aria-label='Profile'
        >
          <CircleUser className='size-5' />
        </Button>
      </div>
    </nav>
  );
}
