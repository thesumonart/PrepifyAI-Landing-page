import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jimmy Morton",
      avatar: "/jimmy-morton.webp",
      quote: "You got me the job",
      description:
        "Half of the questions asked at my cybersecurity job interview I already saw by using Prepify AI.",
    },
    {
      name: "Curran Taylor",
      avatar: "/curran-taylor.webp",
      quote: "It works",
      description:
        "I tried a lot of different tools to get ready for my interview and this was the only tool gave me confidence...",
    },
    {
      name: "Raian Bhojani",
      avatar: "/raian-bhojani.webp",
      quote: "Addictive",
      description:
        "Made practicing for interviews fun and addictive. Found myself interviewing way more than I thought I would.",
    },
  ];

  return (
    <section className="py-[88px] bg-background-secondary">
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 ">
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col items-center text-center relative w-full justify-between`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-[67px] h-[67px] rounded-full object-cover mb-8"
                />
                <blockquote className="text-xl md:text-2xl text-black-primary tracking-[-0.5px] mb-2">
                  “{testimonial.quote}”
                </blockquote>
                <p className="text-gray-600 leading-relaxed max-w-[400px] md:max-w-[330px] mb-2">
                  {testimonial.description}
                </p>
                <h4 className=" text-gray-900">{testimonial.name}</h4>
              </div>

              {index !== testimonials.length - 1 && (
                <div className=" md:w-[1px] md:h-40 bg-stroke-primary md:mt-[94px] md:m-0 w-3/4 h-px mx-auto" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
