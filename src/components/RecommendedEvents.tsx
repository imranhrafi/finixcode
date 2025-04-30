import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertCircle,
  CalendarDays,
  Clock,
  Heart,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Legends Rise on the Field",
    image:
      "https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: [
      {
        name: "Football",
        color: "bg-blue-100",
      },
      {
        name: "Below 25y",
        color: "bg-red-100",
      },
    ],
    level: "Advanced",
    date: "Thu, Dec 5",
    time: "12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    spotsLeft: 2,
    price: 320,
    attending: 6,
    capacity: 8,
  },
  {
    id: 2,
    title: "Chasing Glory: Football Showdown",
    image:
      "https://images.pexels.com/photos/1103969/pexels-photo-1103969.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: [
      {
        name: "Football",
        color: "bg-blue-100",
      },
      {
        name: "Below 25y",
        color: "bg-red-100",
      },
    ],
    level: "Advanced",
    date: "Thu, Dec 5",
    time: "12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    spotsLeft: 2,
    price: 320,
    attending: 6,
    capacity: 8,
  },
  {
    id: 3,
    title: "United We Play, United Win",
    image:
      "https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: [
      {
        name: "Football",
        color: "bg-blue-100",
      },
      {
        name: "Below 25y",
        color: "bg-red-100",
      },
    ],
    level: "Advanced",
    date: "Thu, Dec 5",
    time: "12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    spotsLeft: 2,
    price: 320,
    attending: 6,
    capacity: 8,
  },
  {
    id: 4,
    title: "United We Play, United Win",
    image:
      "https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: [
      {
        name: "Football",
        color: "bg-blue-100",
      },
      {
        name: "Below 25y",
        color: "bg-red-100",
      },
    ],
    level: "Advanced",
    date: "Thu, Dec 5",
    time: "12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    spotsLeft: 2,
    price: 320,
    attending: 6,
    capacity: 8,
  },
  {
    id: 5,
    title: "United We Play, United Win",
    image:
      "https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: [
      {
        name: "Football",
        color: "bg-blue-100",
      },
      {
        name: "Below 25y",
        color: "bg-red-100",
      },
    ],
    level: "Advanced",
    date: "Thu, Dec 5",
    time: "12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    spotsLeft: 2,
    price: 320,
    attending: 6,
    capacity: 8,
  },
];

export default function RecommendedEvents() {
  return (
    <section className='py-4 px-2 md:px-4 lg:px-8 container mx-auto'>
      <div className='flex items-center justify-between mb-2'>
        <h2 className='text-lg md:text-xl font-semibold'>
          Other events you may like
        </h2>
      </div>
      <div className='relative'>
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className='-ml-2 md:-ml-4'>
            {events.map((event) => (
              <CarouselItem
                key={event.id}
                className='pl-2 md:pl-4 basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/3 max-w-[400px]'
              >
                <div className='flex flex-col max-h-[334px] h-full bg-white border rounded-xl shadow-sm overflow-hidden'>
                  <div className='relative h-[116px] w-full rounded-t-xl rounded-b-none overflow-hidden'>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={116}
                      className='object-cover w-full h-full rounded-t-xl rounded-b-none m-0 p-0'
                    />
                    <button
                      type='button'
                      className='absolute top-0 right-0 z-10 rounded-full p-1 shadow-md m-0'
                    >
                      <Heart
                        className='w-5 h-5 text-gray-500'
                        fill='black'
                      />
                    </button>
                  </div>
                  <div className='flex-1 flex flex-col gap-2 py-2 px-2 md:px-4'>
                    <div className='flex flex-wrap gap-1 mb-1 justify-between'>
                      <div className='flex items-center gap-1'>
                        {event.tags.map((tag) => (
                          <div
                            key={tag.name}
                            className={`text-xs px-3 py-2 rounded-full ${tag.color}`}
                          >
                            {tag.name}
                          </div>
                        ))}
                      </div>

                      <span className='flex items-center gap-1 text-sm'>
                        <Image
                          src='/icons/network.svg'
                          alt='share'
                          width={20}
                          height={20}
                          className='w-5 h-5'
                        />
                        {event.level}
                      </span>
                    </div>
                    <div className='text-sm md:text-lg font-medium leading-tight line-clamp-2'>
                      {event.title}
                    </div>
                    <div className='flex items-center text-xs text-muted-foreground gap-2'>
                      <CalendarDays className='w-4 h-4' />{" "}
                      {event.date}
                      <Clock className='w-4 h-4 ml-2' /> {event.time}
                    </div>
                    <div className='flex items-center text-xs text-muted-foreground gap-2'>
                      <MapPin className='w-4 h-4 text-red-500' />{" "}
                      {event.location}
                    </div>
                  </div>
                  <div className='flex items-end justify-between pt-2 px-2 md:px-4 pb-3'>
                    <div className='flex items-center gap-1 text-xs'>
                      <Users className='w-4 h-4' />
                      {event.attending}/{event.capacity} attending
                    </div>
                    <div className='flex flex-col items-end'>
                      <span className='text-xs text-rose-500 flex items-center gap-1'>
                        <AlertCircle className='w-4 h-4' />{" "}
                        {event.spotsLeft} spots left
                      </span>
                      <span className='text-sm font-semibold flex items-center gap-1'>
                        <span className='text-muted-foreground'>
                          ৳
                        </span>
                        <span className='text-2xl text-black font-normal self-end'>
                          {event.price}
                        </span>
                        <span className='text-xs text-muted-foreground self-end'>
                          /person
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='hidden md:flex gap-4 absolute -top-16 right-10 z-20'>
            <CarouselPrevious className='h-10 w-10 rounded-full shadow-md' />
            <CarouselNext className='h-10 w-10 rounded-full shadow-md' />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
