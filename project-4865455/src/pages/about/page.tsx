import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO, getBaseUrl } from '../../utils/seo';

const processes = [
  {
    number: '01',
    title: 'The Dough',
    description: 'Kneaded fresh daily with quality flour and fermented for at least 24 hours. This slow process develops complex flavours and creates that perfect light, airy texture with just the right amount of chew.',
    image: 'https://readdy.ai/api/search-image?query=Hands%20kneading%20fresh%20pizza%20dough%20on%20floured%20wooden%20surface%2C%20close-up%20shot%20showing%20texture%20and%20craftsmanship%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20flour%20dust%20visible%20in%20air%2C%20rustic%20artisan%20bakery%20atmosphere%20with%20warm%20tones&width=800&height=600&seq=proc001&orientation=landscape',
  },
  {
    number: '02',
    title: 'The Toppings',
    description: 'Hand-stretched bases topped with quality ingredients. Vegetables sourced locally from Buckinghamshire farms, authentic Italian cheeses, and the finest meats. Every topping prepared fresh daily.',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20pizza%20toppings%20including%20ripe%20tomatoes%20basil%20mozzarella%20and%20vegetables%20arranged%20on%20rustic%20wooden%20table%2C%20overhead%20shot%20with%20vibrant%20colors%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20farm-fresh%20quality%20visible%2C%20artisan%20ingredient%20selection&width=800&height=600&seq=proc002&orientation=landscape',
  },
  {
    number: '03',
    title: 'The Stone Oven',
    description: 'Cooked fast in our hand-built Italian oven at intense heat – around 2 minutes per pizza. This creates the signature char and crispy base while keeping toppings fresh and vibrant.',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20Italian%20stone%20pizza%20oven%20with%20glowing%20orange%20flames%20and%20burning%20wood%2C%20interior%20view%20showing%20brick%20construction%2C%20professional%20photography%20with%20dramatic%20fire%20lighting%2C%20intense%20heat%20and%20craftsmanship%20visible%2C%20authentic%20pizzeria%20atmosphere&width=800&height=600&seq=proc003&orientation=landscape',
  },
];

const whyUs = [
  {
    icon: 'ri-restaurant-2-line',
    title: 'Quality Ingredients',
    description: 'Premium flour, local veg, authentic Italian products',
  },
  {
    icon: 'ri-time-line',
    title: 'Consistent Bakes',
    description: '24h ferment, hand-stretched, stone-oven perfection',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Great Service',
    description: 'Friendly team, fast collection, reliable delivery',
  },
  {
    icon: 'ri-price-tag-3-line',
    title: 'Good Value',
    description: 'Better pizza at a good price, no compromise',
  },
];

export default function AboutPage() {
  const baseUrl = getBaseUrl();

  useSEO({
    title: 'About Us - Our Story & Process | Flame & Stone Pizza Princes Risborough',
    description: 'Learn about Flame & Stone Pizza: fresh dough kneaded daily, 24-hour fermentation, hand-stretched bases, locally sourced ingredients, and 2-minute cooking in our Italian stone oven.',
    keywords: 'about Flame & Stone Pizza, pizza making process, 24-hour fermented dough, Italian stone oven, local ingredients Buckinghamshire',
    canonical: `${baseUrl}/about`,
    ogTitle: 'Our Story | Flame & Stone Pizza',
    ogDescription: 'Handcrafted pizzas with 24-hour fermented dough, local ingredients, and authentic Italian stone oven cooking.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Flame & Stone Pizza',
      description: 'Learn about our pizza-making process, quality ingredients, and commitment to authentic stone-baked pizza in Princes Risborough',
      mainEntity: {
        '@type': 'Restaurant',
        name: 'Flame & Stone Pizza',
        description: 'Stone-baked pizza restaurant serving handcrafted pizzas with 24-hour fermented dough, locally sourced vegetables, and authentic Italian oven cooking',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14 High Street',
          addressLocality: 'Princes Risborough',
          addressRegion: 'Buckinghamshire',
          postalCode: 'HP27 0AX',
          addressCountry: 'GB',
        },
        telephone: '+441844345000',
        email: 'info@flameandstonepizza.co.uk',
        url: baseUrl,
      },
    },
  });

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Story Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Baker%20hands%20stretching%20fresh%20pizza%20dough%20in%20artisan%20kitchen%2C%20close-up%20shot%20showing%20craftsmanship%20and%20technique%2C%20professional%20food%20photography%20with%20warm%20natural%20lighting%2C%20flour%20on%20hands%20and%20wooden%20surface%2C%20authentic%20Italian%20pizzeria%20atmosphere%20with%20rustic%20charm&width=1920&height=1080&seq=story001&orientation=landscape"
            alt="Dough preparation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-12">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-8 text-center">
              Crafted with Passion
            </h1>
            
            <div className="space-y-6 font-inter text-off-white text-lg leading-relaxed">
              <p>
                At Flame & Stone Pizza, we believe great pizza starts with great ingredients and time-honoured techniques. Our mission is simple: bring authentic, stone-baked pizza to Princes Risborough.
              </p>
              <p>
                Every morning, we knead our dough fresh using quality flour and ferment it for at least 24 hours. This slow process develops the complex flavours and perfect texture that make our pizzas special.
              </p>
              <p>
                We hand-stretch each base, top it with locally sourced vegetables and quality ingredients, then cook it fast in our hand-built Italian oven. The result? Pizza that's crispy, flavourful, and ready in around 2 minutes.
              </p>
              <p>
                Better pizza at a good price, with outstanding service – that's the Flame & Stone promise.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process Cards */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-5xl text-charcoal mb-4">
              Our Process
            </h2>
            <p className="font-inter text-text-gray text-lg">
              Dough → Ferment → Stretch → Top → Stone Oven
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-stone-beige rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-flame-orange font-playfair font-bold text-7xl mb-4">
                  {process.number}
                </div>
                
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h3 className="font-playfair font-bold text-3xl text-charcoal mb-4">
                  {process.title}
                </h3>
                
                <p className="font-inter text-text-gray leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Flame & Stone Promise */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-5xl text-white mb-4">
              The Flame & Stone Promise
            </h2>
            <p className="font-inter text-off-white text-lg">
              What makes us different
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-flame-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-4xl text-white`}></i>
                </div>
                
                <h3 className="font-bebas text-2xl text-white tracking-wider mb-3">
                  {item.title}
                </h3>
                
                <p className="font-inter text-off-white text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="/order"
              className="inline-flex items-center gap-2 bg-flame-orange text-white font-inter font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
            >
              ORDER NOW
              <i className="ri-arrow-right-line"></i>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}