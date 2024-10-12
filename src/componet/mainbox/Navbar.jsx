import { Container } from "../compobox/Container";
import { Logo } from "../compobox/Logo";
import { navItems } from "../../../lib/db/datadb";
import { Button } from "../compobox/Button";
import { MobileMenu } from "../../share/MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  // const menuHandle =() => setmenu((pre) => !pre)
  // const menuHandle = () => {
  //   return setmenu((pre) => {
  //     return !pre;
  //   });
  // };
  const menuHandle =() => setmenu(!menu);

  return (
    <>
      <Container>
        <nav className="flex items-center gap-4 justify-between px-[30px] py-[20px] bg-white border rounded-full">
          <Logo />
          {navItems.map((res, i) => (
            <ul className="flex items-center md:gap-3 lg:gap-4 hidden lg:block">
              <li className="font-normal text-base text-textprimary" key={i}>
                <a href={res.herf}>{res.navText}</a>
              </li>
            </ul>
          ))}
          <button
            onClick={menuHandle}
            className="lg:hidden lg:ms-0 ms-auto   block"
          >
            <i className="text-xl font-bold text-textprimary ri-menu-line"></i>
          </button>
          <Button>Get Started Today</Button>
        </nav>
      </Container>
      {menu && <MobileMenu toggler={menuHandle} />}
    </>
  );
};

export default Navbar;
