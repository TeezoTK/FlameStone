import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, getBaseUrl } from '../../utils/seo';

const categories = [
  {
    name: 'PIZZAS',
    description: 'Stone-baked classics and signature creations',
    image: 'https://readdy.ai/api/search-image?query=Close-up%20of%20artisan%20pizza%20slice%20with%20melted%20cheese%20and%20fresh%20toppings%20on%20stone-baked%20crust%2C%20shot%20on%20clean%20white%20marble%20background%2C%20professional%20food%20photography%20with%20dramatic%20side%20lighting%2C%20visible%20char%20marks%20and%20texture%20on%20crust%2C%20minimal%20simple%20backdrop%20emphasizing%20pizza%20quality%20and%20craftsmanship&width=800&height=800&seq=cat001&orientation=squarish',
    items: [
      { name: 'Margherita', desc: 'San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil' },
      { name: 'Pepperoni', desc: 'Tomato sauce, mozzarella, premium pepperoni slices' },
      { name: 'Meat Feast', desc: 'Pepperoni, Italian sausage, ham, bacon, mozzarella' },
      { name: 'Vegetarian Supreme', desc: 'Local peppers, mushrooms, red onions, sweetcorn, olives' },
      { name: 'Flamin\' Hot', desc: 'Spicy pepperoni, jalapeños, hot chilli flakes, fiery sauce' },
      { name: 'BBQ Chicken', desc: 'Grilled chicken, BBQ sauce, red onions, mozzarella' },
    ],
  },
  {
    name: 'STARTERS',
    description: 'Perfect beginnings to your meal',
    image: 'https://readdy.ai/api/search-image?query=Assorted%20Italian%20appetizers%20including%20garlic%20bread%20bruschetta%20and%20dipping%20sauces%20on%20rustic%20wooden%20board%2C%20overhead%20shot%20on%20white%20marble%20surface%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20colorful%20fresh%20ingredients%20visible%2C%20minimal%20clean%20background%20highlighting%20starter%20variety&width=800&height=800&seq=cat002&orientation=squarish',
    items: [
      { name: 'Garlic Bread', desc: 'Stone-baked dough, garlic butter, herbs, sea salt' },
      { name: 'Garlic Bread with Cheese', desc: 'Topped with melted mozzarella' },
      { name: 'Dough Balls', desc: 'Soft pizza dough balls with garlic butter dip' },
      { name: 'Chicken Wings', desc: 'Crispy wings with choice of sauce' },
    ],
  },
  {
    name: 'BURGERS',
    description: 'Gourmet burgers on brioche buns',
    image: 'https://readdy.ai/api/search-image?query=Gourmet%20burger%20with%20melted%20cheese%20lettuce%20tomato%20on%20brioche%20bun%2C%20close-up%20shot%20on%20white%20marble%20background%2C%20professional%20food%20photography%20with%20dramatic%20lighting%2C%20juicy%20patty%20and%20fresh%20toppings%20visible%2C%20minimal%20simple%20backdrop%20emphasizing%20burger%20quality&width=800&height=800&seq=cat003&orientation=squarish',
    items: [
      { name: 'Classic Beef Burger', desc: 'Prime beef patty, lettuce, tomato, onion, pickles' },
      { name: 'Cheese Burger', desc: 'Beef patty with melted cheddar' },
      { name: 'Chicken Burger', desc: 'Grilled chicken breast, mayo, lettuce' },
      { name: 'Veggie Burger', desc: 'Plant-based patty with fresh salad' },
    ],
  },
  {
    name: 'WRAPS',
    description: 'Fresh wraps packed with flavour',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20wrap%20sandwich%20cut%20in%20half%20showing%20colorful%20fillings%20with%20grilled%20chicken%20vegetables%20and%20sauce%2C%20shot%20on%20white%20marble%20surface%2C%20professional%20food%20photography%20with%20natural%20light%2C%20vibrant%20ingredients%20visible%20inside%20tortilla%2C%20minimal%20clean%20background%20highlighting%20wrap%20freshness&width=800&height=800&seq=cat004&orientation=squarish',
    items: [
      { name: 'Chicken Wrap', desc: 'Grilled chicken, lettuce, tomato, mayo' },
      { name: 'Spicy Chicken Wrap', desc: 'Chicken with jalapeños and hot sauce' },
      { name: 'Veggie Wrap', desc: 'Grilled vegetables, hummus, mixed leaves' },
    ],
  },
  {
    name: 'KEBABS',
    description: 'Authentic kebabs with fresh salad',
    image: 'https://readdy.ai/api/search-image?query=Grilled%20kebab%20meat%20with%20fresh%20salad%20and%20pita%20bread%20on%20wooden%20board%2C%20overhead%20shot%20on%20white%20marble%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%2C%20charred%20meat%20texture%20and%20colorful%20vegetables%20visible%2C%20minimal%20simple%20backdrop%20emphasizing%20kebab%20quality&width=800&height=800&seq=cat005&orientation=squarish',
    items: [
      { name: 'Chicken Doner', desc: 'Seasoned chicken with salad and sauce' },
      { name: 'Lamb Doner', desc: 'Tender lamb with fresh salad' },
      { name: 'Mixed Doner', desc: 'Chicken and lamb combination' },
      { name: 'Chicken Shish', desc: 'Grilled chicken skewers with salad' },
    ],
  },
  {
    name: 'SIDES',
    description: 'Perfect accompaniments',
    image: 'https://readdy.ai/api/search-image?query=Golden%20crispy%20fries%20and%20onion%20rings%20with%20dipping%20sauces%20in%20small%20bowls%2C%20shot%20on%20white%20marble%20surface%2C%20professional%20food%20photography%20with%20dramatic%20lighting%2C%20crunchy%20texture%20visible%2C%20minimal%20clean%20background%20highlighting%20side%20dish%20variety&width=800&height=800&seq=cat006&orientation=squarish',
    items: [
      { name: 'Chips', desc: 'Golden crispy fries' },
      { name: 'Cheesy Chips', desc: 'Fries topped with melted cheese' },
      { name: 'Onion Rings', desc: 'Crispy battered onion rings' },
      { name: 'Coleslaw', desc: 'Fresh homemade coleslaw' },
      { name: 'Side Salad', desc: 'Mixed leaves with dressing' },
    ],
  },
  {
    name: 'KIDS',
    description: 'Smaller portions for little ones',
    image: 'https://readdy.ai/api/search-image?query=Kids%20meal%20with%20small%20pizza%20nuggets%20and%20fries%20on%20colorful%20plate%2C%20overhead%20shot%20on%20white%20marble%20background%2C%20professional%20food%20photography%20with%20bright%20cheerful%20lighting%2C%20fun%20presentation%20for%20children%2C%20minimal%20simple%20backdrop%20emphasizing%20kid-friendly%20food&width=800&height=800&seq=cat007&orientation=squarish',
    items: [
      { name: 'Kids Pizza', desc: 'Small margherita or pepperoni' },
      { name: 'Chicken Nuggets', desc: 'With chips and drink' },
      { name: 'Kids Burger', desc: 'Small burger with chips' },
    ],
  },
  {
    name: 'DESSERTS',
    description: 'Sweet finishes',
    image: 'https://readdy.ai/api/search-image?query=Decadent%20chocolate%20desserts%20and%20ice%20cream%20on%20elegant%20white%20plate%2C%20close-up%20shot%20on%20marble%20surface%2C%20professional%20dessert%20photography%20with%20soft%20lighting%2C%20rich%20textures%20and%20glossy%20chocolate%20visible%2C%20minimal%20clean%20background%20highlighting%20sweet%20treats&width=800&height=800&seq=cat008&orientation=squarish',
    items: [
      { name: 'Chocolate Fudge Cake', desc: 'Rich chocolate with molten center' },
      { name: 'Cheesecake', desc: 'Creamy New York style' },
      { name: 'Ice Cream', desc: 'Choice of flavours' },
      { name: 'Brownie', desc: 'Warm chocolate brownie' },
    ],
  },
  {
    name: 'DRINKS',
    description: 'Refreshing beverages',
    image: 'https://readdy.ai/api/search-image?query=Assorted%20beverage%20bottles%20and%20cans%20including%20soft%20drinks%20arranged%20on%20white%20marble%20surface%2C%20overhead%20shot%20with%20clean%20composition%2C%20professional%20product%20photography%20with%20bright%20lighting%2C%20condensation%20droplets%20visible%2C%20minimal%20simple%20background%20highlighting%20drink%20selection&width=800&height=800&seq=cat009&orientation=squarish',
    items: [
      { name: 'Soft Drinks', desc: 'Coke, Pepsi, Fanta, Sprite (cans)' },
      { name: 'Bottles', desc: '1.5L bottles available' },
      { name: 'Water', desc: 'Still or sparkling' },
    ],
  },
];

