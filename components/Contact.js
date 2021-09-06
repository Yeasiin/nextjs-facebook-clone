import Image from "next/image";

function Contact({ picture, name }) {
  return (
    <div className="flex items-center space-x-5 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        width="30"
        height="30"
        src={picture.thumbnail}
        alt=""
        layout="fixed"
      />
      <p className="font-medium">{name.first + " " + name.last}</p>
      <div className="absolute bottom-2 left-3 bg-green-300 h-[10px] w-[10px] rounded-full"></div>
    </div>
  );
}

export default Contact;
