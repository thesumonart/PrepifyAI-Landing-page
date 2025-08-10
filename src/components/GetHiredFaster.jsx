import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetHiredFaster = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const stepRefs = useRef([]);
  const pinnedRef = useRef(false);
  const currentStepRef = useRef(-1);
  const isAnimatingRef = useRef(false);

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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    ScrollTrigger.getAll().forEach((st) => st.kill());

    if (isMobile) {
      const animatedSteps = new Set();

      stepRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, { autoAlpha: 0, x: 150 });
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const stepIndex = stepRefs.current.indexOf(entry.target);
            if (entry.isIntersecting && !animatedSteps.has(stepIndex)) {
              animatedSteps.add(stepIndex);
              gsap.to(entry.target, {
                autoAlpha: 1,
                x: 0,
                duration: 0.6,
                ease: "power3.out",
              });
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: "0px 0px -15% 0px",
        }
      );

      stepRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    } else {
      // DESKTOP: GSAP pinned scroll-trigger animation
      currentStepRef.current = -1;

      stepRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, { autoAlpha: 0, x: 150 });
        }
      });

      const vh = window.innerHeight;
      const scrollEnd = vh * steps.length * 0.9;

      if (sectionRef.current) {
        sectionRef.current.style.minHeight = "";
      }

      const pinST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollEnd}`,
        pin: true,
        anticipatePin: 1,
        onEnter: () => (pinnedRef.current = true),
        onLeave: () => (pinnedRef.current = false),
        onEnterBack: () => (pinnedRef.current = true),
        onLeaveBack: () => (pinnedRef.current = false),
      });

      const revealStep = (index) => {
        const el = stepRefs.current[index];
        if (!el) return;
        isAnimatingRef.current = true;
        gsap.killTweensOf(el);
        gsap.to(el, {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });
      };

      const hideStep = (index) => {
        const el = stepRefs.current[index];
        if (!el) return;
        isAnimatingRef.current = true;
        gsap.killTweensOf(el);
        gsap.to(el, {
          autoAlpha: 0,
          x: 150,
          duration: 0.45,
          ease: "power2.in",
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });
      };

      let wheelTimeout;

      const handleWheel = (e) => {
        if (!pinnedRef.current) return;
        const delta = e.deltaY;
        if (Math.abs(delta) < 10) return;
        e.preventDefault();
        if (isAnimatingRef.current) return;

        if (delta > 0) {
          if (currentStepRef.current < steps.length - 1) {
            currentStepRef.current += 1;
            revealStep(currentStepRef.current);
          }
        } else {
          if (currentStepRef.current >= 0) {
            hideStep(currentStepRef.current);
            currentStepRef.current -= 1;
          }
        }

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {}, 120);
      };

      let touchStartY = 0;

      const onTouchStart = (e) => {
        if (!pinnedRef.current) return;
        touchStartY = e.touches ? e.touches[0].clientY : e.clientY;
      };

      const onTouchEnd = (e) => {
        if (!pinnedRef.current) return;
        const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
        const diff = touchStartY - endY;
        if (Math.abs(diff) < 25) return;
        if (isAnimatingRef.current) return;

        if (diff > 0) {
          if (currentStepRef.current < steps.length - 1) {
            currentStepRef.current += 1;
            revealStep(currentStepRef.current);
          }
        } else {
          if (currentStepRef.current >= 0) {
            hideStep(currentStepRef.current);
            currentStepRef.current -= 1;
          }
        }
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
        pinST.kill();
      };
    }
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="max-w-[913px] mx-auto px-4 md:h-screen flex flex-col justify-center">
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

          <div
            ref={stepsRef}
            className="space-y-8 md:mt-20 md:max-w-[404px]"
            style={{ minHeight: "70vh" }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="flex items-start space-x-4 opacity-0"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-blue-primary/10 text-blue-primary">
                  {index + 1}
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
