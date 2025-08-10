import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-[146px] pb-16 ">
      <div className="container-fluid px-4">
        <div className="text-center ">
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-black-primary mb-8 leading-tight tracking-[-1.8px]">
            Nail every Interview
          </h1>
          <p className="text-[19px] text-black-primary/70 mb-8 max-w-[555px] mx-auto leading-relaxed tracking-[-0.2px]">
            Take the worlds best mock interview for any position, company, and
            location with real past asked interview questions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 items-center">
            <button
              type="button"
              className="bg-blue-primary rounded-lg transition-all duration-200 "
            >
              <a
                href="https://prepify.win"
                className="text-white px-6 py-3.5 text-[17px] w-fit flex items-center gap-10 tracking-[-0.6px]"
              >
                Get started for free <ArrowRight />
              </a>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("get-started")}
              className="text-black-primary px-6 py-3.5 text-[17px] flex items-center gap-10 tracking-[-0.6px] rounded-lg hover:bg-blue-primary/20 transition-colors border border-transparent w-fit cursor-pointer"
            >
              Learn more
            </button>
          </div>

          {/* Browser Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <figure>
              <img
                src="/banner-image.png"
                alt="Browser Mockup"
                className="w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
