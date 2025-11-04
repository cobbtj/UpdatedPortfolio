// src/app/page.tsx
import  Hero  from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import  Services  from '../components/sections/Services'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      
    </>
  )
}
