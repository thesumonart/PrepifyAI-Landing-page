const Features = () => {
  const features = [
    {
      icon: "/code.svg",
      title: "Any interview",
      description:
        "You can take a interview for any job on the planet and customize if you want it to be technical, behavioral, or normal.",
    },
    {
      icon: "/countdown.svg",
      title: "Pick your length",
      description: "Easily pick how long of an interview you want to take.",
    },
    {
      icon: "/zoom.svg",
      title: "Find your forte",
      description:
        "Figure out exactly what you can be doing better, so that when the real interview comes around you are ready.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1054px] mx-auto lg:gap-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" max-w-96 md:max-w-auto mx-auto flex flex-col items-center text-center md:items-start md:text-start"
            >
              <figure className="mb-8">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className=" h-9 w-auto"
                />
              </figure>
              <p className="text-[21px] text-black-primary mb-5 tracking-[-0.5px]">
                {feature.title}
              </p>
              <p className="text-black-primary/70 leading-relaxed tracking-[-0.2px] text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
