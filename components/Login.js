import { signin } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://i.ibb.co/N98dbLg/Facebook-logo.png"
        width={400}
        height={400}
        alt=""
        objectFit="contain"
      />
      <button
        className="bg-blue-500 px-5 py-3 rounded-full text-white capitalize font-bold"
        onClick={signin}
      >
        Login With Facebook
      </button>
    </div>
  );
}

export default Login;
