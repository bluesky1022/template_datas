import { Container } from "../Common/Container";

const AboutUsMission = () => {
  return (
    <section className="py-24 sm:py-12 mt-10 mb-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div>
            <div className="max-w-xl">
              <span className="inline-flex justify-center items-center text-xl font-semibold text-[#0061ff] mb-4">
                <img
                  src="/assets/images/icon-blue.webp"
                  alt=""
                  className="mr-2 w-7 h-7 mt-1"
                />{" "}
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Innovating for Success: Our Technology Mission
              </h2>
              <p className="mt-4 text-gray-600">
                At TrioSpace, our mission is simple: to revolutionize the
                digital landscape by delivering top-notch technology solutions
                that drive growth, efficiency, and sustainability for our
                clients. We strive to be the trusted partner that businesses can
                rely on to navigate the complexities of the digital world.
              </p>
              <p className="mt-4 text-gray-600">
                At TrioSpace, our mission is to empower businesses through
                technology. We believe in harnessing the power of innovation to
                drive growth, efficiency, and sustainability for our clients.
                Through our tailored technology solutions and unwavering
                commitment to excellence, we strive to be the catalyst for
                positive change in the digital landscape.
              </p>
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="relative h-[520px] sm:h-[450px]">
            <div className="absolute top-14 left-0 w-[90%] h-[85%] md:h-[85%] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/aboutus/mission1.webp"
                alt="solution 1"
                className="h-full w-full stretch"
              />
            </div>

            {/* <div className="absolute right-0 top-[-45px] x-5 w-1/3 md:w-[40%] h-65 md:h-65 ml-auto mt-20 md:mt-24 rounded-xl overflow-hidden shadow-2xl animate-float-slow">
              <img
                src="/assets/images/aboutus/mission2.webp"
                alt="solution 2"
                className="h-full w-full stretch"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsMission;
