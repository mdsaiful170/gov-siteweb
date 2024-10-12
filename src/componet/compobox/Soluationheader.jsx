import { Arrow, Arrow2 } from "./Arrow";
import { ArrowButton } from "./ArrowButton";
import { Heading } from "./Heading";

export const Soluationheader = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-10">
        <Heading gradinet={"Solution"}>Problem & </Heading>
        <div className="flex items-center justify-between lg:gap-4 xl:gap-5 md:gap-2.5 gap-2">
          <ArrowButton className={"shadow-arrwshadow"}>
            <Arrow />
          </ArrowButton>
          <ArrowButton className={"gradient-one text-white"}>
            <Arrow2 />
          </ArrowButton>
        </div>
      </div>
    </>
  );
};
