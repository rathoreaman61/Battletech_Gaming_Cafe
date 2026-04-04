import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink, Facebook } from "lucide-react";

const LocationSection = () => (
  <section className="py-20 md:py-28" id="contact">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="section-label mb-3">FIND US</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          LOCATION & CONTACT
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
        >
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
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <p className="font-heading text-sm tracking-wider text-foreground mb-1">ADDRESS</p>
              <p className="text-muted-foreground text-sm">
                1/130, Near KPS Udaan School, Sector 1,
                <br />
                Vidhyadhar Nagar, Jaipur, Rajasthan 302023
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <p className="font-heading text-sm tracking-wider text-foreground mb-1">PHONE</p>
              <a href="tel:+919660034000" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                096600 34000
              </a>
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
              <a
                href="https://facebook.com/btgcvdn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                facebook.com/btgcvdn
              </a>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Battletech+Gaming+Cafe/@26.9511301,75.776076,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-sm tracking-widest bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors w-fit mt-4"
          >
            GET DIRECTIONS
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
