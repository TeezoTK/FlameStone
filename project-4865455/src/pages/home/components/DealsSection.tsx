import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const deals = [
  {
    title: 'Deal for One',
    items: [
      'Any Medium Pizza',
      'Choice of Side',
      'Can of Drink',
    ],
    icon: 'ri-user-3-line',
  },
  {
    title: 'Deal for Two',
    items: [
      'Any Large Pizza',
      'Choice of Side',
      '1.5L Bottle of Drink',
    ],
    icon: 'ri-group-line',
    featured: true,
  },
  {
    title: 'Family Deal',
    items: [
      'Two Large Pizzas',
      'Two Sides',
      'Fresh Salad',
      '1.5L Bottle of Drink',
    ],
    icon: 'ri-home-heart-line',
  },
];

export default function DealsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-4">
            Value Deals
          </h2>
          <p className="font-inter text-lg text-off-white max-w-2xl mx-auto">
            Better pizza at a good price – quality ingredients without compromise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-10 ${
                deal.featured
                  ? 'bg-flame-orange shadow-2xl transform md:scale-105'
                  : 'bg-white/5 backdrop-blur-sm'
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  deal.featured ? 'bg-white/20' : 'bg-flame-orange/20'
                }`}
              >
                <i
                  className={`${deal.icon} text-4xl ${
                    deal.featured ? 'text-white' : 'text-flame-orange'
                  }`}
                ></i>
              </div>

              <h3
                className={`font-playfair font-bold text-3xl text-center mb-8 ${
                  deal.featured ? 'text-white' : 'text-white'
                }`}
              >
                {deal.title}
              </h3>

              <ul className="space-y-4 mb-8">
                {deal.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <i
                      className={`ri-checkbox-circle-fill text-xl ${
                        deal.featured ? 'text-white' : 'text-flame-orange'
                      }`}
                    ></i>
                    <span
                      className={`font-inter text-base ${
                        deal.featured ? 'text-white' : 'text-off-white'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/order"
            className="inline-flex items-center gap-2 bg-flame-orange text-white font-inter font-bold text-lg px-10 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer"
          >
            VIEW ALL DEALS
            <i className="ri-arrow-right-line"></i>
          </Link>
          <p className="font-inter text-sm text-off-white/70 mt-4">
            See full offers on our ordering page
          </p>
        </motion.div>
      </div>
    </section>
  );
}