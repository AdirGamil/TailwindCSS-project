import { Analytics } from './cmps/Analytics'
import { Hero } from './cmps/Hero'
import { Navbar } from './cmps/Navbar'

export function RootCmp() {
  return (
    <section className="main-container">
      <Navbar />
      <Hero/>
      <Analytics/>
    </section>
  )
}
