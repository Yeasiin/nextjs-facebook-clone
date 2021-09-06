import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, email, timestamp, postImage, message, image }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-lg shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width="38"
            height="15"
            alt=""
          />
          <div>
            <p className="font-medium ">{name}</p>

            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">loading...</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white ">
          <Image src={postImage} objectFit="cover" layout="fill" alt="" />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-lg bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-lg">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Connect</p>
        </div>
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
