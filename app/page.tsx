import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { Stats } from './components/sections/Stats'
import { Testimonials } from './components/sections/Testimonials'
import { CTA } from './components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
