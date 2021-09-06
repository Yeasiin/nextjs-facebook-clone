import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative rounded-full sm:rounded-none h-14 w-14 md:h-32 md:w-24 lg:h-52 lg:w-28 cursor-pointer overflow-hidden p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse ">
      <Image
        className="absolute opacity-0 md:opacity-100 rounded-full z-50 top-10 border-4 border-indigo-600"
        src={profile}
        width="40"
        height="40"
        objectFit="cover"
        layout="fixed"
        alt=""
      />

      <Image
        className="object-cover filter brightness-75 rounded-full md:rounded-xl "
        src={src}
        layout="fill"
        alt=""
      />
      <p className="absolute opacity-0 md:opacity-100 text-white bottom-4 w-5/6 text-sm truncate font-medium">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
