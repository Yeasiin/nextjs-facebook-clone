import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="flex sticky top-0 z-50 bg-white items-center justify-between p-1 lg:px-5 shadow-md">
      {/* Header Left */}
      <div className=" flex items-center">
        <Image
          src="https://i.ibb.co/MNVXfyT/facebook.png"
          height={40}
          width={40}
          layout="fixed"
          alt=""
        />
        <div className="flex p-2 ml-2 rounded-full items-center bg-gray-100">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            type="text"
            className=" hidden sm:flex bg-transparent  items-center ml-2 outline-none placeholder-gray-500 flex-shrink "
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Header Center */}
      <div className="flex justify-center ">
        <div className="flex">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={UsersIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Header Center */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}

        {/* User Name */}
        <p className="whitespace-nowrap font-semibold pr-3">Yeasin Arfat </p>

        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
