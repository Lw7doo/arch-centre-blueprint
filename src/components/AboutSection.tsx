import teamMeeting from "@/assets/team-meeting.jpg";
import citySkyline from "@/assets/city-skyline.jpg";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    "أكثر من 50 مشروع حكومي وخاص",
    "فريق من 40+ مهندس وخبير متخصص",
    "تغطية شاملة لجميع مناطق المملكة",
    "شراكات مع كبرى الجهات الحكومية والخاصة",
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${citySkyline})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side with Creative Layout */}
          <div className="relative animate-slide-right">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-bronze-500/10">
              <img
                src={teamMeeting}
                alt="فريق أبعاد الارتقاء"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Overlay with Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal-900 via-charcoal-900/90 to-transparent">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient-bronze">15+</div>
                    <div className="text-xs md:text-sm text-foreground/70">سنوات الخبرة</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient-bronze">50+</div>
                    <div className="text-xs md:text-sm text-foreground/70">مشروع منجز</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient-bronze">40+</div>
                    <div className="text-xs md:text-sm text-foreground/70">مهندس خبير</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bronze-gradient rounded-2xl opacity-20 -z-10" />
            
            {/* Floating Badge */}
            <div className="absolute -top-6 left-8 bg-card border border-border rounded-xl px-4 py-3 shadow-xl animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">نعمل على مشاريع جديدة</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-left">
            <span className="text-primary font-medium mb-4 block">لماذا نحن</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              شريكك الموثوق في
              <span className="text-gradient-bronze block">التميز الهندسي</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              منذ أكثر من 15 عاماً، ونحن نقدم حلولاً هندسية متكاملة تتجاوز التوقعات. نجمع بين
              الخبرة العميقة والابتكار المستمر لتحقيق أعلى معايير الجودة في كل مشروع نشرف عليه.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex bronze-gradient bronze-gradient-hover px-8 py-4 rounded-lg font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-bronze-500/20"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
