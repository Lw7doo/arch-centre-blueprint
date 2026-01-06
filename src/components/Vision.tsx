import { Eye, Target, Award } from "lucide-react";
import consultancyImg from "@/assets/consultancy-card.jpg";

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
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <img src={consultancyImg} alt="" className="w-full h-full object-cover rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium mb-4 block">من نحن</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            رؤيتنا <span className="text-gradient-bronze">ورسالتنا</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            أبعاد الارتقاء للاستشارات الهندسية - شركة سعودية رائدة تقدم حلولاً هندسية متكاملة منذ أكثر من 15 عاماً
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 card-hover animate-fade-up overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bronze-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
