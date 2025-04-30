import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EllipsisVertical } from "lucide-react";

const comments = [
  {
    id: 1,
    name: "Alex Mercer",
    initials: "AM",
    time: "14 min",
    text: "Looking forward to the game! What's the final player count?",
    isHost: true,
    replies: [
      {
        id: 11,
        name: "Rifat Khan",
        initials: "RK",
        time: "14 min",
        text: "missing few players",
      },
      {
        id: 12,
        name: "Rifat Khan",
        initials: "RK",
        time: "14 min",
        text: "got any friends?",
      },
    ],
  },
  {
    id: 2,
    name: "Alex Mercer",
    initials: "AM",
    time: "14 min",
    text: "Looking forward to the game! What's the final player count?",
    isHost: true,
    replies: [],
  },
  {
    id: 3,
    name: "Alex Mercer",
    initials: "AM",
    time: "14 min",
    text: "Looking forward to the game! What's the final player count?",
    isHost: true,
    replies: [
      {
        id: 13,
        name: "Rifat Khan",
        initials: "RK",
        time: "14 min",
        text: "got any friends?",
      },
    ],
  },
];

export default function MatchComment() {
  return (
    <div className='min-h-screen p-2 md:p-15'>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className='flex flex-col gap-2 w-full mb-3'
        >
          <div className='flex items-start gap-3 bg-[#397C6A] rounded-xl px-4 py-3 w-full break-words h-[80px]'>
            <Avatar className='h-9 w-9 bg-[#E9E7D9] text-[#397C6A]'>
              <AvatarFallback>{comment.initials}</AvatarFallback>
            </Avatar>
            <div className='flex-1 flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <span className='text-[#E9E7D9] font-medium text-base'>
                  {comment.name}
                  {comment.isHost && (
                    <span className='ml-2 text-xs text-[#B6D1C2] font-normal align-middle'>
                      (Host)
                    </span>
                  )}
                </span>
                <span className='text-xs text-[#E9E7D9] ml-2'>
                  {comment.time}
                </span>
                <EllipsisVertical className='ml-auto w-5 h-5 text-[#E9E7D9] cursor-pointer' />
              </div>
              <div className='text-[#E9E7D9] text-sm md:text-base'>
                {comment.text}
              </div>
            </div>
          </div>
          {/* Replies */}
          {comment.replies.length > 0 && (
            <div className='flex flex-col gap-2 ml-8'>
              {comment.replies.map((reply) => (
                <div
                  key={reply.id}
                  className='flex items-start gap-3 bg-[#E9E7D9] rounded-xl px-4 py-3 w-full break-words h-[80px]'
                >
                  <Avatar className='h-9 w-9 bg-[#397C6A] text-[#E9E7D9]'>
                    <AvatarFallback>{reply.initials}</AvatarFallback>
                  </Avatar>
                  <div className='flex-1 flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                      <span className='text-[#397C6A] font-medium text-base'>
                        {reply.name}
                      </span>
                      <span className='text-xs text-[#397C6A] ml-2'>
                        {reply.time}
                      </span>
                      <EllipsisVertical className='ml-auto w-5 h-5 text-[#397C6A] cursor-pointer' />
                    </div>
                    <div className='text-[#397C6A] text-sm md:text-base'>
                      {reply.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Write comment */}
      <div className='mt-4 flex items-end gap-2'>
        <Textarea
          className='flex-1 min-h-[40px] max-h-[120px] rounded-xl bg-[#F7F7F0] text-base px-4 py-2 border-none shadow-sm focus:ring-2 focus:ring-[#397C6A]'
          placeholder='Write a comment'
        />
        <Button className='rounded-xl bg-[#397C6A] text-[#E9E7D9] px-6 py-2 font-semibold text-base hover:bg-[#28594C]'>
          Send
        </Button>
      </div>
    </div>
  );
}
