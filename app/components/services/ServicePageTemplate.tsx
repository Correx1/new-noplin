'use client';
import HeroSection from './HeroSection';
import ServiceInfo from './ServiceInfo';
import ProcessSteps from './ProcessSteps';
import ComplementaryServices from './ComplementaryServices';
import FAQ from './FAQ';
import FinalCTASection from '../home/FinalCTASection';

export interface ServicePageTemplateProps {
  serviceName: string;
  department: 'Design' | 'Development' | 'Marketing' | 'Consulting' | 'Automation';
  tagline: string;
  turnaround: string;
  heroImage?: string;
  about: string;                  // About this Service
  whatItIncludes: { title: string; description: string; icon: string; color: string }[];
  whoItsFor: string;
  process: { step: string; title: string; description: string }[];
  complementaryServices: { name: string; url: string; desc?: string }[];
  faqs: { question: string; answer: string }[];
}

// Removed deptColors since it's no longer used by HeroSection

export default function ServicePageTemplate(props: ServicePageTemplateProps) {
  const {
    serviceName,
    tagline,
    turnaround,
    heroImage,
    about,
    whatItIncludes,
    whoItsFor,
    process,
    complementaryServices,
    faqs,
  } = props;

  return (
    <main>
      {/* HERO */}
      <HeroSection
        serviceName={serviceName}
        tagline={tagline}
        turnaround={turnaround}
        heroImage={heroImage}
      />

      {/* About + What It Includes + Who Its For */}
      <ServiceInfo about={about} whatItIncludes={whatItIncludes} whoItsFor={whoItsFor} />

     

      {/* Process Steps */}
      <ProcessSteps steps={process} />

      {/* Complementary Services */}
      <ComplementaryServices services={complementaryServices} />

      {/* FAQ */}
      <FAQ faqs={faqs} />
      <FinalCTASection/>
    </main>
  );
}