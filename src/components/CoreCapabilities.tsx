import { Building2, Shield, Ruler, Users, Cog, FileCheck } from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "التصميم المعماري",
    description: "تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة",
  },
  {
    icon: Ruler,
    title: "التخطيط العمراني",
    description: "تخطيط مدن ومجمعات سكنية وتجارية متكاملة",
  },
  {
    icon: Cog,
    title: "الهندسة الإنشائية",
    description: "حلول إنشائية متينة وآمنة لجميع أنواع المباني",
  },
  {
    icon: Shield,
    title: "أنظمة السلامة",
    description: "تصميم وتركيب أنظمة الإطفاء والسلامة المتقدمة",
  },
  {
    icon: FileCheck,
    title: "إدارة المشاريع",
    description: "إدارة احترافية للمشاريع من البداية حتى التسليم",
  },
  {
    icon: Users,
    title: "الاستشارات الفنية",
    description: "استشارات هندسية متخصصة في جميع المجالات",
  },
];

const CoreCapabilities = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            قدراتنا <span className="text-gradient-bronze">الأساسية</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            نمتلك فريقاً من الخبراء والمهندسين المتخصصين في مختلف المجالات الهندسية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`group glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover animate-fade-up delay-${((index % 3) + 1) * 100}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur flex items-center justify-center group-hover:bg-primary/30 transition-colors shadow-lg shadow-primary/10">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
