import { useEffect, useRef, useState } from "react";

const GetHiredFaster = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  const steps = [
    {
      title: "Find a job",
      description:
        "Upload any job description and we will find every past question asked for that exact job.",
    },
    {
      title: "Pick your interview",
      description:
        "Pick what type and how long of an interview you want to do.",
    },
    {
      title: "Interview and Learn",
      description:
        "Interview then learn what mistakes you made on our revolutionary results page.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = stepRefs.current.indexOf(entry.target);
            if (stepIndex === visibleSteps.length) {
              setVisibleSteps((prev) => [...prev, stepIndex]);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-15% 0px",
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[913px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-black-primary tracking-[-1.2px] mb-4">
            Get hired faster
          </h2>
          <p className="text-[19px] text-black-primary/70 max-w-2xl mx-auto md:max-w-[589px]">
            Take unlimited hyper-realistic interviews to level up your
            interviewing skills.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start md:justify-between">
          <figure>
            <img
              src="/ready-to-interview-image.png"
              alt="Ready to interview"
              className="md:max-w-[403px]"
            />
          </figure>

          <div className="space-y-8 md:mt-20 md:max-w-[404px]">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`flex items-start space-x-4 transition-all duration-1000 ease-out transform ${
                  visibleSteps.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-40"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 text-[17px] font-rubik tracking-[-0.09px] leading-relaxed ${
                    visibleSteps.includes(index)
                      ? "bg-blue-primary/10 text-blue-primary"
                      : "bg-blue-primary/5 text-blue-primary"
                  }`}
                >
                  {visibleSteps.includes(index) ? (
                    <span>{index + 1}</span>
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>

                <div>
                  <h4 className="text-lg md:text-[21px] text-black-primary mb-2 tracking-[-0.5px] font-normal">
                    {step.title}
                  </h4>
                  <p className="text-black-primary/70 leading-relaxed text-[17px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHiredFaster;
