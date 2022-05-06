import { Fragment } from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMapPinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
// Components
import GoogleMap from "./GoogleMap";
// LogoImg
import LogoImg from "../assets/images/logo.png";
// Data
import settings from "../data/settings";
// Source
import navs from "../source/navs";

export default () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto z-10">
        <div className="py-3" data-aos="fade-up">
          <GoogleMap lat={settings.lat} lng={settings.lng} />
        </div>

        <div
          className="flex flex-wrap lg:flex-row flex-col items-center lg:justify-between justify-center py-3 border-b border-gray-100"
          data-aos="fade-up"
        >
          <div className="py-2">
            <Link to="/">
              <div className="font-bold text-xl">
                <span>STEM</span>
                <span className="text-primary">PLAST</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center flex-wrap justify-center py-2">
            {navs.map((nav, key: number) => (
              <Fragment key={key}>
                {!nav.menu ? (
                  <Link
                    to={nav.to}
                    className="mx-3 py-1 text-gray-500 text-sm hover:text-primary"
                  >
                    {nav.name}
                  </Link>
                ) : (
                  nav.menu.map((item, key: number) => (
                    <Link
                      key={key}
                      to={item.to}
                      className="mx-3 py-1 text-gray-500 text-sm hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div
          className="flex flex-wrap lg:flex-row flex-col items-center lg:justify-between justify-center py-3"
          data-aos="fade-up"
        >
          <div className="py-2">
            <a href={"mailto:" + settings.email}>
              <span className="text-gray-500 text-sm">{settings.email}</span>
            </a>
            <a href={"tel:" + settings.phone}>
              <h4 className="text-lg font-medium">{settings.phone}</h4>
            </a>
          </div>
          <a
            href={settings.address_url}
            target="_blank"
            className="flex items-center py-2"
          >
            <RiMapPinFill size={24} className="text-primary w-10" />
            <div className="text-gray-500 text-sm ml-2">
              {settings.address_long + " - " + settings.address_short}
            </div>
          </a>
          <div className="flex py-2">
            {settings.facebook && (
              <a href={settings.facebook} className="text-primary mx-3">
                <RiFacebookFill size={20} />
              </a>
            )}
            {settings.twitter && (
              <a href={settings.twitter} className="text-primary mx-3">
                <RiTwitterFill size={20} />
              </a>
            )}
            {settings.linkedin && (
              <a href={settings.linkedin} className="text-primary mx-3">
                <RiLinkedinFill size={20} />
              </a>
            )}
            {settings.instagram && (
              <a href={settings.instagram} className="text-primary mx-3">
                <RiInstagramFill size={20} />
              </a>
            )}
            {settings.youtube && (
              <a href={settings.youtube} className="text-primary mx-3">
                <RiYoutubeFill size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
