import React from "react";
import { Link } from "react-router-dom";

const HomeProjectCard = ({
  title,
  img,
  id,
  btnName = "Learn More",
  to = "/portfolios",
  className = "",
}) => {
  return (
    <div
      className={
        "relative overflow-hidden mb-16 p-6 rounded-xl group " + className
      }
    >
      <div className="overflow-hidden rounded-3xl">
        <img
          src={img}
          alt={title}
          className="w-full h-80 object-cover rounded-3xl transition-all duration-500 ease-in-out transform group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-lg p-5 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 m-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <Link
            to={`${to}/${id}`}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            {title}
          </Link>
        </h3>
        <Link
          to={`${to}/${id}`}
          className="text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-300 inline-flex items-center mt-6"
        >
          {btnName}
          <span className="ml-2 transform -rotate-45 inline-block transition-transform duration-300 group-hover:rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjectCard;
