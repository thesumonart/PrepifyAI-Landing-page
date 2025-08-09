import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Worlds best mock interviewer",
    "End to end encryption",
    "Real past asked questions",
    "Instant actionable feedback",
    "Human like conversations",
    "Weekly upgrades",
  ];

  const faqs = [
    {
      question: "How do we help you ace questions?",
      answer:
        "Our AI analyzes your responses in real-time and provides detailed feedback on content, delivery, and areas for improvement. We use advanced algorithms trained on successful interview patterns.",
    },
    {
      question: "Are the questions current?",
      answer:
        "Yes! Our question database is continuously updated with the latest interview trends and real questions from top companies. We work with industry professionals to ensure relevance.",
    },
    {
      question: "Do I get help over?",
      answer:
        "Absolutely! We provide comprehensive support including practice session reviews, personalized improvement plans, and one-on-one coaching sessions for premium users.",
    },
    {
      question: "Why do people choose us?",
      answer:
        "Users choose PrepifyAI because of our proven track record, personalized approach, and the convenience of practicing anytime, anywhere. Our success rate speaks for itself.",
    },
  ];

  return (
    <section id="pricing" className="pt-9 pb-32 bg-black-primary">
      <div className="max-w-[1077px]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="py-1.5 px-4 rounded-full bg-linear-90 w-fit mx-auto from-[#E59CFF]/25 via-[#BA9CFF]/25 to-[#9CB2FF]/25 mb-12">
            <span className="font-inter text-sm font-medium bg-linear-90 from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent">
              Get access
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[64px] mb-11 leading-[0.75em] tracking-[-1.2px] max-w-[800px] mx-auto text-white">
            We like keeping things simple One plan one price.
          </h2>
          <p className="text-white-secondary/60 mb-12 align-middle flex items-center mx-auto w-fit gap-4">
            <span className="font-dm-sans text-5xl md:text-7xl bg-linear-90 from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent">
              $5
            </span>{" "}
            /week
          </p>
        </div>

        <div className="max-w-[610px] mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-[75px] md:gap-x-24">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 w-fit">
                <figure className="flex-shrink-0">
                  <img src="/dot-icon.svg" alt="Dot-svg" />
                </figure>

                <span className="text-white-tertiary">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://prepify.win"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto bg-linear-180 from-[#3c087e]/0 to-[#3c087e]/35 text-white-tertiary text-sm rounded-lg font-inter font-medium hover:bg-indigo-700 overflow-hidden w-[163px] h-9 flex items-center justify-center shadow-[inset_0px_0_12px_0px_rgba(191, 151, 255,0.24)] relative"
            >
              <span className="absolute inset-0 bg-[#712fff] z-[1]" />
              <span className="absolute inset-180 bg-linear-0 from-[#cfb8ff]/25 to-[#cfb8ff]/0 z-[2]" />
              <span className="absolute inset-0 bg-[#CFB8FF]/35 z-[3]" />

              <span className="relative z-10">Start free right now</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-x-16 lg:gap-y-36">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start space-x-5">
                  <figure className="w-7 h-7 rounded-full flex shrink-0 items-center justify-center bg-green-primary">
                    <img src="/question-mark.svg" alt="Question-mark" />
                  </figure>
                  <div>
                    <h4 className="text-lg md:text-[21px] text-white mb-3 md:mb-5 tracking-[-0.5px]">
                      {faq.question}
                    </h4>
                    <p className="text-white/65 leading-relaxed text-base md:text-[17px] tracking-[-0.2px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-28">
          <p className="text-white text-base md:text-[17px] tracking-[-0.2px]">
            Haven't got your answer?{" "}
            <a
              href="https://prepify.win"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-primary"
            >
              Contact our support now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
