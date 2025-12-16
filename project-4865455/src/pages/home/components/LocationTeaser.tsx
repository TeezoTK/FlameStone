import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LocationTeaser() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-stone-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-5xl md:text-6xl text-charcoal mb-6">
              Find Us on the High Street
            </h2>
            <p className="font-inter text-lg text-text-gray mb-8 leading-relaxed">
              Located in the heart of Princes Risborough – High Street pickup makes collection quick and easy
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-flame-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl text-flame-orange"></i>
                </div>
                <div>
                  <h4 className="font-inter font-bold text-charcoal mb-1">Address</h4>
                  <p className="font-inter text-text-gray">
                    14 High Street<br />
                    Princes Risborough<br />
                    Buckinghamshire, HP27 0AX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-flame-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-xl text-flame-orange"></i>
                </div>
                <div>
                  <h4 className="font-inter font-bold text-charcoal mb-1">Collection / Help</h4>
                  <a
                    href="tel:01844345000"
                    className="font-inter text-flame-orange hover:underline cursor-pointer"
                  >
                    01844 345000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-flame-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shopping-bag-3-line text-xl text-flame-orange"></i>
                </div>
                <div>
                  <h4 className="font-inter font-bold text-charcoal mb-1">Collection Made Easy</h4>
                  <p className="font-inter text-text-gray">
                    Order online, pick up in 15 minutes – piping hot from the oven
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-flame-orange text-white font-inter font-bold text-base px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
            >
              GET DIRECTIONS
              <i className="ri-arrow-right-line"></i>
            </Link>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.123456789!2d-0.8234567!3d51.7234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQzJzI0LjQiTiAwwrA0OSczMC40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flame & Stone Pizza Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}