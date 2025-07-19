const Header = ({intro , title , text}) => {
    return ( 
        <div>
              <div className="intro mb-5 md:mb-10">
        <h4 className="text-lg font-bold flex justify-center text-center ovo-regular mb-3">
        {intro}
        </h4>
        <h2 className="text-center text-4xl font-medium mb-6">{title}</h2>
        <p className="text-center text-lg font-medium">{text}</p>
      </div>
        </div>
     );
}
 
export default Header;