import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GetHiredFaster = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      title: "Find a job",
      description: "Upload any job description and we will find every past question asked for that exact job.",
    },
    {
      title: "Pick your interview",
      description: "Pick what type and how long of an interview you want to do.",
    },
    {
      title: "Interview and Learn",
      description: "Interview then learn what mistakes you made on our revolutionary results page.",
    },
  ];

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf("*");

    if (isMobile) {
      gsap.set(stepRefs.current, { autoAlpha: 0, x: 50 });

      ScrollTrigger.batch(stepRefs.current, {
        start: "top 80%",
        end: "bottom 20%",
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.3,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            autoAlpha: 0,
            x: 50,
            duration: 0.4,
            ease: "power2.in",
            stagger: 0.2,
          });
        },
      });
    } else {
      // ----- DESKTOP pinned progressive reveal -----
      gsap.set(stepRefs.current, { autoAlpha: 0, x: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${steps.length * window.innerHeight * 0.6}`,
          scrub: true,
          pin: true,
        },
      });

      stepRefs.current.forEach((el) => {
        tl.to(
          el,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "+=0.5"
        );
      });
    }
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="max-w-[913px] mx-auto px-4 md:h-screen flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-black-primary mb-4">Get hired faster</h2>
          <p className="text-[19px] text-black-primary/70 max-w-2xl mx-auto">Take unlimited hyper-realistic interviews to level up your interviewing skills.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start md:justify-between">
          <figure>
            <img src="/ready-to-interview-image.jpg" alt="Ready to interview" className="md:max-w-[403px] object-cover w-full" />
          </figure>

          <div className="space-y-8 md:mt-20 md:max-w-[404px]">
            {steps.map((step, index) => (
              <div key={index} ref={(el) => (stepRefs.current[index] = el)} className="flex items-start space-x-4 opacity-0">
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-blue-primary/10 text-blue-primary">{index + 1}</div>
                <div>
                  <h4 className="text-lg md:text-[21px] mb-2">{step.title}</h4>
                  <p className="text-black-primary/70">{step.description}</p>
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
