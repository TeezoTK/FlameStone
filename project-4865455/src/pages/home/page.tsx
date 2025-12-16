import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import MobileOrderBar from '../../components/feature/MobileOrderBar';
import HeroSection from './components/HeroSection';
import SocialProofStrip from './components/SocialProofStrip';
import PopularPicks from './components/PopularPicks';
import DealsSection from './components/DealsSection';
import HowItWorks from './components/HowItWorks';
import LocationTeaser from './components/LocationTeaser';
import { useSEO, getBaseUrl } from '../../utils/seo';

export default function HomePage() {
  const baseUrl = getBaseUrl();

  useSEO({
    title: 'Princes Risborough Stone-Baked Pizza HP27 | Flame & Stone Pizza',
    description: 'Flame & Stone Pizza in Princes Risborough – handcrafted stone-baked pizzas with 24-hour fermented dough, locally sourced ingredients, and 2-minute Italian oven cooking. Order collection or delivery from 14 High Street, HP27 0AX.',
    keywords: 'pizza Princes Risborough, stone-baked pizza HP27, pizza delivery Buckinghamshire, Italian pizza, pizza collection, takeaway Princes Risborough',
    canonical: `${baseUrl}/`,
    ogTitle: 'Flame & Stone Pizza | Stone-Baked Pizza in Princes Risborough',
    ogDescription: 'Handcrafted stone-baked pizzas with 24-hour fermented dough. Order collection or delivery from 14 High Street, Princes Risborough.',
    ogType: 'restaurant',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Restaurant',
          '@id': `${baseUrl}/#restaurant`,
          name: 'Flame & Stone Pizza',
          image: `${baseUrl}/logo.png`,
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
          url: baseUrl,
          telephone: '+441844345000',
          email: 'info@flameandstonepizza.co.uk',
          servesCuisine: ['Italian', 'Pizza'],
          priceRange: '££',
          acceptsReservations: false,
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
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: baseUrl,
          name: 'Flame & Stone Pizza',
          description: 'Stone-baked pizza restaurant in Princes Risborough',
          publisher: {
            '@id': `${baseUrl}/#restaurant`,
          },
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}/#localbusiness`,
          name: 'Flame & Stone Pizza',
          description: 'Stone-baked pizza restaurant in Princes Risborough serving handcrafted pizzas with 24-hour fermented dough and locally sourced ingredients',
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
      ],
    },
  });

  useEffect(() => {
    // Load Food Hygiene Rating badge
    const script = document.createElement('script');
    script.src = 'https://ratings.food.gov.uk/embed/embed-badge.js';
    script.setAttribute('data-business-id', '1419376');
    script.setAttribute('data-rating-style', '2');
    script.async = true;
    
    const badgeContainer = document.getElementById('fhrs-badge');
    if (badgeContainer) {
      badgeContainer.appendChild(script);
    }

    return () => {
      if (badgeContainer && script.parentNode) {
        badgeContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <HeroSection />
        <SocialProofStrip />
        <PopularPicks />
        <DealsSection />
        <HowItWorks />
        <LocationTeaser />
      </main>
      <Footer />
      <MobileOrderBar />
    </div>
  );
}