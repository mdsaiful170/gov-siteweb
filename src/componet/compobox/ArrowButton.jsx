import { cn } from "../../../lib/utilites/cn"


export const ArrowButton = ({className, children}) => {
  return (
    <>
       <button className={cn("lg:size-10  size-8 flex items-center justify-center rounded-full text-textblue" , className)}>
           {children}
       </button>
    </>
  )
}


