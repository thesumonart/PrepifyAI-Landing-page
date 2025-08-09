import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="pt-[91px] pb-20 bg-background-secondary">
      <div className=" px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-32 items-center">
          <div className="flex flex-col text-center items-center sm:max-w-[80%] mx-auto lg:items-start lg:max-w-full lg:text-start lg:m-0">
            <h2 className="text-3xl md:text-4xl font-normal text-black-primary mb-6">
              Get started with one click
            </h2>
            <p className="text-[19px] text-black-primary/70 mb-8 leading-relaxed tracking-[-0.2] md:max-w-[412px] w-full">
              We are currently in demo stage so no need for an account, simply
              press the button below and take your first interview
            </p>
            <a
              href="https://prepify.win"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-primary text-white px-6 py-3.5 rounded-lg font-normal gap-10 tracking-[-0.6px]"
            >
              Get Started for Free
              <ArrowRight />
            </a>
          </div>

          <figure className="flex">
            <img
              src="/interview-report.png"
              alt="Interview-Report"
              className="lg:max-w-[713px] w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
