import patternBg from "@/assets/pattern-bg.jpg";
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
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src={patternBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal-900/90" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up group"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-gradient-bronze">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <p className="text-foreground font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrestigeStrip;
