import { motion } from "framer-motion";
import { Clock, ExternalLink, Facebook, MapPin, Phone } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    label: "ADDRESS",
    value: (
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
    value: (
      <a href="tel:+919660034000" className="transition-colors hover:text-primary">
        096600 34000
      </a>
    ),
  },
  {
    icon: Clock,
    label: "HOURS",
    value: "Mon – Sun: 9:00 AM – 9:00 PM",
  },
  {
    icon: Facebook,
    label: "FACEBOOK",
    value: (
      <a
        href="https://facebook.com/btgcvdn"
        target="_blank"
        rel="noopener noreferrer"
        className="break-all transition-colors hover:text-primary"
      >
        facebook.com/btgcvdn
      </a>
    ),
  },
];

const LocationSection = () => (
  <section className="relative overflow-hidden py-20 md:py-28" id="contact">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,122,26,0.09),transparent_22%)]" />

    <div className="container relative z-10 mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
      >
        <div>
          <p className="section-label mb-3">FIND US</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            DROP IN OR LOCK YOUR SLOT
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-base">
          Fast directions, clear contact details, and an embedded map framed like part of the interface instead of a default block.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden border border-white/10 bg-card/75 shadow-[0_30px_70px_rgba(0,0,0,0.3)]"
          style={{
            clipPath:
              "polygon(0 18px, 18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
          }}
        >
          <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_rgba(255,107,0,0.7)]" />
            <p className="font-heading text-[0.62rem] uppercase tracking-[0.32em] text-white/58">
              Battletech navigation panel
            </p>
          </div>

          <div className="aspect-[4/3] min-h-[320px] lg:min-h-[480px]">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="space-y-4"
        >
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5"
              style={{
                clipPath:
                  "polygon(0 12px, 12px 0, 100% 0, 100% 100%, calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-primary/22 bg-primary/[0.08] text-primary">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-heading text-[0.64rem] tracking-[0.3em] text-white/45">
                    {item.label}
                  </p>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <a
            href="https://www.google.com/maps/place/Battletech+Gaming+Cafe/@26.9511301,75.776076,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-[48px] w-full overflow-hidden border border-primary/40 bg-primary px-6 py-3.5 text-center font-heading text-sm tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(255,107,0,0.24)] sm:w-auto sm:tracking-[0.24em]"
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
);

export default LocationSection;
