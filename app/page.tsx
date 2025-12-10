import { CTA } from './components/sections/CTA'
import { Hero } from './components/sections/Hero'
import { Industries } from './components/sections/Industries'
import ProcessTimeline from './components/sections/ProcessTimeline'
import { Services } from './components/sections/Services'
import { Stats } from './components/sections/Stats'
import { TechStack } from './components/sections/TechStack'
import { Testimonials } from './components/sections/Testimonials'
import { WhyChooseUs } from './components/sections/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Stats />
      <ProcessTimeline />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  )
}
