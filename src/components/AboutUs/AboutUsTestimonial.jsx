import { testimonials } from "../../data/AboutUs";
import { Carousel } from "../Common/Carousel";
import { Container } from "../Common/Container";
import { SectionTitle } from "../Common/SectionTitle";

const AboutUsTestimonial = () => {
  return (
    <section className="pt-14 md:pt-14 md:pb-5">
      <Container>
        <div className="flex">
          <div className="w-full lg:w-2/3 mx-auto text-center">
            <div className="mb-8">
              <SectionTitle
                SubTitle="Testimonials"
                Title="Discover What Our Clients Have To Say About Us"
              />
            </div>
          </div>
        </div>
        <div className="relative pt-6">
          <Carousel
            items={testimonials.map((item, i) => (
              <div key={i} className="p-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 rounded-2xl bg-[#e7eaf3] dark:ring-slate-700 p-6 md:p-10 shadow-sm">
                  <div className="lg:col-span-8">
                    <div className="">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-16 text-slate-900 dark:text-black tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl mr-10 dark:text-black leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-14 flex items-center gap-4">
                        <div className="shrink-0">
                          <img
                            src={item.image1}
                            alt=""
                            className="h-20 w-20 rounded-full object-cover ring-1 ring-slate-200"
                          />
                        </div>
                        <div>
                          <h5 className="text-base font-semibold text-slate-900 dark:text-black ">
                            <a
                              href="#"
                              className="hover:text-primary transition-colors"
                            >
                              {item.clientName}
                            </a>
                          </h5>
                          <p className="text-sm dark:text-black">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="flex items-center justify-center">
                      <img
                        key={"avater"}
                        src={item.image2}
                        alt=""
                        className="w-[300px] text-center lg:w-[500px] h-64 lg:h-96 stretch rounded-xl shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsTestimonial;
