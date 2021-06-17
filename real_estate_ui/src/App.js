import React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

// import logo from "./logo.svg";
import Toshiba from "./images/toshiba.svg";
import Slack from "./images/slack.svg";
import Netflix from "./images/netflix.svg";
import Dropbox from "./images/dropbox.svg";
import CartonNetwork from "./images/cartoon_network.svg";
import YellowQuote from "./images/yellow_quote.svg";
import Arrow1 from "./images/arrow1.svg";
import Arrow2 from "./images/arrow2.svg";
import FacebookIcon from "./images/facebook_icon.svg";
import TwitterIcon from "./images/twitter_icon.svg";
import LinkedinIcon from "./images/linkedin_icon.svg";

import "./App.css";
import Header from "./modules/public/components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const real_bg = "/images/real_bg.png";

const data = [
  {
    title: "Villa",
    content: "example content",
    image: "/images/house1.jpg",
    name: "The Rock and the Roll Hall",
    location: "Cleveland, United State",
    price: "$1100",
  },
  {
    title: "Apartment",
    content: "example content",
    image: "/images/house2.jpg",
    name: "The Rock and the Roll Hall",
    location: "Vilnius Lithiuaunia",
    price: "$700",
  },
  {
    title: "Villa",
    content: "example content",
    image: "/images/house3.jpg",
    name: "The Rock and the Roll Hall",
    location: "Cleveland, United State",
    price: "$1300",
  },
  {
    title: "Apartment",
    content: "example content",
    image: "/images/house1.jpg",
    name: "The Rock and the Roll Hall",
    location: "Houston, United State",
    price: "$800",
  },
  {
    title: "Villa",
    content: "example content",
    image: "/images/house2.jpg",
    name: "The Rock and the Roll Hall",
    location: "Ohio, United State",
    price: "$900",
  },
];

const data2 = [
  {
    content:
      "  Contrary to popular belief, Lorem ipsum is not simply random text. It has its root in a piece of classical latin",
    image: "/images/house1.jpg",
    name: "Harry Porter",
    location: "Thats almost why most UX",
  },
  {
    content:
      "  Contrary to popular belief, Lorem ipsum is not simply random text. It has its root in a piece of classical latin",
    image: "/images/house1.jpg",
    name: "Tony Stark",
    location: "Thats almost why most UX",
  },
  {
    content:
      "  Contrary to popular belief, Lorem ipsum is not simply random text. It has its root in a piece of classical latin",
    image: "/images/house1.jpg",
    name: "Jennifer Lopez",
    location: "Thats almost why most UX",
  },
  {
    content:
      "  Contrary to popular belief, Lorem ipsum is not simply random text. It has its root in a piece of classical latin",
    image: "/images/house1.jpg",
    name: "Wizkid",
    location: "Thats almost why most UX",
  },
  {
    content:
      "  Contrary to popular belief, Lorem ipsum is not simply random text. It has its root in a piece of classical latin",
    image: "/images/house1.jpg",
    name: "Demi Lovato",
    location: "Thats almost why most UX",
  },
];

