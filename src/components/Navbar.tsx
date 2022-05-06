import { Fragment, useEffect, useState } from "react";
import { RiArrowDownSLine, RiMenuFill, RiPhoneFill } from "react-icons/ri";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import LocaleSelect from "./LocaleSelect";
// LogoImg
import LogoImg from "../assets/images/logo.png";
// Source
import navs from "../source/navs";
// Data
import settings from "../data/settings";
// Actions
import { setNav } from "../store/actions";

class NavbarProps {}
export default ({}: NavbarProps) => {
  let location = useLocation();
  let { open } = useSelector((state: any) => state.appReducer.nav);
  let [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 20) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    setNav({ open: false });
  }, [location.pathname]);

  return (
    <nav
      className={
        "fixed  top-0 w-full z-50 transition-all ease-linear duration-200" +
        (scroll ? " bg-white shadow" : "") +
        (open ? " -left-60" : " left-0")
      }
    >
      <div
        className={
          "w-full mx-auto flex items-center justify-between h-full p-2 md:px-6"
        }
      >
        <div data-aos="fade-down-right">
          <Link to="/">
            <div className="font-bold text-xl">
              <span>STEM</span>
              <span className="text-primary">PLAST</span>
            </div>
          </Link>
        </div>
        <div
          className="lg:h-auto h-screen lg:w-auto w-60 lg:relative absolute top-0 -right-60 lg:bg-transparent bg-white lg:shadow-none shadow lg:right-0"
          data-aos="fade-down"
        >
          <div className="flex items-center justify-center h-full">
            <div className="flex lg:flex-row flex-col items-center w-full">
              {navs.map((nav, key: number) => (
                <NavItem location={location} {...nav} key={key} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center" data-aos="fade-down-left">
          <a href={"tel:" + settings.phone} className="flex items-center">
            <RiPhoneFill className="text-primary text-xl md:text-2xl" />
            <div className="text-right">
              <div className="font-medium text-xs md:text-sm">
                {settings.phone}
              </div>
              <div className="text-gray-500 text-xs">Bizi Ara</div>
            </div>
          </a>
          <div className="ml-3">
            <LocaleSelect />
          </div>
          <div
            onClick={() => setNav({ open: !open })}
            className="flex items-center justify-center w-8 h-8 lg:hidden opacity-80 cursor-pointer hover:opacity-100"
          >
            <RiMenuFill className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

class NavItemProps {
  name?: string;
  to?: string;
  menu?: any[] | null;
  exact?: boolean;
  location?: any;
}
const NavItem = ({
  name = "",
  to = "",
  menu = null,
  exact = false,
  location,
}: NavItemProps) => {
  let [open, setOpen] = useState(false);
  let active = location.pathname.indexOf(to) == 0;
  return (
    <Menu as="div" className="w-full lg:w-auto">
      <Menu.Button className="w-full">
        <NavLink
          to={!menu ? to : "#"}
          onClick={() => {
            setOpen(!open);
          }}
          className={
            "flex items-center text-sm text-gray-600 font-medium lg:px-5 px-10 py-3 w-full" +
            (menu ? (active ? " text-primary" : "") : "")
          }
          activeClassName={!menu ? "text-primary" : ""}
          exact={exact}
        >
          {name}
          {menu ? (
            <RiArrowDownSLine
              size={16}
              className={
                "ml-2 transform transition-all ease-linear duration-100 -mr-3" +
                (open ? " rotate-180" : "")
              }
            />
          ) : null}
        </NavLink>
      </Menu.Button>
      {menu ? (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="lg:absolute lg:shadow bg-white rounded py-5 lg:pl-0 pl-5"
            onBlur={() => setOpen(false)}
          >
            {menu.map((item, key: number) => (
              <Menu.Item key={key}>
                {({ active }) => (
                  <NavLink
                    to={item.to}
                    onClick={() => setNav({ open: false })}
                    className="flex items-center text-sm text-gray-600 font-medium px-8 py-2 lg:pr-20 opacity-80 hover:opacity-100 hover:text-primary"
                    activeClassName="text-primary"
                    exact={true}
                  >
                    {item.name}
                  </NavLink>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      ) : null}
    </Menu>
  );
};
