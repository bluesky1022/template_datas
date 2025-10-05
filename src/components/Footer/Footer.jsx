import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Button } from "../Common/Button";
import { Container } from "../Common/Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [email, setEmail] = useState("");
  const handleSubscribe = async () => {
    const trimmed = email.trim();
    if (!trimmed) {
      console.warn("Email is required");
      return;
    }
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) {
        console.error("Subscribe failed", res.status);
        alert("Network error!");
        return;
      }
      alert(`${email} Subscribed successfully`);
      setEmail("");
      console.log("Subscribed successfully");
    } catch (err) {
      console.error("Network error subscribing", err);
      alert("Server was gone!");
    }
  };

  return (
    <div className="bg-[url('/assets/images/footer-bg.webp')] bg-cover bg-center">
      <div>
        <Container className="px-4 sm:px-8">
          <div className="w-full pt-16 sm:pt-20 md:pt-24">
            <div className="w-full lg:w-[70%] mx-auto text-center text-white">
              <p className="text-2xl sm:text-3xl md:text-[2.75rem] font-semibold leading-tight mt-4">
                We are Committed to Businesses
              </p>
              <p className="text-sm md:text-md text-gray-200 mt-4">
                At TrioSpace, we are dedicated to delivering iniovating
                technology solutions
                <br />
                tailored to meet the unique needs of business like yours
              </p>
              <div className="relative w-[70%] mx-auto mt-10 overflow-x-hidden">
                <input
                  type="email"
                  className="w-full pl-6 pr-36 py-[0.6rem] md:py-[0.9rem] lg:py-4  md:pl-8 md:pr-48 rounded-full text-gray-900 outline-none"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute right-0 top-0">
                  <Button
                    label="Subscribe"
                    color="blue"
                    onClick={handleSubscribe}
                    className="w-full md:w-auto justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-16 sm:pt-20 md:pt-24 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[4fr_2.5fr_2.5fr_3fr] gap-8">
              <div className="w-full pr-0 md:pr-8 lg:pr-16 text-center md:text-left">
                <Link to={"/"}>
                  <img
                    src="/assets/images/logo.webp"
                    alt="logo"
                    className="mx-autos pr-20 md:mx-0 w-32 md:w-auto"
                  />
                </Link>
                <p className="text-sm md:text-md text-gray-200 mt-4 pl-4">
                  At Triospace, we are dedicated to delivering innovative
                  technology solutions tailored to meet the unique needs of
                  businesses like yours.
                </p>
                <ul className="flex justify-center md:justify-start gap-2 mt-6 px-2">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex justify-center items-center w-8 h-8 rounded-full bg-white bg-opacity-15"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex justify-center items-center w-8 h-8 rounded-full bg-white bg-opacity-15"
                    >
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex justify-center items-center w-8 h-8 rounded-full bg-white bg-opacity-15"
                    >
                      <FontAwesomeIcon icon={faDiscord} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex justify-center items-center w-8 h-8 rounded-full bg-white bg-opacity-15"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <p className="text-2xl font-bold">Service We Offer</p>
                <ul className="flex flex-col gap-3 mt-10 text-lg">
                  <li>
                    <Link to={"/services/ai"}>Artificial Intelligence</Link>
                  </li>
                  <li>
                    <Link to={"/services/hardware"}>Hardware Design</Link>
                  </li>
                  <li>
                    <Link to={"/services/software"}>Software Development</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <p className="text-2xl font-bold">Useful Links</p>
                <ul className="flex flex-col gap-3 mt-10 text-lg">
                  <li>
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/portfolios"}>Portfolios</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog & News</Link>
                  </li>
                  <li>
                    <Link to={"/contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <p className="text-2xl font-bold">Contact Us</p>
                <ul className="flex flex-col gap-3 mt-10 text-lg">
                  <li>
                    <a href="tel:+1234567890" className="flex items-center">
                      <FontAwesomeIcon icon={faPhone} className="mr-2" />
                      <span>+1 234 567 7890</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@triospace.com"
                      className="flex items-center"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      <span>support@triospace.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative h-[56px] top-[28px]">
        <button
          onClick={scrollToTop}
          className="absolute left-1/2 -translate-x-1/2 -top-0 md:-top-[0px] inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(37, 40, 48) 0%, rgb(39, 61, 147) 48%, rgb(37, 39, 45) 100%)",
        }}
      >
        <Container className="px-4 sm:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 h-auto md:h-[72px] text-white text-base md:text-lg py-4 md:py-0 gap-2">
            <div className="md:col-span-7 flex items-center h-full justify-center md:justify-start text-center md:text-left">
              <p>Copyright @2025 TrioSpace.All Rights Reserved</p>
            </div>
            <div className="md:col-span-5 flex items-center justify-center md:justify-end h-full mt-2 md:mt-0">
              <p>Terms & Conditions</p>
              <div className="w-px h-6 bg-white mx-4"></div>
              <p>Privacy Policy</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
