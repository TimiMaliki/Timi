import Header from "../components/Headers";
import Card from "../components/card";

const Services = () => {
    return ( 
        <div className="max-w-7xl grid place-content-center mx-auto w-full py-24 ovo-regular">
            <Header intro={"What I offer"} title={"My Services"}/>
            <div className="text-center">
                <h2 className="text-xl">
            "I aim to contribute to the success of your company by <br /> leveraging my technical skills and problem-solving mindset to build impactful web solutions."
                </h2>
            </div>

            <div className="cards grid grid-cols-4 gap-4 py-7">
            <div className="card-one">
            <Card
                icon={""}
                header={"Web design"}
                text={
                  "Web development is the process of building"
                }
                more={""}
              />
            </div>


            <div className="card-two">
            <Card
                icon={""}
                header={"Teaching"}
                text={
                  "BSc in Computer Engineering Michael Okpara University of Agriculture Umudike , Nigeria"
                }
                more={"CGPA - 3.54"}
              />
            </div>


            <div className="card-three">
            <Card
                icon={""}
                header={"UI/UX"}
                text={
                  "UI/UX design focuses on creating a seamless user experience"
                }
                more={""}
              />
            </div>



            <div className="card-four">
            <Card
                icon={""}
                header={"Graphics design"}
                text={
                  "Creative design solutions to enhance virtual communiction"
                }
                more={""}
              />
            </div>

            </div>
        </div>
     );
}
 
export default Services;