import {
  Header,
  HeroSection,
  FeaturesSection,
  ComparisonSection,
  CodeExamples,
  AdvancedExample,
  TestimonialsSection,
  CTASection,
  Footer
} from '@/components/landing'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
        <FeaturesSection />

        <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
        <CodeExamples />

        <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
        <AdvancedExample />

        <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
        <ComparisonSection />

        <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
        <TestimonialsSection />

        <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
