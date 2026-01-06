import consultancyImg from "@/assets/consultancy-card.jpg";
import executionImg from "@/assets/execution-card.jpg";

const TwoPillars = () => {
  const pillars = [
    {
      image: consultancyImg,
      title: "التخطيط والتصميم",
      subtitle: "أبعاد الارتقاء",
      description:
        "نقدم استشارات هندسية شاملة تشمل التخطيط العمراني، التصميم المعماري والإنشائي، ودراسات الجدوى الفنية للمشاريع الحكومية والخاصة.",
      features: ["التخطيط العمراني", "التصميم المعماري", "الدراسات البيئية", "التصميم الصناعي"],
    },
    {
      image: executionImg,
      title: "الإشراف والجودة",
      subtitle: "سما للمقاولات",
      description:
        "نوفر إشرافاً هندسياً متكاملاً على المشاريع مع ضمان تطبيق أعلى معايير الجودة والسلامة، بالإضافة إلى خدمات الصيانة المتخصصة.",
      features: ["الإشراف الهندسي", "ضبط الجودة", "أنظمة السلامة", "الصيانة الدورية"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            خدماتنا <span className="text-gradient-bronze">المتخصصة</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            ركيزتان أساسيتان تشكلان أساس عملنا في أبعاد الارتقاء
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden rounded-2xl card-hover animate-fade-up delay-${(index + 1) * 100}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 min-h-[500px] flex flex-col justify-end">
                <span className="text-primary font-medium mb-2">{pillar.subtitle}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {pillar.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
