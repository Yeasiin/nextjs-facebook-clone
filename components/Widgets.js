import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Contact from "./Contact";

function Widgets() {
  const [activeUsers, setActiveUsers] = useState();

  useEffect(() => {
    try {
      fetch("https://randomuser.me/api/?results=50")
        .then((res) => res.json())
        .then(({ results }) => setActiveUsers(results));
    } catch (error) {}
  }, []);

  return (
    <div className=" hidden h-screen overflow-y-auto scrollbar-hide lg:flex flex-col w-[300px] p-2 mt-5">
      <div className="flex justify-between items-center text-gray-600 mb-5">
        <h2 className="text-xl font-medium">Contacts</h2>
        <div className="flex space-x-3">
          <VideoCameraIcon className="h-10 hover:bg-gray-200 p-2 rounded-full" />
          <SearchIcon className="h-10 hover:bg-gray-200 p-2 rounded-full" />
          <DotsHorizontalIcon className="h-10 hover:bg-gray-200 p-2 rounded-full" />
        </div>
      </div>
      <div className="overscroll-y-auto">
        {activeUsers &&
          activeUsers.map((activeUser) => (
            <Contact
              key={activeUser.email}
              picture={activeUser.picture}
              name={activeUser.name}
            />
          ))}
      </div>
    </div>
  );
}

export default Widgets;
