import React from 'react'
    import Header from './components/Header'
    import HeroCarousel from './components/HeroCarousel'
    import AboutSection from './components/AboutSection'
    import FeaturesSection from './components/FeaturesSection'
    import TestimonialsSection from './components/TestimonialsSection'
    import CTASection from './components/CTASection'
    import Footer from './components/Footer'

    export default function App() {
      return (
        <div className="overflow-hidden">
          <Header />
          <HeroCarousel />
          <AboutSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </div>
      )
    }
