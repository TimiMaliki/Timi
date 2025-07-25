import Card from "../component/card";
import profilePicture from "../img/pexels-almustapha-adam-1663967297-30159714.jpg";
import lang from "../img/about-me/program_16632872.png";
import edu from "../img/about-me/mortarboard_114806.png";
import project from "../img/about-me/business-bag_18922627.png";
import github from "../img/tool/git_2111423.png";
import figma from "../img/tool/figma_5968704.png";
import stackOverflow from "../img/tool/stack_13651023.png";
import vscode from "../img/tool/visual-basic_5968571.png";
import Header from "../component/Headers";

const AboutMe = () => {
  return (
    <div className="max-w-7xl grid place-content-center mx-auto w-full py-24">
    <Header intro={"Introduction"} title={"About me"}/>
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
          <div className="w-full details-about  md:flex md:justify-center gap-2 md:gap-4">
            <div className="card-one">
              <Card
                icon={lang}
                header={"Languages"}
                text={"Html, Css, JavaScript, ReactJs, NextJs"}
                readmore={"readmore"}
                more={"TailwindCss , BootStrap,WordPress,Wixx"}
              />
            </div>

            <div className="card-two">
              <Card
                icon={edu}
                header={"Education"}
                text={
                  "BSc in Computer Engineering Michael Okpara University of Agriculture Umudike , Nigeria"
                }
                readmore={"readmore"}
                more={"CGPA - 3.54"}
              />
            </div>

            <div className="card-three">
              <Card
                icon={project}
                header={"Experience"}
                text={"One Year Internship"}
                readmore={"readmore"}
                more={"One Year Internship at Achota Limited , Ebonyi State Nigeria"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tools py-10 ovo-regular">
        <div className="intro flex justify-center text-center p-9">
          <h2 className="text-lg font-medium">Tools I use</h2>
        </div>
        <div className="tools-box grid md:flex md:justify-center gap-4">
        <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={vscode} alt="github" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={github} alt="github" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={figma} alt="github" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={stackOverflow} alt="github" className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
