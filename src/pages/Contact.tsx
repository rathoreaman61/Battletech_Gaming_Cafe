import { motion } from "framer-motion";
import { Clock, ExternalLink, Facebook, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { buildBreadcrumbSchema, updatePageSEO, pageSEOConfig } from "@/lib/seo";

const contactCards = [
  {
    icon: MapPin,
    label: "ADDRESS",
    content: (
      <>
        1/130, Near KPS Udaan School, Sector 1,
        <br />
        Vidhyadhar Nagar, Jaipur, Rajasthan 302023
      </>
    ),
  },
  {
    icon: Phone,
    label: "PHONE",
    content: (
      <a href="tel:+919660034000" className="transition-colors hover:text-primary">
        096600 34000
      </a>
    ),
  },
  {
    icon: Clock,
    label: "HOURS",
    content: "Mon – Sun: 9:00 AM – 9:00 PM",
  },
  {
    icon: Facebook,
    label: "FACEBOOK",
    content: (
      <a
        href="https://facebook.com/btgcvdn"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-primary"
      >
        facebook.com/btgcvdn
      </a>
    ),
  },
];

const quickNotes = [
  "Fast WhatsApp booking flow",
  "Group session and squad rate support",
  "Tournament or custom event inquiries",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      ...pageSEOConfig.contact,
      canonicalUrl: "https://battletechgaming.com/contact",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Battletech Gaming Cafe",
          description: pageSEOConfig.contact.description,
          url: "https://battletechgaming.com/contact",
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Battletech Gaming Cafe",
          url: "https://battletechgaming.com/contact",
          telephone: "+919660034000",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1/130, Near KPS Udaan School, Sector 1, Vidhyadhar Nagar",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302023",
            addressCountry: "IN",
          },
          sameAs: [
            "https://facebook.com/btgcvdn",
            "https://www.instagram.com/battletechgamingcafe/",
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I book a gaming session at Battletech Gaming Cafe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can book directly through the WhatsApp form on the contact page or call Battletech Gaming Cafe at +91 9660034000.",
              },
            },
            {
              "@type": "Question",
              name: "Does Battletech Gaming Cafe handle squad and tournament bookings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Battletech supports squad sessions, group seating, and tournament or custom event inquiries.",
              },
            },
            {
              "@type": "Question",
              name: "What are Battletech Gaming Cafe opening hours?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Battletech Gaming Cafe is open daily from 9:00 AM to 9:00 PM.",
              },
            },
          ],
        },
        buildBreadcrumbSchema([
          { name: "Home", url: "https://battletechgaming.com/" },
          { name: "Contact", url: "https://battletechgaming.com/contact" },
        ]),
      ],
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message, date } = formData;
    if (!name.trim() || !phone.trim()) return;

    const waMessage = `Hi, I'm ${name}. ${message ? `${message} ` : ""}${
      date ? `Preferred date: ${date}. ` : ""
    }Phone: ${phone}`;

    window.open(
      `https://wa.me/919660034000?text=${encodeURIComponent(waMessage)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,rgba(8,8,8,0.98),rgba(12,10,9,0.98))]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.14),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.76))]" />
        <div className="scanline-overlay absolute inset-0 opacity-50" />

        <div className="container relative z-10 mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="section-label mb-4">GET IN TOUCH</p>
              <h1 className="max-w-5xl font-heading text-[2.5rem] font-black leading-[0.92] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                BOOK FAST.
                <span className="mt-2 block text-primary">LOCK YOUR SLOT.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/72 md:text-base">
                Use the contact page for direct bookings, squad sessions, event requests, or quick
                questions. The layout is built to feel like a booking panel, not a basic form page.
              </p>

              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {quickNotes.map((note, index) => (
                  <motion.div
                    key={note}
                    initial={{ opacity: 0, x: index === 0 ? -12 : index === 2 ? 12 : 0, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.42 }}
                    className="flex items-center gap-3 border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                    }}
                  >
                    <ShieldCheck size={16} className="shrink-0 text-primary" />
                    <span className="font-heading text-[0.72rem] tracking-[0.14em] text-white/82 sm:text-xs sm:tracking-[0.2em]">
                      {note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div className="ui-panel-strong relative p-5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="font-heading text-[0.62rem] tracking-[0.34em] text-white/40">
                      CONTACT PANEL
                    </p>
                    <h2 className="mt-1 font-heading text-lg tracking-[0.14em] text-foreground">
                      LIVE SUPPORT STATUS
                    </h2>
                  </div>
                  <div className="font-heading text-[0.64rem] tracking-[0.3em] text-primary">
                    ONLINE
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="border border-white/8 bg-black/20 p-4">
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/40">
                      WHATSAPP
                    </p>
                    <p className="mt-2 font-heading text-xl text-primary">PRIMARY</p>
                  </div>
                  <div className="border border-white/8 bg-black/20 p-4">
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/40">
                      HOURS
                    </p>
                    <p className="mt-2 font-heading text-xl text-primary">9 AM – 9 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="ui-panel"
            >
              <div className="border-b border-white/8 px-6 py-5 md:px-7">
                <p className="font-heading text-[0.64rem] tracking-[0.32em] text-white/42">
                  BOOKING FORM
                </p>
                <h2 className="mt-2 font-heading text-2xl tracking-[0.12em] text-foreground md:text-3xl">
                  SEND VIA WHATSAPP
                </h2>
              </div>

              <div className="p-6 md:p-7">
                {submitted ? (
                  <div className="border border-primary/18 bg-primary/[0.05] p-8 text-center">
                    <Send size={42} className="mx-auto mb-4 text-primary" />
                    <h3 className="font-heading text-xl tracking-[0.14em] text-foreground">
                      MESSAGE SENT
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      Your message opened in WhatsApp. If you want to send another request, reset the
                      panel below.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", message: "", date: "" });
                      }}
                      className="mt-6 font-heading text-sm tracking-[0.24em] text-primary hover:underline"
                    >
                      RESET PANEL
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="ui-label">
                          NAME *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="ui-input"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="ui-label">
                          PHONE *
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={15}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="ui-input"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="ui-label">
                        PREFERRED DATE
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="ui-input"
                      />
                    </div>

                    <div>
                      <label className="ui-label">
                        MESSAGE
                      </label>
                      <textarea
                        rows={5}
                        maxLength={1000}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="ui-input resize-none"
                        placeholder="Tell us if you need a solo session, squad setup, or event booking..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden border border-primary/40 bg-primary px-6 py-3.5 font-heading text-sm tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(255,107,0,0.24)] active:scale-95"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
                      <span className="relative z-10">SEND VIA WHATSAPP</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="space-y-4"
            >
              {contactCards.map((item) => (
                <div
                  key={item.label}
                  className="ui-panel p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-primary/22 bg-primary/[0.08] text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="font-heading break-words text-[0.64rem] tracking-[0.24em] text-white/45 sm:tracking-[0.3em]">
                        {item.label}
                      </p>
                      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="https://www.google.com/maps/place/Battletech+Gaming+Cafe/@26.9511301,75.776076,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex overflow-hidden border border-primary/40 bg-primary px-6 py-3.5 font-heading text-sm tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(255,107,0,0.24)]"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  GET DIRECTIONS
                  <ExternalLink size={14} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className="ui-panel"
          >
            <div className="border-b border-white/8 px-5 py-4">
              <p className="font-heading text-[0.62rem] tracking-[0.34em] text-white/40">
                LOCATION MAP
              </p>
            </div>
            <div className="h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5!2d75.776076!3d26.9511301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3926dfdf1f7%3A0xe44cf19cbd923de!2sBattletech%20Gaming%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Battletech Gaming Cafe location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
