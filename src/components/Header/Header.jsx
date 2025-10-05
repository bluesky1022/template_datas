import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks"; // Ensure this path is correct
import { Container } from "../Common/Container"; // Ensure this path is correct
import { Button } from "../Common/Button"; // Ensure this path is correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isHomepage, setIsHomepage] = useState(false);
  const prevScrollPos = useRef(0);
  const location = useLocation();

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = () => {
    const current = window.scrollY;
    setIsTop(current === 0);
    setVisible(current <= prevScrollPos.current || current <= 20);
    prevScrollPos.current = current;
  };

  useEffect(() => {
    setIsHomepage(location.pathname === "/");
    window.scrollTo(0, 0);
    handleScroll();
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 ${
        isHomepage && isTop
          ? "bg-white bg-opacity-10"
          : isTop
          ? "bg-white bg-opacity-10"
          : "bg-black bg-opacity-25"
      } backdrop-blur-md transform transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-[84px]">
          <Link to="/" onClick={closeMenu}>
            <img src="/assets/images/logo.webp" alt="logo" className="h-16" />
          </Link>
          <div className="hidden xl:block h-full py-2 text-white">
            <NavLinks orientation="horizontal" />
          </div>
          <div className="flex gap-5">
            <Link to="/contact-us" className="hidden sm:inline-flex">
              <Button label="Contact Us" color="white" />
            </Link>
            <button
              className="xl:hidden text-white focus:outline-none text-2xl"
              aria-label="Toggle Menu"
              onClick={handleToggle}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="xl:hidden bg-black text-white shadow-lg absolute w-full left-0 top-24 z-50 animate-fade-in">
            <NavLinks orientation="vertical" onLinkClick={closeMenu} />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
