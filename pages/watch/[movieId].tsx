import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "../../hooks/useMovie";
import { Movie } from "@prisma/client";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const {data : movie } : {data: Movie} = useMovie(movieId as string);

  return(
    <div className="h-screen w-screen bg-black ">
      <nav
        className="
          
          fixed
          w-full
          p-4
          z-10
          flex
          flex-row
          items-center
          gap-8
          bg-black
          bg-opacity-70
        "
      >
        <AiOutlineArrowLeft onClick={() => router.push("/")} className="text-white cursor-pointer" size={40}/>
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light mr-2">Watching:</span>
          {movie?.title}
        </p>
      </nav>
      
      <video 
      
      autoPlay
      controls
      className="
      cursor-pointer
        h-full
        w-full
      "
      src={movie?.videoUrl}></video>
    </div>
  )

};
export default Watch;
