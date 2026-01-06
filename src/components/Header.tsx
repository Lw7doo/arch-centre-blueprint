import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
    // In a full implementation, this would trigger i18n context change
  };

  const navItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-header py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Right Side */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="أبعاد الارتقاء" className="h-16 w-auto" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">أبعاد الارتقاء</h1>
            <p className="text-xs text-muted-foreground">للاستشارات الهندسية</p>
          </div>
        </a>

        {/* Navigation - Center (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle - Left Side */}
        <div className="hidden lg:block">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-all duration-300"
          >
            <Globe size={18} />
            {language === "ar" ? "English" : "العربية"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-header mt-2 mx-4 rounded-xl p-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-lg border border-primary/30 bg-primary/10 text-primary font-medium"
            >
              <Globe size={18} />
              {language === "ar" ? "English" : "العربية"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
