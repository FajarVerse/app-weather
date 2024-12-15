import { useEffect, useRef } from "react";
import Loader from "../elements/Loader";

const Loading = () => {
  const loaderRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      loaderRef.current.classList.add("loader-hidden");
    }, 2000);
  });

  return (
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-400 visible transition-all duration-500 ease-in-out"
        ref={loaderRef}
      >
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1">
          <Loader />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-14 w-full px-16">
          <h1 className="font-raleway font-semibold text-lg text-center text-white">
            Langit sedang kami pantau... Hampir siap! ☀️
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loading;
