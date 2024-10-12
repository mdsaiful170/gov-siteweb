import { cn } from "../../../lib/utilites/cn";
import { Gradienttext } from "./Gradienttext";
export const Heading = ({ children, className, gradinet }) => {
  return (
    <>
      <h1
        className={cn(
          "xl:text-[46px] capitalize lg:text-[35px]  md:text-2xl text-xl font-bold",
          className
        )}
      >
        {children} <Gradienttext>{gradinet}</Gradienttext>
      </h1>
    </>
  );
};
