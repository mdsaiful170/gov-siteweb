import { cn } from "../../../lib/utilites/cn";

export const Container = ({ children, className }) => {
  return (
    <>
      <div
        className={cn(
          "w-full max-w-screen-xl p-2.5 pt-[35px] lg:pt-[46px] mx-auto ",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
