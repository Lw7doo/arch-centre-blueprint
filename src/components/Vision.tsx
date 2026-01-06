import { Eye, Target, Award } from "lucide-react";

const Vision = () => {
  const items = [
    {
      icon: Eye,
      title: "رؤيتنا",
      description:
        "أن نكون الخيار الأول في المملكة العربية السعودية للاستشارات الهندسية والإشراف على المشاريع، من خلال تقديم حلول مبتكرة تتجاوز التوقعات.",
    },
    {
      icon: Target,
      title: "رسالتنا",
      description:
        "نسعى لتحقيق التميز في كل مشروع نشرف عليه، مع الالتزام بأعلى معايير الجودة والسلامة، وبناء شراكات طويلة الأمد مع عملائنا.",
    },
    {
      icon: Award,
      title: "قيمنا",
      description:
        "النزاهة، الإتقان، الابتكار، والالتزام بالمواعيد. نؤمن بأن النجاح يُبنى على أساس من الثقة والاحترافية.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            من <span className="text-gradient-bronze">نحن</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            أبعاد الارتقاء للاستشارات الهندسية - شركة سعودية رائدة تقدم حلولاً هندسية متكاملة منذ أكثر من 15 عاماً
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`bg-card p-8 rounded-2xl border border-border card-hover animate-fade-up delay-${(index + 1) * 100}`}
            >
              <div className="w-16 h-16 bronze-gradient rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
