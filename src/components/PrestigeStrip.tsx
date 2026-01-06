import { useEffect, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "خبير ومهندس" },
  { value: 50, suffix: "+", label: "مشروع حكومي وخاص" },
  { value: 15, suffix: "+", label: "عاماً من الخبرة" },
  { value: 100, suffix: "%", label: "التزام بالجودة" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const PrestigeStrip = () => {
  return (
    <section className="prestige-strip py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-up delay-${(index + 1) * 100}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-bronze mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrestigeStrip;
