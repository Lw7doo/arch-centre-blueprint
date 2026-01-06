import patternBg from "@/assets/pattern-bg.jpg";

const ParallaxDivider = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${patternBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal-900/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            نبني <span className="text-gradient-bronze">المستقبل</span> معاً
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            من التصور إلى التنفيذ، نحول أحلامكم الهندسية إلى واقع ملموس
          </p>
          <a
            href="#contact"
            className="inline-flex bronze-gradient bronze-gradient-hover px-8 py-4 rounded-lg font-bold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-bronze-500/30"
          >
            ابدأ مشروعك الآن
          </a>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default ParallaxDivider;
