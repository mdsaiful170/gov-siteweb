import { cn } from "../../lib/utilites/cn";

export const Reviewbox = (props) => {
  const { onClick, img, name, hp,  active } = props || {};
  return (
    <>
      <button onClick={onClick} className={cn("inline-flex items-center px-5 py-[12px] justify-start bg-white gap-[13px] border border-textblue rounded-[20px] w-full md:w-[400px] lg:w-[491px]" , active && 'gradient-one')}>
        <img
          src={img}
          alt=""
          className="rounded-full object-cover size-[68px]"
        />
        <div className={cn("text-textprimary text-base font-semibold text-left", active && 'text-white')}>
          <h4>{name}</h4>
          <p>{hp}</p>
        </div>
      </button>
    </>
  );
};
