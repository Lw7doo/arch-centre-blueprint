import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const projects = [
  {
    image: hero1,
    title: "مبنى ناجور الدولي",
    category: "تجاري",
    location: "مكة المكرمة",
  },
  {
    image: hero2,
    title: "مشروع البنية التحتية",
    category: "حكومي",
    location: "الرياض",
  },
  {
    image: hero3,
    title: "المنشآت الصناعية",
    category: "صناعي",
    location: "الدمام",
  },
  {
    image: hero1,
    title: "الكلية التقنية",
    category: "تعليمي",
    location: "الأحساء",
  },
  {
    image: hero2,
    title: "دراسة المرور",
    category: "استشاري",
    location: "جدة",
  },
  {
    image: hero3,
    title: "مشروع ماكدونالدز",
    category: "تجاري",
    location: "مكة المكرمة",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            مشاريعنا <span className="text-gradient-bronze">المميزة</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            نفخر بمحفظة متنوعة من المشاريع الناجحة في مختلف القطاعات
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] card-hover animate-fade-up delay-${((index % 3) + 1) * 100}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.category} • {project.location}
                </span>
                <h3 className="text-xl font-bold text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
