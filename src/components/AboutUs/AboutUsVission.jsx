import { faBoxOpen, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../Common/Container";

const AboutUsVission = () => {
  return (
    <section className="py-24 sm:py-12 pt-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Images grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/assets/images/aboutus/vision1.webp"
                  alt="Vision main"
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/assets/images/aboutus/vision2.webp"
                  alt="Vision secondary 1"
                  className="w-full h-56 md:h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/assets/images/aboutus/vision3.webp"
                  alt="Vision secondary 2"
                  className="w-full h-56 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="max-w-xl">
              <span className="inline-flex justify-items-center items-center text-xl font-semibold text-[#0061ff] mb-4">
                <img
                  src="/assets/images/icon-blue.webp"
                  alt=""
                  className="mr-2 mt-1 h-7 w-7"
                />{" "}
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Driving Innovation: Our Vision at TrioSpace
              </h2>
              <p className="mt-4 text-gray-600">
                At TrioSpace, our vision is to be the leading force driving
                digital transformation and innovation worldwide. We envision a
                future where businesses of all sizes have the tools and
                expertise they need to thrive in an increasingly digital world.
              </p>

              {/* Vision items */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-lg bg-gray-100">
                    <FontAwesomeIcon size="2xl" icon={faWifi} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      <a href="#" className="hover:text-[#0E38B1]">
                        Network Infrastructure Solutions
                      </a>
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Build a reliable and secure network infrastructure that
                      supports your business operations and enables seamless
                      communication.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-lg bg-gray-100">
                    <FontAwesomeIcon size="2xl" icon={faBoxOpen} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      <a href="#" className="hover:text-[#0E38B1]">
                        Managed IT Services
                      </a>
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Focus on your core business activities while we take care
                      of your IT needs with our managed IT services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsVission;
