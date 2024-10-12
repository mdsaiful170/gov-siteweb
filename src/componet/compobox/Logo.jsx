import { cn } from "../../../lib/utilites/cn";

export const Logo = ({ className }) => {
  return (
    <>
      <a href="">
        <h2
          className={cn(
            "xl:text-[40px]  lg:text-[32px] md:text-[26px] font-bold text-black text-sm sm:text-lg",
            className
          )}
        >
          GoverningDocs
        </h2>
      </a>
    </>
  );
};
