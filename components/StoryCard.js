import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative rounded-full sm:rounded-none h-14 w-14 sm:h-24 sm:w-14 md:h-32 md:w-24 lg:h-52 lg:w-28 cursor-pointer overflow-hidden p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse ">
      <Image
        className="absolute opacity-0 sm:opacity-100 rounded-full z-50 top-10 border-4 border-indigo-600"
        src={profile}
        width="40"
        height="40"
        objectFit="cover"
        layout="fixed"
        alt=""
      />

      <Image
        className="object-cover filter brightness-75 rounded-xl "
        src={src}
        layout="fill"
        alt=""
      />
    </div>
  );
}

export default StoryCard;
