import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLinks({ orientation = "horizontal", onLinkClick }) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  // Close any open dropdowns on route change
  useEffect(() => {
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  const items = [
    { label: "Home", to: "/" },
    {
      label: "Services",
      to: "#",
      children: [
        { label: "Artificial Intelligence", to: "/services/ai" },
        { label: "Hardware Design", to: "/services/hardware" },
        { label: "Software Development", to: "/services/software" },
      ],
    },
    { label: "Portfolios", to: "/portfolios" },
    // { label: "Blog", to: "/blog" },
    { label: "About Us", to: "/about-us" },
  ];

  return (
    <ul
      className={
        orientation === "vertical"
          ? "flex flex-col space-y-4 py-6 px-6 text-lg"
          : "flex items-center h-full space-x-8 text-lg"
      }
    >
      {items.map((item) =>
        item.children ? (
          <li
            key={item.label}
            className={
              orientation === "horizontal" ? "relative h-full" : "relative"
            }
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            {orientation === "horizontal" ? (
              <>
                <button
                  type="button"
                  className="hover:text-gray-800 cursor-pointer select-none px-3 py-1 focus:outline-none w-full flex items-center h-full"
                  tabIndex={0}
                  onClick={() => setDesktopDropdownOpen((open) => !open)}
                  aria-expanded={desktopDropdownOpen}
                >
                  {item.label}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 4 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul
                  className={`${
                    desktopDropdownOpen ? "flex" : "hidden"
                  } absolute top-full left-0 flex-col bg-white text-black rounded shadow-lg min-w-[160px] z-30`}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to}
                        className="px-4 py-2 block hover:bg-gray-300 whitespace-nowrap"
                        onClick={() => {
                          setDesktopDropdownOpen(false);
                          if (onLinkClick) onLinkClick();
                        }}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // Mobile
              <>
                <div
                  className="flex items-center justify-between hover:text-gray-800 cursor-pointer select-none"
                  onClick={() => setMobileDropdownOpen((open) => !open)}
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 4 4 4 4-4"
                    />
                  </svg>
                </div>
                {mobileDropdownOpen && (
                  <ul className="pl-6 mt-1 flex flex-col space-y-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          className="hover:text-gray-400"
                          onClick={() => {
                            if (onLinkClick) onLinkClick();
                            setMobileDropdownOpen(false);
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ) : (
          <li
            key={item.label}
            className={orientation === "horizontal" ? "h-full" : undefined}
          >
            <Link
              to={item.to}
              className={
                orientation === "horizontal"
                  ? "hover:text-gray-800 flex px-3 items-center h-full"
                  : "hover:text-gray-800"
              }
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
