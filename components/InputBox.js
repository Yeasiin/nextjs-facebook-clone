import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import firebase from "firebase";
import { db, storage } from "../firebaseconfig";

function InputBox() {
  const [session, loading] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef();

  const [imageToPost, setImageToPost] = useState();

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        image: session.user.image,
        email: session.user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (err) => console.error(err),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-md shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex p-2 items-center">
        <Image
          className="rounded-full px-4 shadow-lg inline-block "
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
          alt=""
        />
        <form action="" className="flex ml-2 flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-10 bg-gray-100 placeholder-gray-500 flex-grow px-5 focus:outline-none "
            type="text"
            placeholder={`What's on your mind, ${
              session.user.name.split(" ")[0]
            }`}
          />
          <button hidden type="submit" onClick={sendPost}></button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className=" group flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer "
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs opacity-0 group-hover:opacity-90 text-center text-red-500">
              Remove
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly px-3 pt-3 pb-1 border-t ">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <input
            ref={filePickerRef}
            type="file"
            hidden
            onChange={addImageToPost}
          />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
