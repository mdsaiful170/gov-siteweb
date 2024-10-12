import { cn } from "../../../lib/utilites/cn";

export const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          "inline-block rounded-full gradient-one text-[10px] lg:text-[12px] xl:text-base text-white lg:px-6 font-bold capitalize lg:py-4 md:px-4 md:py-3 px-4 py-2",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
