import resume from "../resume/Timi.pdf"
const Buttons = ({ icons, text, color, textColor }) => {
  return (
    <button
      className={` px-3 py-3 md:px-6 md:py-3 ovo-regular rounded-full  gap-4 ${color} ${textColor}`}
    >
      <div className="flex justify-center text-center align-middle font-bold gap-3">
        {text}
       <a href={resume} download>{icons}</a> 
      </div>
    </button>
  );
};

export default Buttons;
