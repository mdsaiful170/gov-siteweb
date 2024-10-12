import { navItems } from "../../lib/db/datadb";
import { Logo } from "../componet/compobox/Logo";

export const MobileMenu = ({toggler}) => {
  return (
    <>
      <div className="lg:hidden block absolute top-0 min-h-screen left-0 right-0 z-50  w-full bg-white p-6">
         <div className="flex pb-5 items-center justify-between">
            <Logo />
            <i onClick={toggler} className="ri-close-line cursor-pointer text-xl font-bold"></i>
         </div>
        <nav>
          {navItems.map((res, i) => (
            <ul className="pt-2">
              <li className="font-normal text-base text-textprimary" key={i}>
                <a href={res.herf}>{res.navText}</a>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </>
  );
};
