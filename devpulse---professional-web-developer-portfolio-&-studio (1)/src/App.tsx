/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { HeroBannerSection } from './components/HeroBannerSection';
import { AptechDiplomaSection } from './components/AptechDiplomaSection';
import { BannerGallerySection } from './components/BannerGallerySection';
import { VideoGallerySection } from './components/VideoGallerySection';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { PerformanceAuditSection } from './components/PerformanceAuditSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { AuthModal } from './components/AuthModal';
import { DashboardView } from './components/DashboardView';
import { BannerItem, ServiceItem } from './data/portfolioData';

function MainContent() {
  const { viewMode } = useApp();
  const [inspectedImage, setInspectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('Website Development');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service.title);
    setPrefilledMessage(`Inquiry for ${service.title} (${service.subtitle}):\nI am looking to develop a modern web solution with clean code and high performance.`);
    scrollToContact();
  };

  const handleSelectBannerStyle = (banner: BannerItem) => {
    setPrefilledMessage(`Website Project Request based on Visual Style [${banner.title}]:\nI love the aesthetics, typography, and layout of this banner style (${banner.tagline}) and would like to build our website with this exact vibe.`);
    scrollToContact();
  };

  const handleQuoteRequested = (quoteDetails: string) => {
    setPrefilledMessage(quoteDetails);
    scrollToContact();
  };

  // If in Dashboard View, render the separate Board!
  if (viewMode === 'dashboard') {
    return <DashboardView />;
  }

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Bar with Sign In / Dashboard triggers */}
      <Header onContactClick={scrollToContact} />

      {/* Hero Banner Showcase (Original Banner + Aptech Banners + Sibling Banners) */}
      <HeroBannerSection
        onContactClick={scrollToContact}
        onInspectBanner={(banner) => setInspectedImage({
          src: banner.imageSrc,
          title: banner.title,
          subtitle: `${banner.tagline} · ${banner.category}`
        })}
      />

      {/* Aptech Web Developer Diploma & Academic Certification Showcase */}
      <AptechDiplomaSection
        onInspectImage={(src, title) => setInspectedImage({
          src,
          title,
          subtitle: 'Aptech Computer Education · Diploma in Information Technology & Web Development'
        })}
      />

      {/* Video Gallery Section (Live Demos & Project Walkthroughs) */}
      <VideoGallerySection />

      {/* Dedicated Visual Identity Banner Gallery */}
      <BannerGallerySection
        onInspectBanner={(banner) => setInspectedImage({
          src: banner.imageSrc,
          title: banner.title,
          subtitle: `${banner.tagline} · ${banner.category}`
        })}
        onSelectBannerStyle={handleSelectBannerStyle}
      />

      {/* 3 Core Pillars (From Banner: Website Development, Custom Web Solutions, Website Maintenance) */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Performance & Core Web Vitals Audit */}
      <PerformanceAuditSection />

      {/* Tech Stack Matrix (HTML, CSS, JS, React, Node.js, MongoDB, Git, etc.) */}
      <TechStackSection />

      {/* Featured Production Projects & Case Studies */}
      <ProjectsSection />

      {/* Interactive Project Cost & Timeline Estimator */}
      <ProjectEstimator onQuoteRequested={handleQuoteRequested} />

      {/* Engineering Process */}
      <ProcessSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Contact Section: "Let's Work Together" */}
      <ContactSection
        initialMessage={prefilledMessage}
        initialService={selectedService}
      />

      {/* Footer */}
      <Footer />

      {/* Sign In / Sign Up Modal */}
      <AuthModal />

      {/* Lightbox Inspector for Full-Resolution Banners & Diplomas */}
      {inspectedImage && (
        <LightboxModal
          isOpen={!!inspectedImage}
          onClose={() => setInspectedImage(null)}
          imageSrc={inspectedImage.src}
          title={inspectedImage.title}
          subtitle={inspectedImage.subtitle}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
