import { cn } from "../../../lib/utilites/cn";

export const Gradienttext = ({ className, children }) => {
  return (
    <>
      <span
        className={cn(
          "bg-clip-text text-transparent bg-gradient-to-b from-[#00D2FF] to-[#059DBE]",
          className
        )}
      >
        {children}
      </span>
    </>
  );
};
