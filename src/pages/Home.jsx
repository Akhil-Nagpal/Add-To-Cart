import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section
        className="w-screen h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover overflow-hidden
        bg-[url('https://images.unsplash.com/photo-1495610379499-a1f03b4732a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <div className="w-screen h-screen bg-black/75 overflow-hidden"></div>
        <div className="sm:w-1/2  flex flex-col justify-center items-center gap-5 absolute text-white">
          <h1 className="sm:text-5xl w-2/3 text-3xl prompt-extrabold text-center sm:w-4/5 sm:tracking-wide">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="inter text-md font-extralight text-center w-4/5">
            Browse through our diverse range of meticulously crafted
            garments, designed to bring out your individuality and
            cater to your sense of style.
          </p>
          <Link
            to={"/shop"}
            className="bg-white sm:px-8 w-4/5 py-2 rounded-full text-black flex  justify-center 
            text-center hover:bg-black hover:text-white transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
