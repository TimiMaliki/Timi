import { useState } from "react";

const Card = ({ icon, header, text , more }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full md:w-[300px] rounded-xl border border-black ovo-regular">
      <div className="icon flex text-start p-4"><img src={icon} alt="icons" className="w-14 h-14"/></div>
      <div className="header flex text-start p-4">{header}</div>
      <div className="text p-5"><p className="text-lg font-normal flex justify-center gap-3">{text}</p></div>

      <div className="read-more w-full flex text-center align-middle justify-center ">
        <button onClick={()=> setReadMore(!readMore)} className="inline-flex text-lg ovo-regular items-center justify-center relative outline-none cursor-pointer select-none touch-manipulation text-black font-bold  h-10 px-4 py-2.5 rounded-lg  transition-colors duration-100">
          readmore
        </button>
      </div>
      {readMore && (
            <div className="text-lg flex text-center align-middle justify-center">{more}</div>
        )}
    </div>
  );
};

export default Card;
