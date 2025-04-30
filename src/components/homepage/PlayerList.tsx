import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users2 } from "lucide-react";

const players = [
  { name: "Alex Mercer", isHost: true },
  { name: "Jamir Uddin" },
  { name: "Biplu Ahmed" },
  { name: "Topu Barman" },
  { name: "Rakib Hossain" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function PlayerList() {
  return (
    <div className=' min-h-screen p-2 md:p-6'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-bold'>Players</h2>
        <div className='flex items-center gap-1 text-base text-gray-700'>
          <Users2 className='w-5 h-5' />
          <span>{players.length}/11</span>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        {players.map((player) => (
          <div
            key={player.name}
            className='flex items-center justify-between bg-[#397C6A] rounded-xl px-4 py-3 md:py-4 shadow-sm'
          >
            <div className='flex items-center gap-3 md:gap-4'>
              <Avatar className='h-10 w-10 text-base bg-[#E9E7D9] text-[#397C6A]'>
                <AvatarFallback>
                  {getInitials(player.name)}
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span className='text-[#E9E7D9] font-medium text-base md:text-lg'>
                  {player.name}
                  {player.isHost && (
                    <span className='ml-2 text-xs text-[#B6D1C2] font-normal align-middle'>
                      (Host)
                    </span>
                  )}
                </span>
              </div>
            </div>
            <Button
              variant='outline'
              className='rounded-lg px-4 py-1 text-sm font-medium bg-white text-[#397C6A] border-none shadow-md hover:bg-[#E9E7D9]'
            >
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
