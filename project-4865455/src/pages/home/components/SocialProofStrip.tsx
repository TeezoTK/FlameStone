import { motion } from 'framer-motion';

export default function SocialProofStrip() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Trust Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair font-bold text-4xl text-charcoal mb-4">
            Local Favourite in Princes Risborough
          </h2>
          <div className="flex items-center justify-center gap-2 text-flame-orange text-2xl">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </div>
        </motion.div>

        {/* Trust Icons Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Local Favourite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-flame-orange/10 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-line text-flame-orange text-3xl"></i>
            </div>
            <h3 className="font-bebas text-xl text-white mb-2 tracking-wide">
              LOCAL FAVOURITE
            </h3>
            <p className="text-off-white/80 text-sm">
              Loved in Princes Risborough
            </p>
          </motion.div>

          {/* Stone-Baked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-flame-orange/10 rounded-full flex items-center justify-center">
              <i className="ri-fire-line text-flame-orange text-3xl"></i>
            </div>
            <h3 className="font-bebas text-xl text-white mb-2 tracking-wide">
              STONE-BAKED
            </h3>
            <p className="text-off-white/80 text-sm">
              Ready in minutes
            </p>
          </motion.div>

          {/* Fresh Daily */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-flame-orange/10 rounded-full flex items-center justify-center">
              <i className="ri-restaurant-line text-flame-orange text-3xl"></i>
            </div>
            <h3 className="font-bebas text-xl text-white mb-2 tracking-wide">
              FRESH DAILY
            </h3>
            <p className="text-off-white/80 text-sm">
              Dough made every day
            </p>
          </motion.div>
        </div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-stone-beige/30 rounded-2xl p-6">
            <div className="flex gap-1 text-flame-orange mb-3">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="font-inter text-sm text-charcoal italic">
              "Best pizza in Princes Risborough – the dough is incredible and toppings are always fresh."
            </p>
          </div>

          <div className="bg-stone-beige/30 rounded-2xl p-6">
            <div className="flex gap-1 text-flame-orange mb-3">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="font-inter text-sm text-charcoal italic">
              "Proper stone-baked pizza with quality ingredients. Collection is quick and easy."
            </p>
          </div>

          <div className="bg-stone-beige/30 rounded-2xl p-6">
            <div className="flex gap-1 text-flame-orange mb-3">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p className="font-inter text-sm text-charcoal italic">
              "Outstanding service and consistently delicious pizzas. Our go-to takeaway!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}