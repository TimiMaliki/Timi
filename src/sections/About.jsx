import Card from "../components/card";
import profilePicture from "../img/pexels-almustapha-adam-1663967297-30159714.jpg";
import lang from "../img/about-me/program_16632872.png"
import edu from "../img/about-me/mortarboard_114806.png"
import project from "../img/about-me/business-bag_18922627.png"

const AboutMe = () => {


  return (
    <div className="max-w-7xl grid place-content-center mx-auto w-full py-24">
      <div className="intro mb-5 md:mb-10">
        <h4 className="text-lg font-bold flex justify-center text-center ovo-regular mb-3">
          Introduction
        </h4>
        <h2 className="text-center text-4xl font-medium">About me</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="profile-picture mb-4">
          <img
            src={profilePicture}
            alt="profilepicture"
            className="w-full md:w-[350px] md:h-[400px] rounded-xl"
          />
        </div>

        <div className="w-full details ovo-regular">
          <div className="intro">
            <h4 className="md:p-5 text-base font-semibold">
              I am an experienced Frontend Developer with 5 years of
              professional expertise in the field. Throughout my career. I have
              had the priviledge of collaborating with skilled individuals ,
              contributing to their success and growth.
            </h4>
          </div>
          <div className="w-full details-about md:flex md:justify-center gap-4">
              <div className="card-one">
                <Card icon={lang} header={"Languages"} text={"Html, Css, JavaScript, ReactJs, NextJs"} more={"TailwindCss , BootStrap"}/>
              </div>

              <div className="card-two">
                <Card icon={edu} header={"Education"} text={"BSc in Computer Engineering Michael Okpara University of Agriculture Umudike , Nigeria"} more={"CGPA - 3.54"}/>
              </div>

              <div className="card-three">
                <Card icon={project} header={"Projects"} text={""}/>
              </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
