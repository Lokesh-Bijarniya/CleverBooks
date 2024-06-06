import React from 'react';
import HeroSection from './components/HeroSection';
import KeyProblemsSolved from './components/KeyProblemsSolved';
import KeyMetrics from './components/KeyMetrics';
import ProblemTarget from './components/ProblemTarget';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import FoundersSection from './components/FoundersSection';
import Crest from './components/Crest';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <HeroSection />
      <KeyProblemsSolved />
      <KeyMetrics />
      <Testimonial/>
      <ProblemTarget/>
      <Crest/>
      <FoundersSection/>
      <BlogSection/>
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
