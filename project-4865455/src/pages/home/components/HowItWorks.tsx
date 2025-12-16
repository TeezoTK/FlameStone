import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Choose Your Pizza',
    description: 'Browse our menu and select from classic favourites or build your own with quality toppings',
    icon: 'ri-restaurant-line',
  },
  {
    number: '02',
    title: 'Customize & Order',
    description: 'Add your preferences, choose collection or delivery, and complete your order online',
    icon: 'ri-edit-line',
  },
  {
    number: '03',
    title: 'We Bake Fresh',
    description: 'Your pizza is hand-stretched and stone-baked to perfection in our Italian oven',
    icon: 'ri-fire-fill',
  },
  {
    number: '04',
    title: 'Collect or Receive',
    description: 'Pick up from High Street in 15 minutes or have it delivered hot to your door',
    icon: 'ri-shopping-bag-3-line',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-charcoal mb-4">
            How It Works
          </h2>
          <p className="font-inter text-lg text-text-gray max-w-2xl mx-auto">
            From order to oven to your table – simple, fast, and delicious
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-flame-orange/20"></div>
              )}

              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-flame-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className={`${step.icon} text-5xl text-white`}></i>
                </div>

                <div className="mb-4">
                  <span className="font-bebas text-6xl text-flame-orange/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-playfair font-bold text-2xl text-charcoal mb-4">
                  {step.title}
                </h3>

                <p className="font-inter text-sm text-text-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}