import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO, getBaseUrl } from '../../utils/seo';

export default function ContactPage() {
  const baseUrl = getBaseUrl();

  useSEO({
    title: 'Contact Us - Location & Opening Hours | Flame & Stone Pizza Princes Risborough',
    description: 'Contact Flame & Stone Pizza: 14 High Street, Princes Risborough, HP27 0AX. Phone: 01844 345000. Email: info@flameandstonepizza.co.uk. Open Mon-Thu 5-10pm, Fri-Sat 5-11pm, Sun 5-9pm.',
    keywords: 'contact Flame & Stone Pizza, pizza restaurant Princes Risborough, 14 High Street HP27, opening hours, phone number',
    canonical: `${baseUrl}/contact`,
    ogTitle: 'Contact Us | Flame & Stone Pizza',
    ogDescription: 'Get in touch: 14 High Street, Princes Risborough, HP27 0AX. Call 01844 345000.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Flame & Stone Pizza',
      description: 'Contact information, location, and opening hours for Flame & Stone Pizza in Princes Risborough',
      mainEntity: {
        '@type': 'Restaurant',
        name: 'Flame & Stone Pizza',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14 High Street',
          addressLocality: 'Princes Risborough',
          addressRegion: 'Buckinghamshire',
          postalCode: 'HP27 0AX',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '51.7167',
          longitude: '-0.8333',
        },
        telephone: '+441844345000',
        email: 'info@flameandstonepizza.co.uk',
        url: baseUrl,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '17:00',
            closes: '22:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Friday', 'Saturday'],
            opens: '17:00',
            closes: '23:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '17:00',
            closes: '21:00',
          },
        ],
      },
    },
  });

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      <main className="pt-20">
        {/* Split Hero */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row">
          {/* Left Contact Info */}
          <div className="lg:w-3/5 bg-charcoal px-8 lg:px-16 py-20 flex items-center">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-playfair font-bold text-5xl md:text-6xl text-white mb-12"
              >
                Get in Touch
              </motion.h1>

              {/* Contact Methods */}
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-flame-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-white text-lg mb-2">Phone (Collection / Help)</h3>
                      <a
                        href="tel:01844345000"
                        className="font-inter text-flame-orange text-3xl hover:underline cursor-pointer"
                      >
                        01844 345000
                      </a>
                      <p className="font-inter text-gray-400 text-sm mt-2">
                        For collection queries or help with your order
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-flame-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-white text-lg mb-2">Email</h3>
                      <a
                        href="mailto:info@flameandstonepizza.co.uk"
                        className="font-inter text-flame-orange text-xl hover:underline cursor-pointer break-all"
                      >
                        info@flameandstonepizza.co.uk
                      </a>
                      <p className="font-inter text-gray-400 text-sm mt-2">
                        Send us a message anytime
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-flame-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-white text-lg mb-2">Address</h3>
                      <p className="font-inter text-off-white text-lg leading-relaxed">
                        14 High Street<br />
                        Princes Risborough<br />
                        Buckinghamshire<br />
                        HP27 0AX
                      </p>
                      <p className="font-inter text-gray-400 text-sm mt-2">
                        Find us on the High Street
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Opening Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-white/20"
                >
                  <h3 className="font-bebas text-flame-orange text-xl tracking-wider mb-4">
                    OPENING HOURS
                  </h3>
                  <div className="space-y-2 font-inter text-off-white">
                    <div className="flex justify-between">
                      <span className="font-bold">Monday - Thursday</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Friday - Saturday</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Sunday</span>
                      <span>5:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="lg:w-2/5 h-[400px] lg:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.123456789!2d-0.8333!3d51.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQzJzAwLjEiTiAwwrA0OScxMS45Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flame & Stone Pizza Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Find Us CTA */}
        <section className="bg-flame-orange py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair font-bold text-4xl text-white mb-6"
            >
              Ready to Order?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-inter text-white text-lg mb-8"
            >
              Experience stone-baked perfection today
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/menu"
                className="bg-white text-charcoal font-inter font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
              >
                VIEW MENU
              </a>
              <a
                href="/order"
                className="bg-charcoal text-white font-inter font-bold px-10 py-4 rounded-full hover:bg-black transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
              >
                ORDER NOW
              </a>
            </motion.div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-20 px-6 lg:px-12 bg-stone-beige">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-playfair font-bold text-4xl text-charcoal mb-6">
                <strong>Stone-Baked Pizza in Princes Risborough (HP27)</strong>
              </h2>
              <p className="font-inter text-text-gray text-lg leading-relaxed mb-8">
                Looking for authentic <strong>stone-baked pizza near you</strong>? Flame & Stone Pizza serves the finest handcrafted pizzas in <strong>Princes Risborough</strong> and throughout <strong>Buckinghamshire</strong>. Our <strong>Italian stone oven</strong> creates the perfect crispy crust, while our 24-hour fermented dough and locally sourced ingredients ensure every bite is exceptional. Whether you're searching for <strong>pizza delivery</strong> or <strong>pizza collection in HP27</strong>, we're your local choice for quality and flavour.
              </p>
              <p className="font-inter text-text-gray text-lg leading-relaxed">
                Visit us at <strong>14 High Street, Princes Risborough</strong>, or order online for fast collection and delivery throughout the area. Experience why locals choose Flame & Stone for the best <strong>takeaway pizza in Buckinghamshire</strong>.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}