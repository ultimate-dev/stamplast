import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { RiArrowRightSLine, RiArrowRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import BG from "../assets/images/de.png";
// Svg
import MapSvg from "../assets/svgs/map.svg";
// Data
import settings from "../data/settings";
import { Fragment } from "react";

const options = {
  background: {
    color: {
      value: "transparent",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  particles: {
    color: {
      value: "#e6f3f9",
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      speed: 1,
    },
    number: {
      density: {
        enable: true,
      },
      value: 6,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.4,
      },
      value: {
        min: 0.4,
        max: 0.8,
      },
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    shape: {
      options: {
        polygon: {
          sides: 6,
        },
        star: {
          sides: 6,
        },
      },
      type: "polygon",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 100,
      },
      value: {
        min: 100,
        max: 160,
      },
      animation: {
        minimumValue: 40,
      },
    },
  },
};

class IntroProps {}
const Intro = ({}: IntroProps) => {
  return (
    <div className="lg:h-screen w-full pt-14">
      <Particles
        options={options}
        className="z-0 absolute left-0 top-0 w-full h-full"
      />
      <div className="container h-full mx-auto flex lg:flex-row flex-col-reverse items-center relative z-10">
        <div className="lg:w-1/2 md:p-10 py-10">
          <h1 className="text-3xl font-semibold mb-10" data-aos="fade-up">
            <span className="text-primary">Stamplast</span> Plastik Üretim
            Teknolojileri
          </h1>
          <div className="text-gray-500 mb-10" data-aos="fade-up">
            <p>
              Başta otomotiv olmak üzere tüm iş kollarında iş ortaklarına hizmet
              vermeyi hedeflemektedir. Önümüzdeki yıllarda teknoloji, üretim,
              kalite, dizayn ve pazarlama konularında yatırımlarına hız
              kazandıracaktır.
            </p>
          </div>
          <div className="flex" data-aos="fade-up">
            <Link
              to="/corporate/about"
              className="flex items-center bg-primary text-white px-10 py-3 rounded"
            >
              Hakkımızda <RiArrowRightFill className="ml-1" size={16} />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:p-10 py-10" data-aos="fade-up">
          <Tilt className="mb-5">
            <img
              className="relative w-full rounded shadow z-10"
              src="https://lh3.googleusercontent.com/eOKK6I9KKALQksEAljq40sAg-XgrJcujZItPMFFBF3nmAAQnYwqaPAXMJIkyRPN_8eMpr-fpH1xPbOK6=w1080-h608-p-no-v0"
            />
          </Tilt>
          <a
            target="_blank"
            href="https://goo.gl/maps/aDdHsktkUR7YCNA79"
            className="flex items-center"
            data-aos="fade-up"
          >
            <img src={MapSvg} width="90" height="70" alt="map" />
            <div className="ml-4 text-sm">
              <div className="text-gray-500">{settings.address_long}</div>
              <div className="text-gray-400">{settings.address_short}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

class BreadcrumbProps {
  breadcrumbs?: any[];
  head?: string;
}
const Breadcrumb = ({ breadcrumbs = [], head = "" }: BreadcrumbProps) => {
  return (
    <div className="mt-16 pt-2 mb-10">
      <div
        className="bg-primary-50 py-6"
        style={{ backgroundImage: "url(" + BG + ")", backgroundSize: "100%" }}
      >
        <div className="container mx-auto">
          <div className="mb-1 flex items-center text-sm text-gray-600 font-medium">
            <Link to="/">Ana Sayfa</Link>
            {breadcrumbs.map((breadcrumb, key: number) => (
              <Fragment key={key}>
                <RiArrowRightSLine className="ml-1 mr-1" />
                <Link to={breadcrumb.to}>{breadcrumb.name}</Link>
              </Fragment>
            ))}
            <RiArrowRightSLine className="ml-1 mr-1" />
            <Link to="#" className="text-gray-600 opacity-75">
              {head}
            </Link>
          </div>
          <div className="text-xl text-gray-700 font-semibold">{head}</div>
        </div>
      </div>
    </div>
  );
};

export default {
  Intro,
  Breadcrumb,
};
