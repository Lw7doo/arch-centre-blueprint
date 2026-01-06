import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="أبعاد الارتقاء" className="h-12 w-auto" />
            <div>
              <h3 className="text-lg font-bold text-foreground">أبعاد الارتقاء</h3>
              <p className="text-sm text-muted-foreground">للاستشارات الهندسية</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} أبعاد الارتقاء للاستشارات الهندسية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
