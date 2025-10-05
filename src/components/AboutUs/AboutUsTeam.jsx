import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { teams } from "../../data/AboutUs";
import { Container } from "../Common/Container";
import { SectionTitle } from "../Common/SectionTitle";

const AboutUsTeam = () => {
  return (
    <Container>
      {/* Section Heading */}
      <div className="py-16">
        <div className="flex">
          <div className="w-full lg:w-2/3 mx-auto text-center">
            <div className="mb-8">
              <SectionTitle
                SubTitle="Our Team"
                Title="Meet With Our Expert Team"
              />
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {teams.map((item, i) => (
            <div
              key={i}
              className="group"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              {/* Image + Socials overlay */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Social icons */}
                {/* <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div> */}
              </div>

              {/* Content */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  <a
                    href="#"
                    className="transition-colors hover:text-indigo-600"
                  >
                    {item.title}
                  </a>
                </h4>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUsTeam;
