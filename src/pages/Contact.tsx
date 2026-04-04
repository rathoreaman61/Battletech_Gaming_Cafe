import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, ExternalLink, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { updatePageSEO, pageSEOConfig } from "@/lib/seo";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      ...pageSEOConfig.contact,
      canonicalUrl: "https://battletechgaming.com/contact",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message, date } = formData;
    if (!name.trim() || !phone.trim()) return;
    const waMessage = `Hi, I'm ${name}. ${message ? message + " " : ""}${date ? "Preferred date: " + date + ". " : ""}Phone: ${phone}`;
    window.open(`https://wa.me/919660034000?text=${encodeURIComponent(waMessage)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-surface-dark carbon-texture">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="section-label mb-3"
            >
              GET IN TOUCH
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
              className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4"
            >
              CONTACT US
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
              className="text-muted-foreground max-w-lg mx-auto"
            >
              Book a session, ask about group rates, or just say hello.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="glass-card p-8 text-center">
                  <Send size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-foreground mb-2">MESSAGE SENT!</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll get back to you shortly. You can also reach us on WhatsApp.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", message: "", date: "" }); }}
                    className="mt-4 font-heading text-sm tracking-widest text-primary hover:underline"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-heading text-xs tracking-wider text-foreground mb-1.5 block">NAME *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-heading text-xs tracking-wider text-foreground mb-1.5 block">PHONE *</label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="font-heading text-xs tracking-wider text-foreground mb-1.5 block">PREFERRED DATE</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="font-heading text-xs tracking-wider text-foreground mb-1.5 block">MESSAGE</label>
                    <textarea
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Tell us what you need..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-heading text-sm tracking-widest bg-primary text-primary-foreground py-3.5 rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    SEND VIA WHATSAPP
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-sm tracking-wider text-foreground mb-1">ADDRESS</p>
                  <p className="text-muted-foreground text-sm">
                    1/130, Near KPS Udaan School, Sector 1, Vidhyadhar Nagar, Jaipur, Rajasthan 302023
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-sm tracking-wider text-foreground mb-1">PHONE</p>
                  <a href="tel:+919660034000" className="text-muted-foreground text-sm hover:text-primary transition-colors">096600 34000</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-sm tracking-wider text-foreground mb-1">HOURS</p>
                  <p className="text-muted-foreground text-sm">Mon – Sun: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Facebook size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-sm tracking-wider text-foreground mb-1">FACEBOOK</p>
                  <a href="https://facebook.com/btgcvdn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    facebook.com/btgcvdn
                  </a>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Battletech+Gaming+Cafe/@26.9511301,75.776076,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heading text-sm tracking-widest bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors"
              >
                GET DIRECTIONS <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full width map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5!2d75.776076!3d26.9511301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3926dfdf1f7%3A0xe44cf19cbd923de!2sBattletech%20Gaming%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Battletech Gaming Cafe location"
        />
      </section>
    </div>
  );
};

export default ContactPage;
