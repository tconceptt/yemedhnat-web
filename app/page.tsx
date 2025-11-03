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

export default function Home() {
  return (
    <>
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
