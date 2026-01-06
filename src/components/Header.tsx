import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* CTA Button - Left Side */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bronze-gradient bronze-gradient-hover px-6 py-3 rounded-lg font-bold text-sm text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-bronze-500/20"
          >
            اطلب استشارة
          </a>
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
            <a
              href="#contact"
              className="bronze-gradient mt-4 px-6 py-3 rounded-lg font-bold text-center text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              اطلب استشارة
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
