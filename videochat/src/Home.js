import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf2 from "../src/assets/conf2.jpg";
import Navbar from "./components/Navbar";

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    console.log(RoomCode);

    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-template-curly-in-string
        navigate('/room/${RoomCode}');
    };

    return (
    <div className="">
        {/*Navbar*/}
         <Navbar />
        {/* Hero */}
        <div className="relative h-screen">
            {/* Image */}
            <div className="absolute h-full w-full flex overflow-hidden">
                <img src={conf2} alt="" className="object-cover w-full h-full" />
            </div>
            {/* Hero Info */}
            <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
                {/*Main*/}
            <div className="flex flex-col items-center justify-center pb-8">
                <h1 className="text-[50px] md:text-[80px] text-white font-bold pt-6">Video Chat App</h1>

            </div>

            {/*Enter Code*/}

     <form onSubmit={submitCode}
     className=" text-white md:pt-12 flex flex-col items-center justify-center">
        <div className=" flex flex-col justify-center items-center">

     <label className="text-[30px] md:text-[40px] font-bold pt-12">Enter Room Code</label>

     <input type = "text" required placeholder="Enter Room Code" value={RoomCode} 
      onChange={(e) => setRoomCode(e.target.value)} className="py-1.5 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6"
     />
     </div>
     <button type="submit" className="bg-blue-500 font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-2">Go</button>
     </form>   
     </div>
     </div>
     </div>
    );
};
 

export default Home;