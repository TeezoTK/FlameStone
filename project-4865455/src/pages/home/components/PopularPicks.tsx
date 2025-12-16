import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const popularItems = [
  {
    name: 'Margherita',
    description: 'Classic simplicity – San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil on our signature stone-baked base',
    image: 'https://readdy.ai/api/search-image?query=classic%20margherita%20pizza%20with%20fresh%20mozzarella%20basil%20leaves%20and%20tomato%20sauce%20on%20wood%20fired%20stone%20baked%20crust%20simple%20clean%20white%20background%20professional%20food%20photography%20top%20down%20view%20rustic%20italian%20style%20authentic%20neapolitan%20pizza%20with%20charred%20edges&width=600&height=600&seq=marg001&orientation=squarish',
  },
  {
    name: 'Meat Feast',
    description: 'For the carnivore – pepperoni, Italian sausage, ham, and seasoned beef on a rich tomato base with melted mozzarella',
    image: 'https://readdy.ai/api/search-image?query=loaded%20meat%20feast%20pizza%20with%20pepperoni%20sausage%20ham%20beef%20toppings%20melted%20cheese%20on%20stone%20baked%20crust%20simple%20clean%20white%20background%20professional%20food%20photography%20top%20down%20view%20hearty%20generous%20meat%20toppings%20rustic%20presentation&width=600&height=600&seq=meat001&orientation=squarish',
  },
  {
    name: 'Vegetarian Supreme',
    description: 'Garden fresh – locally sourced peppers, mushrooms, red onions, sweetcorn, and olives with our house tomato sauce',
    image: 'https://readdy.ai/api/search-image?query=colorful%20vegetarian%20pizza%20with%20bell%20peppers%20mushrooms%20red%20onions%20olives%20sweetcorn%20fresh%20vegetables%20on%20stone%20baked%20crust%20simple%20clean%20white%20background%20professional%20food%20photography%20top%20down%20view%20vibrant%20healthy%20veggie%20toppings&width=600&height=600&seq=veg001&orientation=squarish',
  },
  {
    name: 'Flamin\' Hot',
    description: 'Turn up the heat – spicy pepperoni, jalapeños, hot chilli flakes, and fiery sauce for those who like it bold',
    image: 'https://readdy.ai/api/search-image?query=spicy%20hot%20pizza%20with%20pepperoni%20jalapenos%20red%20chili%20flakes%20on%20stone%20baked%20crust%20simple%20clean%20white%20background%20professional%20food%20photography%20top%20down%20view%20bold%20spicy%20toppings%20rustic%20italian%20style&width=600&height=600&seq=hot001&orientation=squarish',
  },
  {
    name: 'Garlic Bread',
    description: 'Stone-baked dough brushed with garlic butter, herbs, and finished with sea salt – perfect for sharing',
    image: 'https://readdy.ai/api/search-image?query=golden%20garlic%20bread%20slices%20with%20herbs%20butter%20and%20sea%20salt%20on%20rustic%20wooden%20board%20simple%20clean%20white%20background%20professional%20food%20photography%20warm%20lighting%20artisan%20bakery%20style%20appetizing%20side%20dish&width=600&height=600&seq=garlic001&orientation=squarish',
  },
  {
    name: 'Chocolate Fudge Cake',
    description: 'Rich, indulgent chocolate cake with a molten fudge center – the perfect sweet finish to your meal',
    image: 'https://readdy.ai/api/search-image?query=decadent%20chocolate%20fudge%20cake%20slice%20with%20molten%20center%20on%20white%20plate%20simple%20clean%20white%20background%20professional%20food%20photography%20rich%20dark%20chocolate%20dessert%20indulgent%20sweet%20treat%20elegant%20presentation&width=600&height=600&seq=choc001&orientation=squarish',
  },
];

export default function PopularPicks() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-charcoal mb-4">
            Popular Picks
          </h2>
          <p className="font-inter text-lg text-text-gray max-w-2xl mx-auto">
            Customer favourites made with quality ingredients and baked to perfection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-beige/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair font-bold text-2xl text-charcoal mb-3">
                  {item.name}
                </h3>
                <p className="font-inter text-sm text-text-gray leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  to="/order"
                  className="inline-flex items-center gap-2 bg-flame-orange text-white font-inter font-bold text-sm px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  ORDER NOW
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}