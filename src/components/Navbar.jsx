import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import SocialLinks from "./SocialLinks";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-1 fixed h-[80px]  top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8 ">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="/resume/Himanshu_resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <div
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
            }}
            className=""
          >
            <SocialLinks />
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-5 black-gradient absolute top-20 right-0 mx-5 my-0 min-w-[100px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[14px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="text-secondary hover:text-white text-[14px] font-medium cursor-pointer">
                <a href="/resume/Himanshu_resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
              <SocialLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
