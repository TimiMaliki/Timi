const Buttons = ({ icons, text, color, textColor }) => {
  return (
    <button
      className={`w-[204px] h-[60px]  rounded-full  gap-4 ${color} ${textColor}`}
    >
      <div className="flex justify-center text-center align-middle font-bold gap-3">
        {text}
        {icons}
      </div>
    </button>
  );
};

export default Buttons;
