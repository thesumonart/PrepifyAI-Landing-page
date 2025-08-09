const Statistics = () => {
  const stats = [
    {
      number: "1K+",
      label: "Interviews conducted ",
    },
    {
      number: "2x+",
      label: "Jobs landed after using Prepify AI",
    },
    {
      number: "4.9",
      label: "Average customer ratings out of 5.00!",
    },
  ];

  return (
    <section className="py-[76px] border-b border-stroke-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-5 md:gap-8">
              <div className="text-4xl md:text-5xl text-black-primary tracking-[-1.8px]">
                {stat.number}
              </div>
              <div className="text-[17px] text-black-primary/70 tracking-[-0.2px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
