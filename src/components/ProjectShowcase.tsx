import projectCommercial from "@/assets/project-commercial.jpg";
import projectEducational from "@/assets/project-educational.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectSafety from "@/assets/project-safety.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const projects = [
  {
    image: projectCommercial,
    title: "مبنى ناجور الدولي",
    category: "تجاري",
    location: "مكة المكرمة",
    size: "large",
  },
  {
    image: projectEducational,
    title: "الكلية التقنية",
    category: "تعليمي",
    location: "الأحساء",
    size: "medium",
  },
  {
    image: projectInfrastructure,
    title: "تقاطعات الطرق السريعة",
    category: "بنية تحتية",
    location: "الرياض",
    size: "medium",
  },
  {
    image: hero1,
    title: "برج الأعمال المركزي",
    category: "تجاري",
    location: "جدة",
    size: "small",
  },
  {
    image: projectSafety,
    title: "أنظمة سما للسلامة",
    category: "سلامة",
    location: "الدمام",
    size: "small",
  },
  {
    image: projectResidential,
    title: "أبراج السكنية الفاخرة",
    category: "سكني",
    location: "مكة المكرمة",
    size: "small",
  },
  {
    image: hero2,
    title: "جسر الملك فهد",
    category: "بنية تحتية",
    location: "المنطقة الشرقية",
    size: "large",
  },
  {
    image: hero3,
    title: "مصنع البتروكيماويات",
    category: "صناعي",
    location: "ينبع",
    size: "medium",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium mb-4 block">أعمالنا</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            مشاريعنا <span className="text-gradient-bronze">المميزة</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            نفخر بمحفظة متنوعة من المشاريع الناجحة في مختلف القطاعات
          </p>
        </div>

        {/* Creative Masonry Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Featured Project */}
          <div className="col-span-12 md:col-span-8 row-span-2">
            <div className="group relative overflow-hidden rounded-2xl h-full min-h-[400px] md:min-h-[500px] card-hover">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30 w-fit mb-3">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {projects[0].title}
                </h3>
                <p className="text-foreground/70">{projects[0].location}</p>
              </div>
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/50 rounded-tl-2xl" />
            </div>
          </div>

          {/* Medium Projects */}
          {projects.slice(1, 3).map((project, index) => (
            <div key={project.title} className="col-span-6 md:col-span-4">
              <div className="group relative overflow-hidden rounded-2xl aspect-square card-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-primary text-xs font-medium mb-1 block opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Small Projects Row */}
          {projects.slice(3, 6).map((project) => (
            <div key={project.title} className="col-span-4">
              <div className="group relative overflow-hidden rounded-xl aspect-[4/3] card-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-foreground line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Another Large Project */}
          <div className="col-span-12 md:col-span-7">
            <div className="group relative overflow-hidden rounded-2xl h-[300px] card-hover">
              <img
                src={projects[6].image}
                alt={projects[6].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 max-w-md">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30 w-fit mb-3">
                  {projects[6].category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {projects[6].title}
                </h3>
                <p className="text-foreground/70">{projects[6].location}</p>
              </div>
            </div>
          </div>

          {/* Last Medium Project */}
          <div className="col-span-12 md:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl h-[300px] card-hover">
              <img
                src={projects[7].image}
                alt={projects[7].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30 mb-2">
                  {projects[7].category}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {projects[7].title}
                </h3>
                <p className="text-foreground/70 text-sm">{projects[7].location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-primary/50 hover:border-primary px-8 py-4 rounded-lg font-bold text-foreground transition-all duration-300 hover:bg-primary/10">
            عرض جميع المشاريع
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
