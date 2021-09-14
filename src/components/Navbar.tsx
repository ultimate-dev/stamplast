import { useEffect, useState } from "react";
import { RiMenuFill, RiPhoneFill } from "react-icons/ri";
// LogoImg
import LogoImg from "../assets/images/logo.png";

class NavbarProps {}
export default ({}: NavbarProps) => {
  let [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    }
  }, []);
  return (
    <nav
      className={
        "fixed left-0 top-0 w-full z-50 transition-all ease-linear duration-100" +
        (scroll ? " bg-white shadow" : "")
      }
    >
      <div
        className={
          "w-full mx-auto flex items-center justify-between h-full p-2 md:px-10"
        }
      >
        <div>
          <img
            src={LogoImg}
            className={
              "object-contain transition-all ease-linear duration-100" + (scroll ? " lg:h-12 h-10" : " lg:h-14 h-12")
            }
          />
        </div>
        <div
          className={
            "lg:relative lg:w-auto lg:bg-transparent lg:right-0 fixed flex items-center justify-center top-0  bg-white h-full w-60 -right-60"
          }
        >
          <div className="flex lg:flex-row flex-col items-center text-sm text-gray-600 font-medium">
            <div className="px-5">
              <div className="">Ana Sayfa</div>
            </div>
            <div className="px-5">
              <div className="">Kurumsal</div>
            </div>
            <div className="px-5">
              <div className="">Ürünler</div>
            </div>
            <div className="px-5">
              <div className="">Habeler</div>
            </div>
            <div className="px-5">
              <div className="">Özellikler</div>
            </div>
            <div className="px-5">
              <div className="">İletişim</div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <RiPhoneFill className="text-primary text-xl md:text-2xl" />
            <div className="text-right">
              <div className="font-medium text-xs md:text-sm">
                +90 224 4932040
              </div>
              <div className="text-gray-500 text-xs">İletişime Geç</div>
            </div>
          </div>
          <div className="flex items-center justify-center ml-5 w-8 h-8 lg:hidden opacity-80 cursor-pointer hover:opacity-100">
            <RiMenuFill className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};