function App() {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`,
    });
  });

  return (
    <>
      <div className="bg-pampas-500 overflow-x-hidden">
        <Header />
        <div className="container lg:mx-auto">
          <div className="bg-pampas-500">
            <div className="lg:grid lg:grid-cols-2 ">
              <div>
                <div className="sm:w-6/12 lg:w-11/12 lg:ml-32 mt-28 w-9/12 mx-auto">
                  <p className="lg:text-7xl font-bold text-3xl">
                    Find your modern and affordable home
                  </p>
                  <p className="lg:mt-12 lg:w-8/12 mt-4 leading-normal">
                    Contrary to popular belief, Lorem ipsum is not simply random
                    text. It has its root in a piece
                  </p>
                </div>
                <div className="mt-12">
                  <div className="w-40 h-12 rounded bg-blue-500 mx-auto">
                    <p className="text-white text-center text-lg py-3 font-bold ">
                      <FontAwesomeIcon
                        className="mr-2 h-4 w-5"
                        icon={faSearch}
                      />
                      Search
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-9/12 lg:mt-8 mx-auto mt-12 mr-8 ml-8">
                <img alt="" src="/images/theImage.png" />
                <img alt="" className="hidden" src="/images/theImage.png" />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between lg:mx-32 mt-16 mx-auto">
              <img alt="" className="py-8 lg:py-0 mx-auto" src={Toshiba} />
              <img alt="" className="py-8 lg:py-0 mx-auto" src={Slack} />
              <img alt="" className="py-8 lg:py-0 mx-auto" src={Netflix} />
              <img alt="" className="py-8 lg:py-0 mx-auto" src={CartonNetwork} />
              <img alt="" className="py-8 lg:py-0 mx-auto w-56 " src={Dropbox} />
            </div>
          </div>
          <div className="h-12"></div>
          <div className="bg-white">
            <div className="text-center">
              <br />
              <br />
              <div className="lg:grid lg:grid-cols-2 ">
                <div className="lg:grid lg:grid-cols-2 ">
                  <div>
                    <p className="font-bold text-5xl mt-12">55k</p>
                    <p className="w-44 mx-auto mt-8 mb-8">
                      We achieve our goal and mission
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-5xl mt-12">18.8%</p>
                    <p className="w-44 mx-auto mt-8 mb-8">
                      Historic come back rate
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-left mx-8 mt-12 w-8/12">
                    Since 1999, Internet Marketing Ningas has mastered the art
                    of creating expert cntents that goes viral earns trusted
                    links and ranks at the top of Google. Lookng to transform
                    your content marketing strategy? Learn how our Ninja team
                    can help by scheduling a FREE consultation
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
              <div>
                <p className="text-4xl font-bold lg:mx-auto lg:w-8/12 w-10/12 text-center mx-auto mt-8 mb-8 lg:mb-0 lg:text-left">
                  Why should you choose our service
                </p>
              </div>
              <div className="text-center lg:mt-8 lg:text-left mx-8 w-8/12">
                Contrary to popular belief, Lorem ipsum is not simply random
                text. It has its root in a piece
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
              <div>
                <div className="mt-12 shadow-lg	w-10/12 rounded-lg h-24 mb-8 mx-auto">
                  <div className="flex">
                    <div class="rounded-full h-20 w-20 flex items-center justify-center text-2xl bg-pampas-500 ml-4 my-auto">
                      1
                    </div>
                    <div className="ml-8 my-auto">
                      <p className="font-bold">Easy Payment Method</p>
                      <p>Contrary to popular belief, Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
                <div className="shadow-lg	w-10/12 rounded-lg h-24 mb-8 mx-auto">
                  <div className="flex">
                    <div class="rounded-full h-20 w-20 flex items-center justify-center text-2xl bg-pampas-500 ml-4 my-auto">
                      2
                    </div>
                    <div className="ml-8 my-auto">
                      <p className="font-bold">Fixed Fee & Support</p>
                      <p>Contrary to popular belief, Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
                <div className="shadow-lg	w-10/12 rounded-lg h-24 mb-8 mx-auto">
                  <div className="flex">
                    <div class="rounded-full h-20 w-20 flex items-center justify-center text-2xl bg-pampas-500 ml-4 my-auto">
                      3
                    </div>
                    <div className="ml-8 my-auto">
                      <p className="font-bold">Tax Advantage</p>
                      <p>Contrary to popular belief, Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
                <div className="shadow-lg	w-10/12 rounded-lg h-24 mb-8 mx-auto">
                  <div className="flex">
                    <div class="rounded-full lg:h-20 lg:w-20 h-16 w-16 flex items-center justify-center text-2xl bg-pampas-500 ml-4 my-auto">
                      4
                    </div>
                    <div className="ml-8 my-auto">
                      <p className="font-bold">Property Insurance</p>
                      <p>Contrary to popular belief, Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ml-8">
                  <button className="h-10 rounded w-28 bg-pampas-500 shadow-lg">
                    Learn More
                  </button>
                </div>
                <div className="lg:w-9/12 lg:mt-8 mx-auto mt-12 mr-8 ml-8">
                  <img alt="" src="/images/bernard-hermant.png" />
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-2">
              <div>
                <p className="text-4xl font-bold lg:mx-auto lg:w-8/12 w-10/12 text-center mx-auto mt-8 mb-8 lg:mb-0 lg:text-left">
                  We provide property
                </p>
              </div>
              <div className="text-center lg:mt-8 lg:text-left mx-8">
                <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                  <li>
                    <a
                      class="lg:p-4 py-3 px-0 block border-b-2 border-transparent border-black hover:border-blue-500"
                      href="#"
                    >
                      Apartment
                    </a>
                  </li>
                  <li>
                    <a
                      class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500"
                      href="#"
                    >
                      Villa
                    </a>
                  </li>
                  <li>
                    <a
                      class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500"
                      href="#"
                    >
                      Land
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="no-scrollbar w-full mt-24 flex overflow-x-scroll overflow-x-hidden overflow-y-hidden py-5	bg-white overflow-hidden"
              {...bind()}
            >
              {data.map((src) => (
                <animated.div
                  key={src}
                  className="flex-shrink-0 lg:w-96 w-80 h-80 rounded-xl ml-3.5 bg-cover bg-no-repeat bg-center relative"
                  style={{
                    ...style,
                    backgroundImage: `url(${src.image})`,
                  }}
                >
                  <div className="h-12 w-28 bg-pampas-500 rounded-lg mt-8 ml-4 my-auto py-3 text-center">
                    {src.title}
                  </div>
                  <div className="h-36 w-10/12 bg-pampas-500 rounded-lg mt-8 my-auto py-3 absolute bottom-0	">
                    <p className="font-bold ml-6">{src.name}</p>
                    <p className="font-light mt-2 ml-6">
                      <FontAwesomeIcon
                        className="mr-2 h-4 w-5 text-gray-700"
                        icon={faLocationArrow}
                      />
                      {src.location}
                    </p>
                    <div>
                      <p className="font-light mt-2 ml-6">
                        <b className="text-blaze-orange-500">{src.price}</b> /
                        month
                      </p>
                      <div className="cursor-pointer fz-10 right-0 h-10 bottom-0 absolute bg-white rounded-lg w-32 text-center py-2">
                        <FontAwesomeIcon
                          className="text-gray-700"
                          icon={faArrowRight}
                        />
                      </div>
                    </div>
                  </div>
                </animated.div>
              ))}
            </div>
            <div className="h-32"></div>
          </div>

          <div className="bg-pampas-500">
            <div className="flex flex-wrap items-center justify-between mt-16 mx-auto">
              <img alt="" className="py-8 lg:py-0 mx-auto" src={Arrow1} />
              <p className="lg:text-5xl font-bold text-xl w-96 text-center ">
                Our customer are saying
              </p>
              <img alt="" className="py-8 lg:py-0 mx-auto " src={Arrow2} />
            </div>
            <div className="no-scrollbar w-full mt-24 flex overflow-x-scroll overflow-x-hidden overflow-y-hidden py-5">
              {data2.map((src) => (
                <div
                  key={src}
                  className="flex-shrink-0 lg:w-80 w-80 h-80 shadow-xl ml-3.5 bg-cover bg-no-repeat bg-center bg-white relative"
                  style={{
                    ...style,
                  }}
                >
                  <div className="h-8 w-12 mt-8 ml-4 my-auto py-3 text-center">
                    <img alt="" className="h-8 w-12 mx-auto" src={YellowQuote} />
                  </div>
                  <div>
                    <p className="mx-6 mt-12 mb-8">{src.content}</p>
                  </div>
                  <div className="flex">
                    <div
                      class="rounded-full h-16 w-16 flex items-center justify-center text-2xl bg-pampas-500 ml-4 my-auto bg-cover bg-no-repeat bg-center"
                      style={{
                        ...style,
                        backgroundImage: `url(${src.image})`,
                      }}
                    ></div>
                    <div>
                      <p className="font-bold ml-4 mt-2">{src.name}</p>
                      <p className="font-normal ml-4 text-gray-400">
                        {src.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-pampas-500 h-24 mt-5"></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${real_bg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="lg:h-96"
            >
              <p className="text-center text-5xl text-white pt-24 ">
                Available, Get to Join Now
              </p>
              <p className="text-center pt-4 text-white pb-4">
                Contrary to popular belief, Lorem ipsum is not simply random
                text. It has
              </p>
              <div className="mx-auto bg-white w-96 h-14 rounded-lg ">
                <input
                  placeholder="Search your home"
                  className="rounded-lg h-14 border-0 w-72 pl-4"
                ></input>
                <button className="searchbtn bg-gallery-500 rounded-lg float-right h-14 w-24">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="w-full bg-white text-black">
            <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
              <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                  <a
                    className="text-sm text-mirage-500 font-normal text-xl leading-relaxed inline-block py-2 whitespace-nowrap"
                    href="#"
                  >
                    Real estate
                  </a>
                  <p className="w-72 text-gray-400">
                  lorem ipsum dolor sit amet, consec adipscinf elit, sed do.
                  </p>
                </div>
                <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                  <a className="font-bold text-xl">Blog</a>
                  <a className="text-gray-400">Company</a>
                  <a className="text-gray-400">Leadership</a>
                  <a className="text-gray-400">Diversity</a>
                </div>
                <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                  <a className="font-bold text-xl">Product</a>
                  <a className="text-gray-400">Company</a>
                  <a className="text-gray-400">Leadership</a>
                  <a className="text-gray-400">Diversity</a>
                  <a className="text-gray-400">Wavelength</a>
                  <a className="text-gray-400">Jobs</a>
                  <a className="text-gray-400">Founder</a>
                </div>
                <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                  <a className="font-bold text-xl">Workflow</a>
                  <a className="text-gray-400">Company</a>
                  <a className="text-gray-400">Leadership</a>
                  <a className="text-gray-400">Diversity</a>
                </div>
                <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                  <a className="font-bold text-xl">Team</a>
                  <a className="text-gray-400">Engineering</a>
                  <a className="text-gray-400">Designers</a>
                  <a className="text-gray-400">Marketing</a>
                  <a className="text-gray-400">Developers</a>
                  <a className="text-gray-400">All Teams</a>
                </div>
              </div>
              <div className="flex flex-row pt-2">
                <img alt="" className="h-8 w-8 mr-4" src={FacebookIcon} />
                <img alt="" className="h-8 w-8 mr-4" src={TwitterIcon} />
                <img alt="" className="h-8 w-8 " src={LinkedinIcon} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
