import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useState } from 'react';
import { useSEO, getBaseUrl } from '../../utils/seo';

const faqs = [
  {
    question: 'How does collection work?',
    answer: 'Order online and your pizza will be ready for pickup in approximately 15 minutes. We\'ll confirm your collection time. Our address is 14 High Street, Princes Risborough, HP27 0AX. For collection queries, call 01844 345000.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, PayPal, and Apple Pay through our secure online ordering system.',
  },
  {
    question: 'Can I customize my pizza?',
    answer: 'Absolutely! You can add or remove toppings, choose your crust style, and make special requests when ordering online.',
  },
  {
    question: 'Do you have allergen information?',
    answer: 'Yes. If you have allergies or intolerances, please contact us before ordering on 01844 345000. We offer gluten-free bases and can advise on ingredients.',
  },
  {
    question: 'What are your busiest times?',
    answer: 'Weekends and peak dinner hours (6pm-8pm) are our busiest times. We recommend ordering early during these periods to avoid delays.',
  },
  {
    question: 'What is your delivery area?',
    answer: 'We deliver throughout Princes Risborough and surrounding areas. Check our ordering page for specific delivery availability to your postcode.',
  },
];

export default function OrderPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const baseUrl = getBaseUrl();

  useSEO({
    title: 'Order Online - Collection & Delivery | Flame & Stone Pizza Princes Risborough',
    description: 'Order stone-baked pizza for collection or delivery in Princes Risborough. Fast collection in 15 minutes from 14 High Street, HP27 0AX. Order now on Just Eat.',
    keywords: 'order pizza online, pizza delivery Princes Risborough, pizza collection HP27, Just Eat pizza',
    canonical: `${baseUrl}/order`,
    ogTitle: 'Order Now | Flame & Stone Pizza',
    ogDescription: 'Order stone-baked pizza for collection or delivery. Ready in 15 minutes.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal via-[#2a2a2a] to-stone-beige">
      <Header />
      
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair font-bold text-5xl md:text-7xl text-white mb-6">
              Order Now
            </h1>
            <p className="font-inter text-off-white text-xl max-w-2xl mx-auto">
              Choose collection or delivery and get ready for stone-baked perfection
            </p>
          </motion.div>

          {/* Two Order Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Collection Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-12 shadow-2xl"
            >
              <div className="w-32 h-32 bg-flame-orange rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="ri-shopping-bag-3-line text-6xl text-white"></i>
              </div>
              
              <h2 className="font-playfair font-bold text-4xl text-charcoal text-center mb-6">
                Collection
              </h2>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">Ready in just 15 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">No delivery fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">Pick up piping hot from the oven</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">14 High Street, HP27 0AX</span>
                </li>
              </ul>
              
              <a
                href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu?shipping=pickup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-flame-orange text-white font-inter font-bold text-xl py-5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                ORDER COLLECTION
                <i className="ri-arrow-right-line"></i>
              </a>
            </motion.div>

            {/* Delivery Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-12 shadow-2xl"
            >
              <div className="w-32 h-32 bg-flame-orange rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="ri-e-bike-2-line text-6xl text-white"></i>
              </div>
              
              <h2 className="font-playfair font-bold text-4xl text-charcoal text-center mb-6">
                Delivery
              </h2>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">Delivered to your door</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">Track your order in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">Contactless delivery available</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-2xl text-green-600 mt-1"></i>
                  <span className="font-inter text-lg text-charcoal">Covering Princes Risborough area</span>
                </li>
              </ul>
              
              <a
                href="https://www.just-eat.co.uk/restaurants-flame-and-stone-pizza-princes-risborough/menu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-flame-orange text-white font-inter font-bold text-xl py-5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                ORDER DELIVERY
                <i className="ri-arrow-right-line"></i>
              </a>
            </motion.div>
          </div>

          {/* Allergy Notice Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-flame-orange rounded-2xl p-6 mb-16 text-center"
          >
            <p className="font-inter font-bold text-white text-lg flex items-center justify-center gap-3 flex-wrap">
              <i className="ri-alert-line text-2xl"></i>
              <span>Allergies or intolerances? Contact us before ordering:</span>
              <a href="tel:01844345000" className="underline hover:no-underline cursor-pointer whitespace-nowrap">
                01844 345000
              </a>
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-playfair font-bold text-4xl text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#333333] transition-colors duration-300 cursor-pointer"
                  >
                    <span className="font-inter font-bold text-lg text-white pr-4">
                      {faq.question}
                    </span>
                    <i className={`ri-${openFaqIndex === index ? 'subtract' : 'add'}-line text-2xl text-flame-orange flex-shrink-0`}></i>
                  </button>
                  
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6"
                    >
                      <p className="font-inter text-off-white leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}