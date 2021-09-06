import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

function Widgets() {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    try {
      fetch("https://randomuser.me/api/?results=100")
        .then((res) => res.json())
        .then(({ results }) => setActiveUser(results));
    } catch (error) {}
  }, []);

  return (
    <div className="hidden lg:flex flex-col w-[300px] p-2 mt-5">
      <div className="flex justify-between items-center text-gray-600 mb-5">
        <h2 className="text-xl font-medium">Contacts</h2>
        <div className="flex space-x-3">
          <VideoCameraIcon className="h-10 hover:bg-gray-200 p-2 rounded-full" />
          <SearchIcon className="h-10 hover:bg-gray-200 p-2 rounded-full" />
          <DotsHorizontalIcon className="h-10 hover:bg-gray-200 p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
