import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center ml-2 p-2 my-1 cursor-pointer rounded-lg hover:bg-gray-100 active:bg-gray-200">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width="28"
          height="28"
          layout="fixed"
          alt=""
        />
      )}
      {Icon && <Icon className="h-7 w-7 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium ml-4 ">{title}</p>
    </div>
  );
}

export default SidebarRow;