export default function MenuPage() {
  const baseUrl = getBaseUrl();

  useSEO({
    title: 'Menu - Stone-Baked Pizza & More | Flame & Stone Pizza Princes Risborough',
    description: 'Explore our menu of handcrafted stone-baked pizzas, starters, burgers, wraps, kebabs, sides, and desserts. Fresh ingredients, authentic Italian recipes, cooked fast in our stone oven.',
    keywords: 'pizza menu, stone-baked pizza, Italian food menu, pizza toppings, takeaway menu Princes Risborough',
    canonical: `${baseUrl}/menu`,
    ogTitle: 'Our Menu | Flame & Stone Pizza',
    ogDescription: 'Handcrafted stone-baked pizzas and more. View our full menu of authentic Italian dishes.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      name: 'Flame & Stone Pizza Menu',
      description: 'Stone-baked pizzas, starters, burgers, wraps, kebabs, sides, desserts, and drinks',
      provider: {
        '@type': 'Restaurant',
        name: 'Flame & Stone Pizza',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14 High Street',
          addressLocality: 'Princes Risborough',
          postalCode: 'HP27 0AX',
          addressCountry: 'GB',
        },
      },
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Pizzas',
          description: 'Stone-baked classics and signature creations',
        },
        {
          '@type': 'MenuSection',
          name: 'Starters',
          description: 'Perfect beginnings to your meal',
        },
        {
          '@type': 'MenuSection',
          name: 'Burgers',
          description: 'Gourmet burgers on brioche buns',
        },
        {
          '@type': 'MenuSection',
          name: 'Wraps',
          description: 'Fresh wraps packed with flavour',
        },
        {
          '@type': 'MenuSection',
          name: 'Kebabs',
          description: 'Authentic kebabs with fresh salad',
        },
        {
          '@type': 'MenuSection',
          name: 'Sides',
          description: 'Perfect accompaniments',
        },
        {
          '@type': 'MenuSection',
          name: 'Kids',
          description: 'Smaller portions for little ones',
        },
        {
          '@type': 'MenuSection',
          name: 'Desserts',
          description: 'Sweet finishes',
        },
        {
          '@type': 'MenuSection',
          name: 'Drinks',
          description: 'Refreshing beverages',
        },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Flat%20lay%20of%20fresh%20pizza%20ingredients%20including%20tomatoes%20basil%20mozzarella%20flour%20and%20olive%20oil%20on%20dark%20rustic%20wooden%20table%2C%20overhead%20shot%20with%20artistic%20composition%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20vibrant%20colors%20and%20textures%20visible%2C%20ingredients%20arranged%20in%20organized%20pattern&width=1920&height=1080&seq=menuhero001&orientation=landscape"
          alt="Pizza ingredients"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair font-bold text-6xl md:text-7xl text-white mb-4"
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-inter text-off-white text-xl"
            >
              Every pizza made to order, every time
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories with Sample Items */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="font-bebas text-6xl text-charcoal tracking-wider mb-4">
                    {category.name}
                  </h2>
                  <p className="font-inter text-text-gray text-lg mb-6">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Sample Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="font-playfair font-bold text-xl text-charcoal mb-2">
                      {item.name}
                    </h3>
                    <p className="font-inter text-sm text-text-gray italic">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Category CTA */}
              <div className="text-center">
                <Link
                  to="/order"
                  className="inline-flex items-center gap-2 bg-flame-orange text-white font-inter font-bold text-base px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer"
                >
                  ORDER {category.name}
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}