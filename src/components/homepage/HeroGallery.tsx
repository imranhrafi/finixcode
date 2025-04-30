import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1103969/pexels-photo-1103969.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function HeroGallery() {
  return (
    <section className=' container md:px-10 px-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <Image
          src={images[0]}
          alt='hero'
          width={600}
          height={400}
          className='col-span-2 w-full aspect-video max-h-[360px] object-cover rounded-2xl'
        />
        <div className='flex md:flex-col justify-between gap-3'>
          <Image
            src={images[1]}
            alt='hero'
            width={300}
            height={200}
            className='w-full aspect-video max-h-[174px]  object-cover rounded-2xl '
          />
          <div className='bg-black relative w-full cursor-pointer rounded-2xl'>
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold z-10 '>
              + 2 photos
            </span>
            <Image
              src={images[2]}
              alt='hero'
              width={300}
              height={200}
              className='w-full aspect-video max-h-[174px] object-cover rounded-2xl opacity-40 '
            />
          </div>
        </div>
      </div>
    </section>
  );
}
