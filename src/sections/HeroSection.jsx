import { HandRaisedIcon } from "@heroicons/react/24/solid";
import myPic from "../img/pexels-almustapha-adam-1663967297-30159714.jpg";

const Hero = () => {
  return (
    <div className="w-full grid place-content-center mt-20 md:mt-28">
      <div className="flex justify-center mb-4">
        <img
          src={myPic}
          alt="Timi maliki"
          className="w-40 h-40 object-cover"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div
        className="myName flex justify-center gap-4 mb-5"
        style={{ letterSpacing: "2px" }}
      >
        <h3 className="font-semibold text-lg">Hi! I'm Timi Maliki</h3>{" "}
        <h2 className="text-2xl animate-wave -mt-2"> 👋</h2>
      </div>

      <div className="job-description text-5xl font-semibold text-center mb-5">
        <h4>frontend Web developer </h4>
        <h4>based in Nigeria.</h4>
      </div>
      <div className="intro">
       <h4 className="text-lg font-bold">I am a frontend developer from Ebonyi, Nigeria with 5 years of experience</h4>
      </div>
    </div>
  );
};

export default Hero;
