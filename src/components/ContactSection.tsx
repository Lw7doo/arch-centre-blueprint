import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const branches = [
    {
      city: "مكة المكرمة",
      address: "حي بطحاء قريش",
      phone: "+966 12 XXX XXXX",
    },
    {
      city: "الرس",
      address: "المنطقة المركزية",
      phone: "+966 16 XXX XXXX",
    },
  ];

  const inquiryTypes = [
    "استشارة هندسية",
    "إشراف على مشروع",
    "تصميم معماري",
    "دراسة جدوى",
    "أخرى",
  ];

  return (
    <section id="contact" className="py-24 bg-charcoal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            تواصل <span className="text-gradient-bronze">معنا</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحقيق رؤيتك الهندسية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border animate-fade-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">أرسل استفسارك</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="أدخل اسمك"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="05XXXXXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  نوع الاستفسار
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                >
                  <option value="">اختر نوع الاستفسار</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  الرسالة (اختياري)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              <button
                type="submit"
                className="w-full bronze-gradient bronze-gradient-hover py-4 rounded-lg font-bold text-lg text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-bronze-500/20"
              >
                <Send className="w-5 h-5" />
                إرسال الطلب
              </button>
            </form>
          </div>

          {/* Branches & Contact Info */}
          <div className="space-y-8 animate-fade-up delay-200">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">فروعنا</h3>
              <div className="space-y-6">
                {branches.map((branch) => (
                  <div
                    key={branch.city}
                    className="bg-card/50 backdrop-blur p-6 rounded-xl border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bronze-gradient flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {branch.city}
                        </h4>
                        <p className="text-muted-foreground mb-2">{branch.address}</p>
                        <p className="text-primary font-medium">{branch.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur p-6 rounded-xl border border-border">
              <h4 className="text-lg font-bold text-foreground mb-4">تواصل مباشر</h4>
              <div className="space-y-4">
                <a
                  href="tel:+966XXXXXXXX"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+966 XX XXX XXXX</span>
                </a>
                <a
                  href="mailto:info@abaad.sa"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@abaad.sa</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card/50 backdrop-blur rounded-xl border border-border overflow-hidden h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground">خريطة الموقع</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
