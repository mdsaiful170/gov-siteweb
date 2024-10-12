export const Solution = ({ img, title, dis1, dis2 }) => {
  return (
    <>
      <div className="p-5 rounded-[20px] max-w-full md:max-w-[272px] h-[349px] transition-all duration-150 hover:bg-textblue shadow-boxhadow group">
        <div className="size-[58px] rounded-full gradient-one flex items-center justify-center">
          <img src={img} alt="img box" className="" />
        </div>
        <h3 className="text-base py-5 font-bold group-hover:text-white text-textsecondary lg:text-[18px]">
          {title}
        </h3>
        <div className="*:group-hover:text-white space-y-2.5 ">
          <p className="text-textprimary  font-normal text-xs sm:text-base leading-5">
            {dis1}
          </p>
          {dis2 && (
            <p className="text-textprimary font-normal text-xs sm:text-base leading-">
              {dis2}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
