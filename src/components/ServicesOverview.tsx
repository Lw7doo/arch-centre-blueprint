import citySkyline from "@/assets/city-skyline.jpg";
import { ArrowUp } from "lucide-react";

const ServicesOverview = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={citySkyline}
          alt="Saudi Arabian Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/95 to-charcoal-900" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium mb-4 block">نطاق عملنا</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            نغطي جميع أنحاء <span className="text-gradient-bronze">المملكة</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            من مكة المكرمة إلى الرياض، ومن جدة إلى الدمام - فريقنا جاهز لخدمتكم أينما كنتم
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "مكة المكرمة", projects: 18 },
            { name: "الرياض", projects: 12 },
            { name: "جدة", projects: 8 },
            { name: "الدمام", projects: 6 },
            { name: "الأحساء", projects: 4 },
            { name: "الطائف", projects: 3 },
            { name: "المدينة المنورة", projects: 5 },
            { name: "ينبع", projects: 2 },
          ].map((region, index) => (
            <div
              key={region.name}
              className={`group bg-card/30 backdrop-blur border border-border hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-300 card-hover animate-fade-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ArrowUp className="w-5 h-5 text-primary transform rotate-45" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{region.name}</h3>
              <p className="text-primary font-medium">{region.projects}+ مشروع</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
