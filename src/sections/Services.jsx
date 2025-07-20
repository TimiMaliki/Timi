import Header from "../components/Headers";
import Card from "../components/card";
import webDesign from "../img/tool/globe_10747502.png";
import teaching from "../img/tool/teacher_9721094.png";
import behance from "../img/tool/social-media_14417430.png";
import gallery from "../img/tool/gallery_833281.png";

const Services = () => {
    return ( 
        <div className="max-w-7xl grid place-content-center mx-auto w-full py-8 ovo-regular">
            <Header intro={"What I offer"} title={"My Services"}/>
            <div className="text-center">
                <h2 className="text-xl">
            "I aim to contribute to the success of your company by <br /> leveraging my technical skills and problem-solving mindset to build impactful web solutions."
                </h2>
            </div>

            <div className="cards grid grid-cols-4 gap-4 py-7">
            <div className="card-one">
            <Card
                icon={webDesign}
                header={"Web design"}
                text={
                  "Web development is the process of building"
                }
                readmore={"readmore"}
                more={""}
              />
            </div>


            <div className="card-two">
            <Card
                icon={teaching}
                header={"Teaching"}
                text={
                  "BSc in Computer Engineering Michael Okpara University of Agriculture Umudike , Nigeria"
                }
                readmore={"readmore"}
                more={"CGPA - 3.54"}
              />
            </div>


            <div className="card-three">
            <Card
                icon={behance}
                header={"UI/UX"}
                text={
                  "UI/UX design focuses on creating a seamless user experience"
                }
                readmore={"readmore"}
                more={""}
              />
            </div>



            <div className="card-four">
            <Card
                icon={gallery}
                header={"Graphics design"}
                text={
                  "Creative design solutions to enhance virtual communiction"
                }
                readmore={"readmore"}
                more={""}
              />
            </div>

            </div>
        </div>
     );
}
 
export default Services;