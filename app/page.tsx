import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FounderSection from '@/components/FounderSection'
import OurApproach from '@/components/OurApproach'
import TeamSection from '@/components/TeamSection'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactLocation from '@/components/ContactLocation'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Yemedhnat Internal Medicine Speciality Clinic',
  description:
    'Comprehensive internal medicine care built on 30 years of compassionate expertise. Modern diagnostics, personalized treatment plans, and lasting patient relationships in Bole Bulbula, Addis Ababa.',
  url: 'https://yemedhnatclinic.com',
  image: 'https://yemedhnatclinic.com/yemedhnat-team.JPG',
  logo: 'https://yemedhnatclinic.com/logo-transparent.png',
  telephone: '+251974246764',
  medicalSpecialty: ['https://schema.org/InternalMedicine', 'https://schema.org/Cardiovascular'],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bole Bulbula',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.015785,
    longitude: 38.763976,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Medhanit Aberra',
    jobTitle: 'Internal Medicine Specialist',
    url: 'https://yemedhnatclinic.com#about',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61551855060700',
    'https://www.tiktok.com/@yemedhnat',
    'https://t.me/yemedhinat',
    'https://www.instagram.com/yemedhnat?igsh=MTdtYzRyNmkxdWs1NA==',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+251974246764',
      areaServed: 'ET',
      availableLanguage: ['English', 'Amharic'],
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://yemedhnatclinic.com#contact',
      actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
    },
    result: {
      '@type': 'MedicalAppointment',
      name: 'Book an appointment with Yemedhnat Internal Medicine Clinic',
    },
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <section id="about">
          <FounderSection />
        </section>
        <OurApproach />
        <TeamSection />
        <section id="services">
          <Services />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="contact">
          <ContactLocation />
        </section>
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
